# Sam — l'assistant du portfolio

Un Cloudflare Worker qui répond sur `victorsimonet.com/api/chat` et interroge un
modèle de **Workers AI**. Aucune clé d'API (binding `env.AI`), aucune machine à
garder allumée : le site et Sam restent joignables PC éteint.

## Ce qu'il fait

* Construit la base de connaissances en relisant `js/translations.js` **depuis le
  site en ligne** (cache 1 h) — le portfolio reste la source unique. Seules les
  données publiques y entrent : rien de la base RAG privée de Sam.
* Y ajoute le CV, recopié dans [`cv.txt`](cv.txt) et embarqué au déploiement.
  **Après chaque mise à jour du PDF, mettez ce fichier à jour puis redéployez.**
* Ne répond qu'aux questions sur Victor (voir ci-dessous).
* Diffuse la réponse au fil de l'eau, dans la langue du visiteur (fr / en / pt).
* Applique trois plafonds **avant** d'appeler le modèle.

## Rester sur le sujet

Une consigne seule ne suffit pas à un petit modèle : testé sur le vrai service,
il finissait par écrire du code ou une recette dès qu'on lui demandait
d'« ignorer ses instructions ». Chaque question passe donc d'abord par un
**filtre** : un appel très court (sans la fiche, 3 jetons de réponse) qui
tranche OUI/NON. Si c'est NON, le Worker renvoie lui-même un refus fixe dans la
langue du visiteur, et le modèle n'écrit rien.

Essais sur `llama-3.1-8b-instruct-fp8-fast` : code, recette après « ignore tes
instructions », lettre de motivation, politique et jeu de rôle sont refusés ;
salutations, questions de suivi, employeur et projets passent.

## Les plafonds

L'offre gratuite donne 10 000 neurons par jour (remise à zéro à 00:00 UTC). Une
question coûte ~27 neurons (filtre compris), ~38 au pire avec un long historique :
230 questions par jour restent sous le plafond.

| Variable | Défaut | Rôle |
|---|---|---|
| `LIMITE_GLOBALE_JOUR` | 230 | questions par jour pour tout le site |
| `LIMITE_IP_JOUR` | 25 | questions par jour et par visiteur |
| `LIMITE_IP_RAFALE` | 8 | questions par visiteur… |
| `FENETRE_RAFALE_MIN` | 10 | …sur cette fenêtre (minutes) |
| `MODELE` | `@cf/meta/llama-3.1-8b-instruct-fp8-fast` | modèle Workers AI (même prix que le 3B, bien plus fiable) |

Les compteurs vivent dans un **Durable Object** unique (SQLite, disponible en
gratuit) : décompte exact même sous requêtes simultanées. Un KV ne le garantit
pas et plafonne à 1 000 écritures/jour. Si l'appel au modèle échoue, la
question est remboursée.

Le visiteur est identifié par une empreinte SHA-256 de son IP salée par le
secret `SEL` et par la date : aucune IP n'est stockée, et l'empreinte change
chaque jour. En IPv6, c'est le bloc /64 qui compte (un abonné en possède un
entier). Sans `SEL`, le Worker refuse de répondre (503).

Côté site, une réponse 429 `{"erreur":"utilisateur"}` affiche « faites une
pause », `{"erreur":"global"}` affiche « Sam se repose jusqu'à demain ».

## Déployer

Prérequis : le domaine `victorsimonet.com` est géré par Cloudflare (DNS proxifié).

```bash
cd chatbot
npm install
npx wrangler login
npx wrangler ai models list         # vérifier que le modèle existe toujours
npx wrangler secret put SEL         # obligatoire : une chaîne aléatoire, à ne pas committer
npx wrangler deploy
```

Tester en ligne, sans le site :

```bash
curl -N https://victorsimonet.com/api/chat \
  -H "Origin: https://victorsimonet.com" -H "Content-Type: application/json" \
  -d '{"question":"Qui est Victor ?","langue":"fr"}'
```

`npm run dev` lance le Worker sur votre PC (`http://127.0.0.1:8787`) pour tester
avant de déployer. Il demande un fichier `chatbot/.dev.vars` contenant
`SEL=nimporte-quoi` (ignoré par git). Le compteur tourne en local, mais le
modèle reste celui de Cloudflare : ces essais consomment aussi des neurons.

## Bon à savoir

* Sur l'offre **Workers Free**, une fois les 10 000 neurons épuisés, les appels
  échouent au lieu d'être facturés : le plafond global protège surtout
  l'expérience des visiteurs. Sur l'offre payante, il évite la facture
  ($0,011 / 1 000 neurons).
* Suivi de la consommation : tableau de bord Cloudflare → AI → Workers AI.
* Changer une limite : modifier `[vars]` dans `wrangler.toml` puis redéployer.
