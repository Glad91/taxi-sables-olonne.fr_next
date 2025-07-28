# 🚀 Déploiement Test Vercel - Mode Preview

Guide simple pour déployer en mode preview privé sur Vercel.

## 🎯 Mode Preview (Recommandé)

Le mode preview Vercel génère automatiquement une URL privée pour chaque déploiement.

### Installation et Déploiement

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Se connecter à votre compte
vercel login

# 3. Déployer en mode preview
cd taxi-sables-olonne.fr_next
vercel
```

### Résultat

Vercel va générer une URL du type :
```
https://taxi-sables-olonne-fr-next-abc123-glad91.vercel.app
```

**✅ Avantages :**
- URL automatiquement privée
- Pas de configuration
- Nouvelle URL unique à chaque déploiement
- Parfait pour les tests

## 📱 Test Multi-Appareils

1. **Copier l'URL** générée par Vercel
2. **Tester sur mobile** en envoyant l'URL par SMS/email
3. **Partager** uniquement avec les personnes autorisées

## 🔧 Configuration Optionnelle

### Désactiver Analytics en Test

Dans Vercel Dashboard > Settings > Environment Variables :
```env
NEXT_PUBLIC_GA_ID=(laisser vide)
```

## 📋 Commandes Utiles

```bash
# Nouveau déploiement preview
vercel

# Voir tous les déploiements
vercel list

# Supprimer un déploiement
vercel rm [deployment-url]

# Logs en temps réel
vercel logs
```

## ⚠️ Important

- L'URL preview est **privée par défaut**
- Ne pas la partager publiquement
- Chaque `vercel` crée une nouvelle URL
- Parfait pour tests avant mise en production

---

## 🚀 Résumé 

```bash
vercel login
vercel
# → URL privée générée automatiquement
```

C'est tout ! 🎉