# Portfolio Mohamed Fechtali

Portfolio professionnel créé avec React.js (Vite) pour Mohamed Fechtali, designer d'infographies et graphique.

## 🚀 Technologies

- **React 19** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool rapide et moderne
- **TailwindCSS** - Framework CSS utilitaire avec palette de couleurs personnalisée
- **React Router** - Navigation entre les pages
- **Framer Motion** - Animations fluides et interactives

## 🎨 Palette de Couleurs

Le projet utilise une palette de couleurs personnalisée inspirée de l'image de référence :

- **mf-yellow** : Nuances de jaune (#FFBF00)
- **mf-orange** : Nuances d'orange (#FF9100)
- **mf-pink** : Nuances de rose (#FF007D)
- **mf-purple** : Nuances de violet (#8700FF)
- **mf-blue** : Nuances de bleu (#007DFF)

## 📁 Structure du Projet

```
portfolio/
├── public/                 # Fichiers statiques
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── PortfolioCard.jsx
│   │   ├── PortfolioModal.jsx
│   │   └── ContactForm.jsx
│   ├── pages/            # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/             # Données JSON
│   │   └── portfolio.json
│   ├── App.jsx           # Composant principal avec routing
│   ├── main.jsx          # Point d'entrée
│   └── index.css         # Styles globaux et Tailwind
├── tailwind.config.js    # Configuration TailwindCSS
├── postcss.config.js     # Configuration PostCSS
└── package.json
```

## 🛠️ Installation

1. **Cloner ou télécharger le projet**

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   - Le site sera accessible à `http://localhost:5173`

## 📦 Build pour Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

Pour prévisualiser le build de production :

```bash
npm run preview
```

## ✏️ Personnalisation

### Remplacer les Informations de Contact

1. **Dans `src/pages/Contact.jsx`** (ligne ~15-25) :
   ```jsx
   const contactInfo = [
     {
       icon: '📧',
       label: 'Email',
       value: 'votre.email@exemple.com',  // ← Modifier ici
       href: 'mailto:votre.email@exemple.com',
     },
     {
       icon: '📱',
       label: 'Téléphone',
       value: '+212 6XX XXX XXX',  // ← Modifier ici
       href: 'tel:+2126XXXXXXXX',
     },
     // ...
   ];
   ```

2. **Dans `src/components/Footer.jsx`** : Mettre à jour les liens sociaux avec vos vraies URLs.

### Remplacer les Images du Portfolio

1. **Ajouter vos images** dans le dossier `public/portfolio/` :
   ```
   public/
   └── portfolio/
       ├── project-1.jpg
       ├── project-2.jpg
       └── ...
   ```

2. **Mettre à jour `src/data/portfolio.json`** :
   ```json
   {
     "id": 1,
     "title": "Votre Projet",
     "image": "/portfolio/project-1.jpg",  // ← Chemin vers votre image
     // ...
   }
   ```

### Modifier le Contenu du Portfolio

Éditez le fichier `src/data/portfolio.json` pour :
- Ajouter/supprimer des projets
- Modifier les descriptions, défis, approches et résultats
- Ajuster les outils et tags

### Personnaliser les Couleurs

Dans `tailwind.config.js`, modifiez les valeurs hexadécimales des couleurs :

```js
colors: {
  'mf-yellow': {
    500: '#VOTRE_COULEUR',  // ← Modifier ici
    // ...
  },
  // ...
}
```

### Mettre à Jour les Informations Personnelles

- **Bio** : `src/pages/About.jsx`
- **Expériences** : `src/pages/Experience.jsx`
- **Services** : `src/pages/Services.jsx`
- **Hero** : `src/pages/Home.jsx`

## 📋 Checklist de Finalisation

Avant de mettre le site en production, assurez-vous de :

- [ ] Remplacer toutes les informations de contact (email, téléphone)
- [ ] Ajouter vos vraies images de portfolio dans `public/portfolio/`
- [ ] Mettre à jour `src/data/portfolio.json` avec vos vrais projets
- [ ] Vérifier et mettre à jour les liens sociaux dans `Footer.jsx`
- [ ] Optimiser les images (compression, formats WebP)
- [ ] Tester le formulaire de contact (configurer un backend si nécessaire)
- [ ] Vérifier la responsivité sur mobile, tablette et desktop
- [ ] Tester l'accessibilité (navigation au clavier, contraste)
- [ ] Mettre à jour les meta tags SEO dans `index.html`
- [ ] Créer une image Open Graph (`public/og-image.jpg` - 1200x630px recommandé)
- [ ] Tester tous les liens de navigation
- [ ] Vérifier la console pour les erreurs

## 🎯 Fonctionnalités

### Pages

- **Accueil** : Hero section avec CTA et animations
- **À Propos** : Bio, formation, compétences techniques et transversales
- **Portfolio** : Grille de projets avec filtres et modals détaillées
- **Services** : Liste des services avec tarifs
- **Expérience** : Timeline des expériences professionnelles
- **Contact** : Formulaire de contact avec validation

### Composants

- **Navbar** : Navigation sticky avec menu mobile
- **Footer** : Liens rapides et CTA
- **Button** : Boutons réutilisables avec variantes (primary, outline, gradient)
- **PortfolioCard** : Cartes de projets avec hover effects
- **PortfolioModal** : Modal lightbox avec case study détaillé
- **ContactForm** : Formulaire avec validation client-side

### Animations

- Animations d'entrée avec Framer Motion
- Hover effects sur les cartes et boutons
- Transitions fluides entre les pages
- Animations de scroll

## 🔧 Configuration du Formulaire de Contact

Actuellement, le formulaire simule un envoi. Pour le connecter à un vrai backend :

1. **Option 1 : Service Email (EmailJS, Formspree, etc.)**
   - Installer le service choisi
   - Mettre à jour `src/components/ContactForm.jsx` avec l'API

2. **Option 2 : Backend personnalisé**
   - Créer une API endpoint
   - Modifier la fonction `handleSubmit` dans `ContactForm.jsx`

## 📱 Responsive Design

Le site est entièrement responsive avec :
- Breakpoints mobile-first
- Navigation mobile avec menu hamburger
- Grilles adaptatives
- Typographie responsive

## ♿ Accessibilité

- HTML sémantique
- Navigation au clavier
- Contraste de couleurs approprié
- Labels ARIA où nécessaire
- Focus states visibles

## 📄 Licence

Ce projet est un portfolio personnel. Tous droits réservés.

## 👤 Auteur

**Mohamed Fechtali**
- Designer d'infographies et graphique
- 2 ans d'expérience
- Spécialisé en Photoshop, Illustrator, InDesign, Adobe XD

## 🆘 Support

Pour toute question ou problème :
1. Vérifier la documentation ci-dessus
2. Consulter les commentaires dans le code
3. Vérifier la console du navigateur pour les erreurs

---

**Note** : N'oubliez pas de remplacer les placeholders (images, contacts, projets) avant la mise en production !
# Hamouda-Portfolio
