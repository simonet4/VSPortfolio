# Sam — l'assistant du portfolio

Un Cloudflare Worker qui répond sur `victorsimonet.com/api/chat` et interroge un
modèle de **Workers AI**. Aucune clé d'API (binding `env.AI`), aucune machine à
garder allumée, et le site reste servi par GitHub Pages.

## Ce qu'il fait

* Construit la base de connaissances en relisant `js/translations.js` **depuis le
  site en ligne** (cache 1 h) — le portfolio reste la source unique. Seules les
  données publiques y entrent : rien de la base RAG privée de Sam.
* Diffuse la réponse au fil de l'eau, dans la langue du visiteur (fr / en / pt).
* Applique trois plafonds **avant** d'appeler le modèle.

## Les plafonds

L'offre gratuite donne 10 000 neurons par jour (remise à zéro à 00:00 UTC). Une
question coûte ~17 neurons, ~32 avec un long historique : 250 questions par jour
laissent une marge confortable.

| Variable | Défaut | Rôle |
|---|---|---|
| `LIMITE_GLOBALE_JOUR` | 250 | questions par jour pour tout le site |
| `LIMITE_IP_JOUR` | 25 | questions par jour et par visiteur |
| `LIMITE_IP_RAFALE` | 8 | questions par visiteur… |
| `FENETRE_RAFALE_MIN` | 10 | …sur cette fenêtre (minutes) |
| `MODELE` | `@cf/meta/llama-3.2-3b-instruct` | modèle Workers AI |

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

`npm run dev` lance le Worker en local branché sur le vrai Workers AI
(`--remote`) : ces appels consomment aussi des neurons.

## Bon à savoir

* Sur l'offre **Workers Free**, une fois les 10 000 neurons épuisés, les appels
  échouent au lieu d'être facturés : le plafond global protège surtout
  l'expérience des visiteurs. Sur l'offre payante, il évite la facture
  ($0,011 / 1 000 neurons).
* Suivi de la consommation : tableau de bord Cloudflare → AI → Workers AI.
* Changer une limite : modifier `[vars]` dans `wrangler.toml` puis redéployer.
