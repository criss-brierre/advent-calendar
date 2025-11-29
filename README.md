# Calendrier de l'Avent 2024

Un calendrier de l'avent interactif et festif créé avec React et Vite. Découvrez une nouvelle surprise chaque jour jusqu'à Noël !

## Aperçu

Ce projet propose une expérience immersive de calendrier de l'avent avec :
- 24 cases représentant les jours de décembre jusqu'à Noël
- Une surprise unique à découvrir chaque jour
- Un design festif et chaleureux aux couleurs de Noël
- Une interface mobile-first responsive
- Une animation spéciale le 25 décembre
- Sauvegarde automatique des cases ouvertes

## Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool rapide et moderne
- **Tailwind CSS** - Framework CSS utility-first
- **LocalStorage** - Pour sauvegarder les cases déjà ouvertes

## Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. Clonez ou téléchargez le projet

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`)

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise la version de production

## Structure du projet

```
advent-calendar/
├── src/
│   ├── components/
│   │   ├── AdventCalendar.jsx      # Composant principal du calendrier
│   │   ├── CalendarDay.jsx         # Composant pour chaque case/jour
│   │   ├── ChristmasAnimation.jsx  # Animation spéciale du 25 décembre
│   │   ├── Header.jsx              # En-tête avec décoration de Noël
│   │   └── SurpriseModal.jsx       # Modal/Drawer pour afficher les surprises
│   ├── data/
│   │   └── surprises.json          # Fichier JSON contenant les 24 surprises
│   ├── hooks/
│   │   └── useAdventCalendar.js    # Hook personnalisé pour la logique métier
│   ├── App.jsx                     # Composant racine de l'application
│   ├── main.jsx                    # Point d'entrée React
│   └── index.css                   # Styles globaux et Tailwind
├── index.html                      # Template HTML
├── vite.config.js                  # Configuration Vite
├── tailwind.config.js              # Configuration Tailwind CSS
├── postcss.config.js               # Configuration PostCSS
└── package.json                    # Dépendances et scripts
```

## Architecture des composants

### Header
Affiche le titre du calendrier avec des animations de neige et des décorations festives.

### AdventCalendar
Le composant principal qui :
- Affiche la grille de 24 cases
- Gère l'état global du calendrier
- Affiche l'animation spéciale le 25 décembre
- Contient les instructions pour l'utilisateur

### CalendarDay
Représente une case individuelle du calendrier avec :
- État visuel selon la disponibilité (verrouillé/déverrouillé/ouvert)
- Animation au clic
- Icônes décoratives (cadeau, étoile, verrou)
- Effet de neige

### SurpriseModal
Modal responsive qui s'affiche en :
- Drawer depuis le bas sur mobile
- Modal centrée sur desktop
- Affichage optimisé avec scrolling si contenu long
- Style spécial pour le 25 décembre

### ChristmasAnimation
Animation festive affichée uniquement le 25 décembre avec :
- Neige intense
- Message de Joyeux Noël
- Effets scintillants
- Disparition automatique après 8 secondes

## Hook personnalisé : useAdventCalendar

Le hook `useAdventCalendar` gère toute la logique métier :

- **openDay(day)** - Marque un jour comme ouvert
- **isDayOpened(day)** - Vérifie si un jour est déjà ouvert
- **canOpenDay(day)** - Vérifie si un jour peut être ouvert (date actuelle ou passée)
- **isToday(day)** - Vérifie si c'est le jour actuel
- **isPastDay(day)** - Vérifie si c'est un jour passé
- **isChristmasDay** - Boolean indiquant si c'est le 25 décembre
- **resetCalendar()** - Réinitialise le calendrier (mode développement)

## Modifier les surprises

Les surprises sont définies dans le fichier `src/data/surprises.json`. Chaque entrée a le format suivant :

```json
{
  "day": 1,
  "title": "Titre de la surprise",
  "content": "Contenu de la surprise (texte, citation, recette, etc.)"
}
```

### Pour personnaliser :

1. Ouvrez le fichier `src/data/surprises.json`
2. Modifiez les champs `title` et `content` selon vos besoins
3. Conservez la structure JSON
4. Assurez-vous d'avoir 24 entrées (jours 1 à 24)
5. Le fichier sera automatiquement rechargé au rafraîchissement

### Exemples de contenu :

- Citations inspirantes
- Recettes de saison
- Anecdotes sur Noël
- Suggestions de films
- Activités créatives
- Défis quotidiens
- Messages personnalisés

## Règles de fonctionnement

1. **Cases verrouillées** (grises avec cadenas) : Jours futurs non encore accessibles
2. **Case du jour** (dorée avec animation) : Case du jour actuel, cliquable
3. **Cases ouvertes** (vertes avec étoile) : Jours passés ou déjà ouverts, peuvent être ré-ouverts
4. **Sauvegarde automatique** : Les cases ouvertes sont sauvegardées dans le navigateur

## Mode test / développement

En mode développement, un bouton "Réinitialiser le calendrier" est disponible pour effacer toutes les données sauvegardées.

Pour activer tous les jours en développement (tests), décommentez la ligne suivante dans `src/hooks/useAdventCalendar.js` :

```javascript
// return true; // Dans la fonction canOpenDay
```

## Design responsive

- **Mobile (< 640px)** : Grille 3 colonnes, modal en drawer depuis le bas
- **Tablet (640px - 1024px)** : Grille 4 colonnes, modal centrée
- **Desktop (> 1024px)** : Grille 6 colonnes, modal centrée large

## Animations et effets

- Neige animée en arrière-plan
- Effet de scintillement sur les étoiles
- Animation de rebond sur les cadeaux
- Effet de rotation au clic sur une case
- Pulsation sur la case du jour
- Animation spéciale complète le 25 décembre

## Personnalisation des couleurs

Les couleurs de Noël sont définies dans `tailwind.config.js` :

```javascript
christmas: {
  red: '#C41E3A',
  darkred: '#8B0000',
  green: '#165B33',
  darkgreen: '#0F4229',
  gold: '#FFD700',
  snow: '#FFFAFA',
}
```

Vous pouvez les modifier selon vos préférences.

## Déploiement

### Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Hébergement

Le projet peut être déployé sur :
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- Tout hébergeur supportant les sites statiques

## Compatibilité navigateurs

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)

## Licence

Ce projet est libre de droits. Vous pouvez l'utiliser, le modifier et le distribuer librement.

## Crédits

Créé avec React, Vite et Tailwind CSS.
Développé par Claude Code.

---

Joyeux Noël et bon développement ! 🎄🎅✨
