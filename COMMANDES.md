# Commandes utiles

## Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le serveur démarre sur http://localhost:5173
# Hot reload activé : les modifications sont visibles instantanément
```

## Production

```bash
# Créer le build de production
npm run build

# Les fichiers optimisés seront dans le dossier dist/

# Prévisualiser le build de production
npm run preview
```

## Maintenance

```bash
# Vérifier les dépendances obsolètes
npm outdated

# Mettre à jour les dépendances
npm update

# Nettoyer le cache npm
npm cache clean --force

# Réinstaller toutes les dépendances
rm -rf node_modules package-lock.json
npm install
```

## Debug

```bash
# Vider le localStorage (dans la console du navigateur)
localStorage.clear()

# Voir les données sauvegardées
localStorage.getItem('advent-calendar-opened-days')

# Forcer une date spécifique (dans la console du navigateur)
# Note: Cela ne fonctionne pas directement, il faut modifier le code
```

## Git (si initialisé)

```bash
# Initialiser le dépôt Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Calendrier de l'Avent 2025"

# Ajouter un remote
git remote add origin <url-de-votre-repo>

# Pousser vers GitHub
git push -u origin main
```

## Déploiement

### Netlify

```bash
# Build automatique à partir du repository Git
# Build command: npm run build
# Publish directory: dist
```

### Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# En production
vercel --prod
```

### GitHub Pages

```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json :
# "homepage": "https://<username>.github.io/<repo-name>",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Déployer
npm run deploy
```

## Tests rapides

```bash
# Test 1: Vérifier que le serveur démarre
npm run dev

# Test 2: Vérifier le build
npm run build && npm run preview

# Test 3: Vérifier les fichiers
ls -la src/components/
ls -la src/data/
```

## Personnalisation rapide

```bash
# Éditer les surprises
nano src/data/surprises.json
# ou
code src/data/surprises.json

# Éditer les couleurs
nano tailwind.config.js

# Éditer le titre
nano src/components/Header.jsx
```

## Commandes pour débloquer tous les jours (tests)

Dans `src/hooks/useAdventCalendar.js`, décommenter ligne ~47 :

```javascript
// return true;
```

devient :

```javascript
return true;
```

## Afficher les logs

```bash
# Logs du serveur de développement
# Déjà visibles dans le terminal où npm run dev est lancé

# Logs du navigateur
# F12 > Console dans le navigateur
```

## Optimisation

```bash
# Analyser la taille du bundle
npm run build

# Les informations de taille s'affichent après le build
```

---

Pour plus d'informations, consulte :
- [README.md](README.md) - Documentation complète
- [GUIDE_RAPIDE.md](GUIDE_RAPIDE.md) - Guide rapide
- [RESUME_PROJET.md](RESUME_PROJET.md) - Résumé du projet
