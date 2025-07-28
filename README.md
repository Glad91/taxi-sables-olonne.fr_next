# 🚖 Taxi Sables-d'Olonne - Site Web Professionnel

Site web moderne et optimisé pour le service de taxi aux Sables-d'Olonne, développé avec Next.js 15 et optimisé pour les moteurs de recherche et l'IA (GEO - Generative Engine Optimization).

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Table des Matières

- [🎯 Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies](#️-technologies)
- [📁 Structure du Projet](#-structure-du-projet)
- [🚀 Installation](#-installation)
- [💻 Développement](#-développement)
- [📦 Scripts Disponibles](#-scripts-disponibles)
- [🔧 Configuration](#-configuration)
- [🌐 Déploiement](#-déploiement)
- [📈 SEO et Optimisations](#-seo-et-optimisations)
- [🤝 Contribution](#-contribution)
- [📞 Contact](#-contact)

## 🎯 Fonctionnalités

### 🚕 Services de Transport

- **Taxi urbain** - Service 24h/24 dans Les Sables-d'Olonne
- **Transferts aéroport** - Liaison Nantes-Atlantique ↔ Sables-d'Olonne
- **Transferts gare SNCF** - Transport depuis/vers la gare des Sables
- **Transport médical VSL** - Véhicule Sanitaire Léger conventionné
- **Courses longue distance** - Déplacements régionaux
- **Réservation en ligne** - Système de réservation intégré

### 🎨 Interface Utilisateur

- **Design responsive** - Optimisé mobile, tablette, desktop
- **Interface moderne** - Design épuré avec Tailwind CSS v4
- **Bouton d'appel mobile** - Accès direct au téléphone depuis le header
- **Navigation optimisée** - Menu hamburger avec call-to-action intégré
- **Accessibilité** - Respect des standards WCAG
- **Performance** - Chargement rapide et optimisé

### 📊 Optimisations SEO/GEO

- **Schema.org** - Données structurées (TaxiService, LocalBusiness, FAQ)
- **Open Graph** - Optimisation partage réseaux sociaux et WhatsApp
- **Web Vitals** - Monitoring performance en temps réel
- **Page 404 personnalisée** - Expérience utilisateur optimisée
- **Pages légales** - Mentions légales et maintenance
- **GEO optimisé** - Optimisation pour les moteurs de recherche IA
- **Contenu E-E-A-T** - Expertise, Expérience, Autorité, Fiabilité
- **Citations et sources** - Références officielles et statistiques
- **FAQ structurées** - Questions-réponses optimisées

## 🛠️ Technologies

### Frontend

- **[Next.js 15.4.4](https://nextjs.org/)** - Framework React avec App Router
- **[React 19.1.0](https://reactjs.org/)** - Bibliothèque interface utilisateur
- **[TypeScript 5](https://www.typescriptlang.org/)** - Typage statique JavaScript
- **[Tailwind CSS 4.1.11](https://tailwindcss.com/)** - Framework CSS utilitaire

### Outils de Développement

- **[ESLint 9](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[Prettier 3.6.2](https://prettier.io/)** - Formateur de code
- **[Lucide React](https://lucide.dev/)** - Icônes SVG
- **[Turbopack](https://turbo.build/pack)** - Bundler ultra-rapide (dev)
- **[Critters](https://github.com/GoogleChromeLabs/critters)** - CSS critique inline
- **[pnpm](https://pnpm.io/)** - Gestionnaire de paquets

### Déploiement

- **[Vercel](https://vercel.com/)** - Plateforme de déploiement recommandée
- **GitHub Actions** - CI/CD automatisé

## 📁 Structure du Projet

```
taxi-sables-olonne.fr_next/
├── 📁 app/                          # App Router Next.js 15
│   ├── 📄 page.tsx                  # Page d'accueil
│   ├── 📄 layout.tsx                # Layout principal
│   ├── 📄 not-found.tsx             # Page 404 personnalisée
│   ├── 📄 globals.css               # Styles globaux Tailwind
│   ├── 📄 sitemap.ts                # Génération sitemap
│   ├── 📁 components/               # Composants réutilisables
│   │   ├── 📄 Header.tsx            # Navigation avec bouton mobile
│   │   ├── 📄 Footer.tsx            # Pied de page
│   │   ├── 📄 CallToAction.tsx      # Boutons d'action
│   │   ├── 📄 StructuredData.tsx    # Données structurées Schema.org
│   │   ├── 📄 JsonLD.tsx            # Schémas JSON-LD
│   │   ├── 📄 OpenGraph.tsx         # Métadonnées Open Graph
│   │   └── 📄 WebVitals.tsx         # Monitoring performance
│   ├── 📁 tarifs/                   # Page tarifs harmonisés
│   ├── 📁 reservation/              # Page réservation
│   ├── 📁 contact/                  # Page contact
│   ├── 📁 aeroport-nantes/          # Service aéroport (180€)
│   ├── 📁 gare-sables-olonne/       # Service gare
│   ├── 📁 longue-distance/          # Courses longue distance
│   ├── 📁 transport-medical/        # VSL médical
│   ├── 📁 guide-taxi-sables-olonne/ # Guide complet
│   ├── 📁 avis-clients/             # Témoignages clients
│   ├── 📁 mentions-legales/         # Page légale
│   ├── 📁 maintenance/              # Page maintenance
│   ├── 📁 mots-cles-longue-traine/  # SEO longue traîne
│   └── 📁 robots.txt/               # Robots.txt dynamique
├── 📄 package.json                  # Dépendances et scripts
├── 📄 tsconfig.json                 # Configuration TypeScript
├── 📄 tailwind.config.ts            # Configuration Tailwind CSS
├── 📄 next.config.ts                # Configuration Next.js
├── 📄 postcss.config.mjs            # Configuration PostCSS
├── 📄 eslint.config.mjs             # Configuration ESLint
├── 📄 .prettierrc                   # Configuration Prettier
├── 📄 .prettierignore               # Fichiers ignorés Prettier
├── 📄 CLAUDE.md                     # Documentation développement IA
└── 📄 README.md                     # Documentation projet
```

## 🚀 Installation

### Prérequis

- **Node.js** 18.17+ ou 20.0+
- **pnpm** (recommandé) ou npm
- **Git**

### Clone du Projet

```bash
git clone https://github.com/Glad91/taxi-sables-olonne.fr_next.git
cd taxi-sables-olonne.fr_next
```

### Installation des Dépendances

```bash
# Avec pnpm (recommandé)
pnpm install

# Avec npm
npm install
```

## 💻 Développement

### Démarrage du Serveur de Développement

```bash
# Avec pnpm
pnpm dev

# Avec npm
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Mode de Développement

- **Turbopack** - Bundler ultra-rapide (10x plus rapide que Webpack)
- **Hot Reload** - Rechargement automatique
- **Fast Refresh** - Préservation de l'état React
- **TypeScript** - Vérification de types en temps réel
- **Tailwind JIT** - Compilation CSS à la demande

## 📦 Scripts Disponibles

```bash
# Développement
pnpm dev              # Serveur de développement avec Turbopack
pnpm build            # Build de production
pnpm start            # Serveur de production

# Qualité de Code
pnpm lint             # Vérification ESLint
pnpm lint:fix         # Correction automatique ESLint
pnpm format           # Formatage avec Prettier
pnpm format:check     # Vérification formatage
```

## 🔧 Configuration

### Variables d'Environnement

Créer un fichier `.env.local` :

```env
# Configuration Next.js
NEXT_PUBLIC_SITE_URL=https://taxi-sables-olonne.fr
NEXT_PUBLIC_PHONE=0625193143
NEXT_PUBLIC_EMAIL=contact@taxi-sables-olonne.fr

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Tailwind CSS v4

Le projet utilise Tailwind CSS v4 avec configuration dans `globals.css` :

```css
@import 'tailwindcss';
@theme {
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --color-taxi-yellow: #fbbf24;
  --color-taxi-orange: #f97316;
  --color-taxi-blue: #0ea5e9;
}
```

### ESLint + Prettier

Configuration automatique pour :

- Formatage de code cohérent
- Détection d'erreurs TypeScript
- Règles Next.js optimisées
- Intégration Prettier

## 🌐 Déploiement

### Déploiement Vercel (Recommandé)

```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel

# Production
vercel --prod
```

### Déploiement Manuel

```bash
# Build de production
pnpm build

# Export statique (optionnel)
pnpm export
```

### Variables d'Environnement Production

Configurer sur votre plateforme :

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_EMAIL`

## 📈 SEO et Optimisations

### Données Structurées Schema.org

- **TaxiService** - Service de taxi avec tarifs et zones
- **LocalBusiness** - Entreprise locale géolocalisée
- **FAQPage** - Questions fréquentes optimisées IA
- **WebSite** - Site web avec SearchAction
- **BreadcrumbList** - Navigation structurée
- **Service** - Services spécifiques par page

### Optimisations GEO (Generative Engine Optimization)

- **Citations sources** - Références officielles (+132% visibilité)
- **Statistiques fiables** - Données vérifiées
- **Contenu E-E-A-T** - Expertise et autorité
- **Format Q&A** - Questions-réponses structurées
- **Contexte géographique** - Sables-d'Olonne et région

### Performance

- **Core Web Vitals** monitoring temps réel (WebVitals.tsx)
- **Headers de performance** et cache optimisés
- **Images optimisées** avec Next.js Image (WebP/AVIF)
- **CSS critique** inline avec Critters
- **Turbopack** pour développement ultra-rapide
- **Lazy loading** automatique
- **Bundle splitting** intelligent

### Accessibilité

- **Contraste couleurs** WCAG AA
- **Navigation clavier** complète
- **Aria labels** appropriés
- **Sémantique HTML** correcte

## 🤝 Contribution

### Workflow de Développement

1. **Fork** le projet
2. **Créer** une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Développer** avec les standards du projet
4. **Tester** (`pnpm lint` + `pnpm format`)
5. **Commit** avec messages clairs
6. **Push** et créer une Pull Request

### Standards de Code

- **TypeScript strict** obligatoire
- **Composants fonctionnels** avec hooks
- **Tailwind CSS** pour les styles
- **ESLint + Prettier** configurés
- **Commits conventionnels** recommandés

### Architecture

- **App Router** Next.js 15
- **Server Components** par défaut
- **Client Components** uniquement si nécessaire
- **Composants réutilisables** dans `/components`
- **SEO-first** approche

## 📞 Contact

### Service Client

- **📞 Téléphone** : [06 25 19 31 43](tel:0625193143)
- **📍 Adresse** : Place Napoléon III, 85100 Les Sables-d'Olonne
- **🌐 Site Web** : [taxi-sables-olonne.fr](https://taxi-sables-olonne.fr)

### Développement

- **👨‍💻 Développeur** : [GitHub Profile](https://github.com/Glad91)
- **📧 Support Technique** : [Ouvrir une issue](https://github.com/Glad91/taxi-sables-olonne.fr_next/issues)
- **🔄 Contributions** : [Pull Requests](https://github.com/Glad91/taxi-sables-olonne.fr_next/pulls)

---

## 📄 Licence

Ce projet est sous licence privée. Tous droits réservés.

**Taxi Sables-d'Olonne** © 2024 - Service de taxi professionnel aux Sables-d'Olonne

---

<div align="center">

**🚖 Taxi Sables-d'Olonne - Votre transport fiable 24h/24**

Développé avec ❤️ par [Claude Code](https://claude.ai/code)

</div>
