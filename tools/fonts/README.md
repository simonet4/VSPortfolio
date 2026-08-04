# Polices — Inter

Les fichiers `Inter-*.ttf` de ce dossier sont des **artefacts générés**, exclus
du dépôt (`.gitignore`). `npm run cv` les reconstruit tout seul s'ils manquent.

Inutile donc de les versionner : le build réclame déjà `npm install` pour
`pdf-lib`, et ce même install fournit les WOFF d'où ils proviennent. Les
committer reviendrait à ajouter 270 Ko de binaire déjà présent dans
`node_modules`.

## Pourquoi embarquer une police

Sans police embarquée, un PDF s'en remet à celle du lecteur. Les espacements
changent alors d'un lecteur à l'autre. Inter est ici intégrée en sous-ensemble
(seuls les glyphes utilisés), ce qui rend les PDF produits autonomes : ils
s'affichent à l'identique partout, **sans** ces fichiers.

## D'où ils viennent

Convertis depuis les WOFF du paquet npm `@fontsource/inter` :

```bash
npm install
node tools/woff2ttf.js node_modules/@fontsource/inter/files/inter-latin-400-normal.woff tools/fonts/Inter-Regular.ttf
node tools/woff2ttf.js node_modules/@fontsource/inter/files/inter-latin-600-normal.woff tools/fonts/Inter-SemiBold.ttf
node tools/woff2ttf.js node_modules/@fontsource/inter/files/inter-latin-700-normal.woff tools/fonts/Inter-Bold.ttf
node tools/woff2ttf.js node_modules/@fontsource/inter/files/inter-latin-400-italic.woff tools/fonts/Inter-Italic.ttf
```

`pdf-lib` ne sait pas lire le WOFF, d'où la conversion. `tools/build-cv.js`
refait ces fichiers tout seul s'ils manquent et que `@fontsource/inter` est
installé.

## Licence

Inter — Copyright (c) 2016 The Inter Project Authors (https://github.com/rsms/inter)

Distribuée sous **SIL Open Font License 1.1**. Texte intégral :
<https://openfontlicense.org> — également repris dans
`node_modules/@fontsource/inter/LICENSE` après `npm install`.

L'OFL autorise l'usage, la modification et la redistribution, y compris
l'incorporation dans un document, à condition de conserver cette mention et de
ne pas vendre les fichiers de police seuls.
