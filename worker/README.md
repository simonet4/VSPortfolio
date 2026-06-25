# Proxy GitHub — Cloudflare Worker

Évite le rate-limit 403 de l'API GitHub anonyme (60 req/h → 5000 req/h + cache edge).

## 1. Créer un token GitHub
GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens** →
*Generate new token*. Aucune permission spéciale nécessaire (données publiques) ;
« Public repositories (read-only) » suffit. Copie le token.

## 2. Déployer le Worker

### Option A — Dashboard (sans rien installer)
1. dash.cloudflare.com → **Workers & Pages** → *Create* → *Create Worker*.
2. Nomme-le `github-proxy`, *Deploy*, puis *Edit code* : colle le contenu de
   [`github-proxy.js`](github-proxy.js), *Deploy*.
3. **Settings → Variables and Secrets** → *Add* → type **Secret** →
   nom `GITHUB_TOKEN`, valeur = ton token → *Deploy*.

### Option B — Wrangler (CLI)
```bash
npm i -g wrangler
wrangler login
cd worker
wrangler deploy github-proxy.js --name github-proxy
wrangler secret put GITHUB_TOKEN   # colle le token
```

## 3. (Recommandé) Sous-domaine propre
Dans le Worker → **Settings → Domains & Routes** → *Add* → **Custom domain** :
`gh.victorsimonet.com`. Cloudflare crée le DNS automatiquement.
(Sinon tu auras une URL `github-proxy.<ton-compte>.workers.dev`.)

## 4. Brancher le portfolio
Dans [`../js/script.js`](../js/script.js), change une seule ligne :
```js
const GITHUB_API_BASE = 'https://gh.victorsimonet.com';
```
(ou l'URL `*.workers.dev`). C'est tout — le front appelle le Worker au lieu de
GitHub, plus jamais de 403.

## Sécurité
Le token reste **côté serveur** (secret du Worker), jamais exposé au navigateur.
Le Worker n'accepte que des `GET` et n'ajoute le CORS que pour tes domaines.
