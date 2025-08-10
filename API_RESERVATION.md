# 🚕 API de Réservation Taxi

## Configuration Gmail

### Étapes pour configurer Gmail :

1. **Activer la validation en 2 étapes** sur votre compte Gmail
2. **Générer un mot de passe d'application** :
   - Aller dans `Compte Google > Sécurité > Validation en deux étapes`
   - Cliquer sur `Mots de passe d'application`
   - Sélectionner `Autre (nom personnalisé)` et entrer "Taxi Website"
   - Gmail génère un mot de passe de 16 caractères (ex: `abcd efgh ijkl mnop`)

3. **Configurer les variables d'environnement** dans `.env.local` :
```bash
GMAIL_USER=votre.email@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

## Utilisation de l'API

### Endpoint
```
POST /api/reservation
```

### Format des données à envoyer
```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "telephone": "06 25 19 31 43",
  "email": "jean.dupont@email.com",
  "dateReservation": "2024-12-25",
  "heureReservation": "14:30",
  "lieuDepart": "Gare SNCF Les Sables-d'Olonne",
  "lieuArrivee": "Aéroport Nantes Atlantique",
  "nombrePassagers": "2",
  "typeService": "Transfert aéroport",
  "informationsComplementaires": "Bagages volumineux, vol à 16h30"
}
```

### Exemple d'utilisation avec fetch
```javascript
const reservationData = {
  nom: "Dupont",
  prenom: "Jean",
  telephone: "06 25 19 31 43",
  email: "jean.dupont@email.com",
  dateReservation: "2024-12-25",
  heureReservation: "14:30",
  lieuDepart: "Gare SNCF Les Sables-d'Olonne",
  lieuArrivee: "Aéroport Nantes Atlantique",
  nombrePassagers: "2",
  typeService: "Transfert aéroport",
  informationsComplementaires: "Bagages volumineux"
}

try {
  const response = await fetch('/api/reservation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservationData)
  })
  
  const result = await response.json()
  
  if (response.ok) {
    console.log('Réservation envoyée :', result.message)
  } else {
    console.error('Erreur :', result.error)
  }
} catch (error) {
  console.error('Erreur réseau :', error)
}
```

## Format de l'email reçu

L'email envoyé contient :
- 📧 **Template HTML responsive** avec design professionnel
- 👤 **Informations client complètes** (nom, téléphone, email)
- 🗓️ **Détails de réservation** (date, heure, passagers)
- 🗺️ **Trajet clair** avec visualisation départ → arrivée
- 📞 **Lien direct pour appeler** le client
- 💬 **Informations complémentaires** si fournies
- ⚡ **Alerte urgence** pour traitement rapide

## Réponses de l'API

### Succès (200)
```json
{
  "success": true,
  "message": "Réservation envoyée avec succès"
}
```

### Erreurs

#### Champs manquants (400)
```json
{
  "error": "Champs manquants: nom, telephone"
}
```

#### Configuration manquante (500)
```json
{
  "error": "Configuration email manquante"
}
```

#### Erreur d'envoi (500)
```json
{
  "error": "Erreur lors de l'envoi de la réservation",
  "details": "Details de l'erreur"
}
```

## Déploiement sur Vercel

Ajouter les variables d'environnement dans Vercel :
1. Aller dans `Settings > Environment Variables`
2. Ajouter `GMAIL_USER` et `GMAIL_APP_PASSWORD`
3. Redéployer l'application

## Sécurité

- ✅ Utilise App Password Gmail (plus sécurisé)
- ✅ Variables d'environnement protégées
- ✅ Validation des champs obligatoires
- ✅ Gestion d'erreurs complète
- ✅ Logs pour debugging