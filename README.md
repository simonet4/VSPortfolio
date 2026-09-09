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
│   ├── github-data.json       # Instantané des dépôts (régénéré par CI)
│   ├── photo.png
│   └── Simonetoile.png        # Favicon
├── js/
│   ├── background.js          # Particules Canvas
│   ├── script.js              # i18n, filtres, API GitHub, UI
│   └── translations.js        # Contenu des 3 langues
├── .github/workflows/            # Rafraîchissement quotidien de l'instantané
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

## Cartes projet : lien et image

**Bouton « Démo »** — apparaît dès que le champ *Website* du dépôt GitHub est
rempli (Settings → General). Vide, pas de bouton.

**Image de la carte** — c'est la *Social preview* du dépôt (Settings → General).
Sans image téléversée, GitHub génère une carte automatique.

Dans les deux cas, rien à modifier dans le code.

## Données GitHub

Le site ne contacte plus l'API GitHub depuis le navigateur. Il lit
`docs/github-data.json`, un instantané régénéré chaque jour par
[une GitHub Action](.github/workflows/refresh-github-data.yml).

Deux raisons à ce choix :

* **Pas de limite de débit.** L'API publique plafonne à 60 requêtes/heure et par
  IP : sur un réseau partagé, la section projets finissait vide.
* **La Social preview.** Son URL n'existe que dans l'API GraphQL, via
  `openGraphImageUrl`, et GraphQL exige un token. L'Action en dispose
  gratuitement ; une page publique, non.

Pour rafraîchir sans attendre : onglet **Actions** → *Rafraîchir les données
GitHub* → **Run workflow**.

## Licence

Code sous [MIT](LICENSE). Le contenu personnel — textes, photo, CV, lettre de
motivation — n'est pas réutilisable.
