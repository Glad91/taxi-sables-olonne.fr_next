# 📊 Google Analytics - Guide d'Utilisation

Documentation pour l'utilisation du composant Google Analytics dans le projet Taxi Sables-d'Olonne.

## 🚀 Configuration

### Variables d'Environnement

Ajouter dans `.env.local` :

```env
# Google Analytics
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Intégration Automatique

Le composant `GoogleTag` est automatiquement intégré dans `layout.tsx` et ne fonctionne qu'en **production**.

## 📈 Utilisation du Hook Analytics

### Import et Utilisation

```tsx
'use client'

import { useGoogleAnalytics } from './components/GoogleTag'

export default function MyComponent() {
  const { trackEvent, trackPageView, trackConversion } = useGoogleAnalytics()

  const handleButtonClick = () => {
    trackEvent('button_click', 'engagement', 'header_cta')
  }

  return <button onClick={handleButtonClick}>Action Button</button>
}
```

### Méthodes Disponibles

#### `trackEvent(action, category, label, value)`

Suit les événements personnalisés :

```tsx
// Exemple : Suivi d'un appel téléphonique
trackEvent('phone_call', 'engagement', 'call_to_action_button')

// Exemple : Ouverture d'itinéraire
trackEvent('get_directions', 'engagement', 'maps_directions')

// Exemple : Démarrage de réservation
trackEvent('start_booking', 'engagement', 'reservation_button')
```

#### `trackPageView(url, title)`

Suit les vues de page manuellement :

```tsx
// Exemple : Vue de page custom
trackPageView('/tarifs', 'Page Tarifs Taxi')
```

#### `trackConversion(event_name, parameters)`

Suit les conversions importantes :

```tsx
// Exemple : Réservation complétée
trackConversion('booking_completed', {
  value: 45.5,
  currency: 'EUR',
  booking_type: 'airport_transfer',
})

// Exemple : Appel téléphonique
trackConversion('phone_call_started', {
  call_duration: 'unknown',
  source: 'website_header',
})
```

## 🎯 Événements Trackés Automatiquement

Le projet suit automatiquement ces événements :

### CallToAction Component

- **`phone_call`** - Clic sur bouton d'appel
- **`get_directions`** - Clic sur itinéraire Google Maps
- **`start_booking`** - Clic sur réservation en ligne

### Page Views

- **Toutes les pages** - Vues automatiques avec titre et URL

## 🔒 Confidentialité et RGPD

### Paramètres de Confidentialité

Le composant respecte la vie privée :

```tsx
gtag('config', GA_TRACKING_ID, {
  // Anonymise les adresses IP
  anonymize_ip: true,
  // Configuration des cookies sécurisés
  cookie_flags: 'SameSite=None;Secure',
  // Envoi automatique des vues de page
  send_page_view: true,
})
```

### Désactivation en Développement

Google Analytics est **automatiquement désactivé** en mode développement.

## 📊 Exemples d'Implémentation

### Tracking de Formulaire

```tsx
const handleFormSubmit = formData => {
  // Track form submission
  trackEvent('form_submit', 'engagement', 'contact_form')

  // Track conversion if booking
  if (formData.type === 'booking') {
    trackConversion('lead_generated', {
      form_type: 'contact',
      service_type: formData.service,
    })
  }
}
```

### Tracking de Navigation

```tsx
const handleNavigation = destination => {
  trackEvent('navigation_click', 'engagement', `nav_${destination}`)
}
```

### Tracking de Téléchargement

```tsx
const handleDownload = fileName => {
  trackEvent('file_download', 'engagement', fileName)
}
```

## 🛠️ Développement et Tests

### Vérification en Production

1. **Build de production** : `pnpm build`
2. **Serveur de production** : `pnpm start`
3. **Outils développeur** : Vérifier `Network` et `Console`
4. **Google Analytics** : Vérifier les événements en temps réel

### Debug Mode

Pour activer le debug en développement :

```tsx
// Temporairement en développement
if (process.env.NODE_ENV === 'development') {
  window.gtag('config', GA_TRACKING_ID, {
    debug_mode: true,
  })
}
```

## 📈 Métriques Recommandées

### Événements Business

- **Appels téléphoniques** - Conversions principales
- **Demandes d'itinéraire** - Intention géographique
- **Démarrages de réservation** - Funnel de conversion
- **Soumissions de formulaire** - Génération de leads

### Métriques de Performance

- **Core Web Vitals** - Performance du site
- **Temps de session** - Engagement utilisateur
- **Pages par session** - Exploration du contenu
- **Taux de rebond** - Qualité du trafic

## 🔧 Maintenance

### Mise à Jour de l'ID de Suivi

Modifier `.env.local` ou les variables d'environnement de production.

### Ajout de Nouveaux Événements

1. Identifier l'action à tracker
2. Choisir la catégorie appropriée
3. Implémenter avec `trackEvent()`
4. Tester en production
5. Vérifier dans Google Analytics

---

**Note** : Ce système respecte les standards de confidentialité et ne fonctionne qu'en production pour éviter le tracking pendant le développement.
