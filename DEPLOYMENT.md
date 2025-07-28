# 🚀 Guide de Déploiement - Site de Test Privé

Ce guide vous explique comment déployer votre site taxi sur Vercel en mode **test privé** pour qu'il ne soit pas visible publiquement.

## 🔒 Méthodes de Protection

### Option 1: URL de Preview Privée (Recommandée)

**Avantages :** Simple, pas de code supplémentaire
**Inconvénients :** URL complexe à retenir

```bash
# 1. Déployer en mode preview
vercel

# 2. Ne pas promouvoir en production
# L'URL sera du type: https://taxi-sables-xyz-glad91.vercel.app
```

### Option 2: Protection par Mot de Passe

**Avantages :** URL propre, sécurisé
**Inconvénients :** Demande authentification

Le middleware `middleware.ts` est déjà configuré pour protéger le site.

## 📋 Instructions de Déploiement

### Étape 1: Configuration Vercel

```bash
# Installer Vercel CLI si pas déjà fait
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer en mode preview
cd taxi-sables-olonne.fr_next
vercel
```

### Étape 2: Configuration des Variables d'Environnement

Sur le dashboard Vercel :

1. Aller dans **Settings > Environment Variables**
2. Ajouter ces variables :

```env
# Pour site de test
VERCEL_ENV=preview
BASIC_AUTH_USER=test
BASIC_AUTH_PASSWORD=taxi2024

# Site info
NEXT_PUBLIC_SITE_URL=https://taxi-sables-olonne.fr
NEXT_PUBLIC_PHONE=0625193143
NEXT_PUBLIC_EMAIL=contact@taxi-sables-olonne.fr

# Analytics désactivées en test
NEXT_PUBLIC_GA_ID=(laisser vide)
```

### Étape 3: Déploiement

#### Pour un test rapide (URL privée) :
```bash
vercel
# URL générée automatiquement: https://taxi-xxx-glad91.vercel.app
```

#### Pour un domaine custom protégé :
```bash
vercel --prod
# Puis configurer protection par mot de passe
```

## 🔧 Configuration Protection par Mot de Passe

### Identifiants par défaut :
- **Utilisateur :** `test`
- **Mot de passe :** `taxi2024`

### Modifier les identifiants :

1. Dans Vercel Dashboard > Settings > Environment Variables
2. Modifier :
   - `BASIC_AUTH_USER=votre_nom`
   - `BASIC_AUTH_PASSWORD=votre_mot_de_passe`

## 🌐 Types d'URLs Vercel

### URL de Preview (Automatique)
```
https://taxi-sables-olonne-fr-next-abc123.vercel.app
```
- ✅ Automatiquement privée
- ✅ Nouvelle URL à chaque déploiement
- ❌ URL complexe

### URL de Production (Domaine)
```
https://votre-domaine.vercel.app
```
- ✅ URL propre
- ❌ Publique par défaut (besoin protection)

## 🔐 Méthodes de Protection Avancées

### 1. Protection IP (Vercel Pro)
```javascript
// middleware.ts
const allowedIPs = ['192.168.1.1', '203.0.113.1']
const clientIP = request.ip || request.headers.get('x-forwarded-for')

if (!allowedIPs.includes(clientIP)) {
  return new Response('Accès refusé', { status: 403 })
}
```

### 2. Protection par Token URL
```javascript
// middleware.ts
const token = request.nextUrl.searchParams.get('token')
if (token !== 'taxi-test-2024') {
  return new Response('Token requis', { status: 401 })
}
```

### 3. Robots.txt Restrictif
```txt
# robots.txt (déjà configuré)
User-agent: *
Disallow: /
```

## 📱 Test sur Mobile

### Via URL privée :
1. Obtenir l'URL de preview Vercel
2. Envoyer par SMS/email sécurisé
3. Tester directement

### Via QR Code :
```bash
# Générer QR code de l'URL
npx qrcode-terminal https://votre-url-preview.vercel.app
```

## 🚀 Commandes Utiles

```bash
# Déploiement preview
vercel

# Voir les déploiements
vercel list

# Logs en temps réel
vercel logs

# Supprimer un déploiement
vercel rm deployment-url

# Variables d'environnement
vercel env list
vercel env add VARIABLE_NAME
```

## ⚠️ Points Importants

### ✅ À Faire :
- Utiliser des URLs de preview pour les tests
- Configurer les variables d'environnement
- Désactiver Google Analytics en test
- Tester sur différents appareils

### ❌ À Éviter :
- Partager l'URL de test publiquement
- Laisser les Analytics actives en test
- Oublier de supprimer les déploiements test
- Utiliser des mots de passe faibles

## 🎯 Recommandation

**Pour un test rapide :** Utilisez `vercel` pour une URL preview privée
**Pour un test professionnel :** Configurez la protection par mot de passe

---

## 🔑 Résumé Rapide

```bash
# 1. Déployer en test
vercel

# 2. URL générée (privée par défaut)
# https://taxi-sables-xxx.vercel.app

# 3. Tester en toute sécurité !
```

**Identifiants si protection activée :**
- Utilisateur : `test`
- Mot de passe : `taxi2024`