# Guide Rapide - Calendrier de l'Avent

## Démarrage rapide

```bash
# Installation
npm install

# Lancement
npm run dev
```

Puis ouvre ton navigateur sur `http://localhost:5173`

## Tester facilement en mode développement

### Option 1 : Débloquer tous les jours (recommandé pour les tests)

1. Ouvre le fichier `src/hooks/useAdventCalendar.js`
2. Trouve la fonction `canOpenDay` (ligne ~42)
3. Décommente la ligne suivante :
```javascript
// return true;
```

Tous les jours seront maintenant déverrouillés !

### Option 2 : Modifier la date actuelle

Dans le navigateur, ouvre la console développeur (F12) et tape :
```javascript
localStorage.clear(); // Réinitialise les cases ouvertes
```

### Option 3 : Bouton de réinitialisation

En mode développement, un bouton "Réinitialiser le calendrier" apparaît en bas de la page pour effacer toutes les données sauvegardées.

## Personnaliser les surprises

Édite le fichier `src/data/surprises.json` :

```json
{
  "day": 1,
  "title": "Mon titre personnalisé",
  "content": "Mon contenu personnalisé"
}
```

Les modifications seront visibles après rafraîchissement de la page.

## Structure des couleurs

Dans `tailwind.config.js`, tu trouveras les couleurs de Noël :

```javascript
christmas: {
  red: '#C41E3A',      // Rouge Noël
  darkred: '#8B0000',  // Rouge foncé
  green: '#165B33',    // Vert Noël
  darkgreen: '#0F4229',// Vert foncé
  gold: '#FFD700',     // Or
  snow: '#FFFAFA',     // Blanc neige
}
```

## Animations disponibles

- `animate-snow-fall` : Chute de neige
- `animate-bounce-slow` : Rebond lent
- `animate-pulse-slow` : Pulsation lente
- `animate-wiggle` : Balancement
- `animate-sparkle` : Scintillement

## Astuces

### Tester l'animation du 25 décembre

1. Ouvre `src/components/AdventCalendar.jsx`
2. Change temporairement :
```javascript
{isChristmasDay && <ChristmasAnimation />}
```
en :
```javascript
{true && <ChristmasAnimation />}
```

### Modifier la grille sur mobile

Dans `src/components/AdventCalendar.jsx`, ligne ~72 :
```javascript
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 ...">
```

- `grid-cols-3` = 3 colonnes sur mobile
- `sm:grid-cols-4` = 4 colonnes sur tablette
- `md:grid-cols-6` = 6 colonnes sur desktop

## Build pour production

```bash
npm run build
```

Les fichiers seront dans le dossier `dist/` et prêts pour le déploiement.

## Problèmes courants

### Les cases ne s'ouvrent pas
- Vérifie que tu es bien en décembre ou active le mode test (voir Option 1)

### Les styles ne s'appliquent pas
- Vérifie que Tailwind est bien configuré
- Relance `npm run dev`

### Le localStorage ne fonctionne pas
- Vérifie que ton navigateur autorise le localStorage
- Essaie en navigation privée

## Support

Pour toute question, consulte le [README.md](README.md) complet.

Bon développement et Joyeux Noël ! 🎄
