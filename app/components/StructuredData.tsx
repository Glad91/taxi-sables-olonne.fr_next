interface StructuredDataProps {
  type?: 'TaxiService' | 'LocalBusiness' | 'Review'
  data?: object
}

export default function StructuredData({ type = 'TaxiService', data }: StructuredDataProps) {
  const getTaxiServiceSchema = () => ({
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Sables-d'Olonne",
    "description": "Service de taxi professionnel aux Sables-d'Olonne et ses alentours. Disponible 24h/24 et 7j/7 pour tous vos déplacements.",
    "url": "https://taxi-sables-olonne.fr",
    "telephone": "+33625193143",
    "email": "contact@taxi-sables-olonne.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Place Napoléon III",
      "addressLocality": "Les Sables-d'Olonne",
      "postalCode": "85100",
      "addressRegion": "Vendée",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.496002",
      "longitude": "-1.783313"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": {
      "@type": "Place",
      "name": "Les Sables-d'Olonne et alentours"
    },
    "areaServed": [
      "Les Sables-d'Olonne",
      "Olonne-sur-Mer", 
      "Château-d'Olonne",
      "Talmont-Saint-Hilaire",
      "La Chaume",
      "Vendée"
    ],
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de taxi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transfert Gare SNCF",
            "description": "Transport depuis et vers la gare SNCF des Sables-d'Olonne"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Transfert Aéroport Nantes",
            "description": "Transport vers l'aéroport Nantes Atlantique"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Transport médical",
            "description": "VSL conventionné pour transport médical assis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Longue distance",
            "description": "Services longue distance vers La Roche, Nantes, Bordeaux"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Taxi Sables-d'Olonne"
    },
    "sameAs": [
      "https://taxi-sables-olonne.fr"
    ]
  })

  const getLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Taxi Sables-d'Olonne",
    "description": "Service de taxi professionnel aux Sables-d'Olonne",
    "url": "https://taxi-sables-olonne.fr",
    "telephone": "+33625193143",
    "email": "contact@taxi-sables-olonne.fr",
    "address": {
      "@type": "PostalAddress", 
      "streetAddress": "Place Napoléon III",
      "addressLocality": "Les Sables-d'Olonne",
      "postalCode": "85100",
      "addressRegion": "Vendée",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.496002",
      "longitude": "-1.783313"
    },
    "openingHours": "Mo-Su 00:00-23:59"
  })

  const getSchema = () => {
    if (data) return data
    
    switch (type) {
      case 'LocalBusiness':
        return getLocalBusinessSchema()
      case 'TaxiService':
      default:
        return getTaxiServiceSchema()
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }}
    />
  )
}