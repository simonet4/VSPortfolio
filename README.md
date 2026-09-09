# Portfolio — Victor Simonet

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fvictorsimonet.com&label=victorsimonet.com)](https://victorsimonet.com)
![Project Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT_Modified-blue)

** En ligne :** [victorsimonet.com](https://victorsimonet.com)

Portfolio personnel d'un alternant **développeur Odoo** orienté **data & IA**.
Site statique, sans framework ni étape de compilation : on clone, on ouvre
`index.html`.

## Fonctionnalités

* ** Trilingue (i18n)** — français, anglais, portugais, sans rechargement.
  La langue choisie est mémorisée et `<html lang>` suit.
* ** Thème clair / sombre** — détection système, bascule manuelle, persistance.
* ** Réalisations filtrables** — la page ouvre sur une sélection courte
  (« L'essentiel »), les filtres dépliant l'ensemble par catégorie ou distinction.
* ** Projets GitHub** — récupérés via l'API, avec une chaîne de repli robuste :
  cache local → cache périmé → instantané statique → message clair.
* ** Fond interactif** — particules en Canvas 2D, respectant
  `prefers-reduced-motion`.
* ** Responsive** — pensé mobile d'abord.

## Stack

Aucun framework, aucune dépendance npm : le site tourne tel quel.

* **HTML5** — structure sémantique, données structurées Schema.org
* **CSS3** — variables CSS pour le thème, pas de préprocesseur
* **JavaScript (ES6+)** — vanilla, aucune bibliothèque
* **Font Awesome** + **Google Fonts** — via CDN

## Structure

```text
.
├── css/
│   └── style.css              # Styles (thème via variables CSS)
├── docs/
│   ├── CV_Victor_Simonet.pdf
│   ├── Lettre_Motivation_Victor_Simonet.pdf
│   ├── github-fallback.json   # Instantané des dépôts (repli hors-ligne)
│   ├── photo.png
│   └── Simonetoile.png        # Favicon
├── js/
│   ├── background.js          # Particules Canvas
│   ├── script.js              # i18n, filtres, API GitHub, UI
│   └── translations.js        # Contenu des 3 langues
├── worker/
│   ├── github-proxy.js        # Cloudflare Worker : proxy API GitHub
│   └── README.md              # Déploiement du Worker
├── index.html                 # Point d'entrée unique
├── CNAME                      # Domaine personnalisé
├── LICENSE                    # MIT + exception sur le contenu personnel
└── README.md
```

## Modifier le contenu

Presque tout le texte vit dans [`js/translations.js`](js/translations.js), en
trois langues. Les blocs `experiences.items` acceptent :

| Champ | Rôle |
| --- | --- |
| `cat` | `pro`, `study` ou `perso` — pilote les filtres |
| `featured` | remonte la fiche dans « L'essentiel » |
| `award` | affiche un bandeau de distinction |
| `link` / `linkLabel` | lien externe en bas de fiche |

Le texte de repli écrit en dur dans `index.html` doit rester aligné sur la
version française : il s'affiche avant l'exécution du JavaScript.

## Repli de l'API GitHub

L'API publique est limitée à 60 requêtes/heure par IP. `js/script.js` tente
dans l'ordre : cache mémoire → cache local frais → API → cache périmé →
`docs/github-fallback.json` → message d'erreur.

Pour rafraîchir l'instantané statique :

```bash
curl -s "https://api.github.com/users/simonet4/repos?sort=updated&per_page=100" \
  | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>{const r=JSON.parse(d);console.log(JSON.stringify({generated_at:new Date().toISOString(),repos:r.map(x=>({name:x.name,description:x.description,html_url:x.html_url,language:x.language,stargazers_count:x.stargazers_count,forks_count:x.forks_count,updated_at:x.updated_at,topics:x.topics||[],fork:!!x.fork,homepage:x.homepage||null}))},null,2))}" \
  > docs/github-fallback.json
```

Pour supprimer la limite, déployez le Worker de [`worker/`](worker/) et pointez
`GITHUB_API_BASE` dans `js/script.js` vers son URL.

## Licence

Code sous [MIT](LICENSE). Le contenu personnel — textes, photo, CV, lettre de
motivation — n'est pas réutilisable.
