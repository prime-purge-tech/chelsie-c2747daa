# Sweet Bloom Interface

Reprends le design de Chelsie avec un style glassmorphism rose/violet doux :



- Fond dégradé doux allant du rose pâle au violet lavande 

  (haut-gauche rose #ffd6e8 vers bas-droite violet #c9a7f5)

- Toutes les cartes en verre dépoli : fond blanc semi-transparent 

  (opacité ~25-30%), backdrop-filter blur, bordure fine blanche 

  semi-transparente, coins très arrondis (16-20px)

- Texte en camaïeu violet foncé/bordeaux (#4a1b3d pour les titres, 

  #7a3f63 pour le texte secondaire) — jamais de noir pur

- Badges/pills en verre dépoli avec icônes (Tabler icons outline)

- Bouton principal en dégradé rose vers violet (#f6a6d0 → #c48ae0), 

  texte blanc, ombre douce colorée

- Champ de saisie en verre dépoli clair avec bordure blanche

- Ambiance générale : douce, chaleureuse, féminine, jamais criarde 

  ni "IA générique sombre"



Applique ce style à toute l'interface (formulaire d'ajout de bot, 

liste des bots connectés, badges de fonctionnalités).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://chelsie.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7ec775f5-0198-4147-b051-f5a3fd8e8368).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
