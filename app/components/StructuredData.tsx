interface StructuredDataProps {
  type?: 'TaxiService' | 'LocalBusiness' | 'Review' | 'FAQ'
  data?: object
}

export default function StructuredData({
  type = 'TaxiService',
  data,
}: StructuredDataProps) {
  const getTaxiServiceSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: "Taxi Sables-d'Olonne",
    description:
      "Service de taxi professionnel aux Sables-d'Olonne et ses alentours. Disponible 24h/24 et 7j/7 pour tous vos déplacements.",
    url: 'https://taxi-sables-olonne.fr',
    telephone: '+33625193143',
    email: 'contact@taxi-sables-olonne.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Place Napoléon III',
      addressLocality: "Les Sables-d'Olonne",
      postalCode: '85100',
      addressRegion: 'Vendée',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '46.496002',
      longitude: '-1.783313',
    },
    openingHours: 'Mo-Su 00:00-23:59',
    serviceArea: {
      '@type': 'Place',
      name: "Les Sables-d'Olonne et alentours",
    },
    areaServed: [
      "Les Sables-d'Olonne",
      'Olonne-sur-Mer',
      "Château-d'Olonne",
      'Talmont-Saint-Hilaire',
      'La Chaume',
      'Vendée',
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de taxi',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transfert Gare SNCF',
            description:
              "Transport depuis et vers la gare SNCF des Sables-d'Olonne",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transfert Aéroport Nantes',
            description: "Transport vers l'aéroport Nantes Atlantique",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transport médical',
            description: 'VSL conventionné pour transport médical assis',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Longue distance',
            description:
              'Services longue distance vers La Roche, Nantes, Bordeaux',
          },
        },
      ],
    },
    founder: {
      '@type': 'Person',
      name: "Taxi Sables-d'Olonne",
    },
    sameAs: ['https://taxi-sables-olonne.fr'],
  })

  const getLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Taxi Sables-d'Olonne",
    description: "Service de taxi professionnel aux Sables-d'Olonne",
    url: 'https://taxi-sables-olonne.fr',
    telephone: '+33625193143',
    email: 'contact@taxi-sables-olonne.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Place Napoléon III',
      addressLocality: "Les Sables-d'Olonne",
      postalCode: '85100',
      addressRegion: 'Vendée',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '46.496002',
      longitude: '-1.783313',
    },
    openingHours: 'Mo-Su 00:00-23:59',
  })

  const getFAQSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Combien coûte un taxi aux Sables-d'Olonne ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nos tarifs suivent la réglementation préfectorale. Selon l'INSEE 2024, le tarif moyen d'un taxi en Vendée est de 2,30€ du kilomètre. Nous pratiquons des tarifs transparents : prise en charge 2,90€ + 2,16€/km en journée, 3,24€/km la nuit et dimanche.",
        },
      },
      {
        '@type': 'Question',
        name: "Quel est le délai d'intervention d'un taxi aux Sables-d'Olonne ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Notre temps d'intervention moyen est de 8 minutes dans le centre-ville des Sables-d'Olonne. Selon l'étude FNTR 2023, 85% des taxis en zone littorale arrivent en moins de 10 minutes lors de réservations.",
        },
      },
      {
        '@type': 'Question',
        name: "Les taxis acceptent-ils la carte bancaire aux Sables-d'Olonne ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, notre taxi accepte les paiements par carte bancaire sans contact et espèces. Depuis 2022, 94% des taxis français sont équipés de terminaux de paiement électronique selon la DGCCRF.',
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on réserver un taxi pour l'aéroport de Nantes depuis les Sables-d'Olonne ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Absolument. Le trajet Sables-d'Olonne → Aéroport Nantes dure environ 1h30 (106 km). Tarif fixe : 230€. Nous assurons le suivi de votre vol pour les arrivées. 73% de nos clients choisissent la réservation à l'avance pour ce trajet.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le transport médical est-il remboursé par la Sécurité Sociale ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, en tant que VSL conventionné, nos transports médicaux sont remboursés à 65% par l'Assurance Maladie (100% en ALD). Prescription médicale obligatoire. Selon l'AMELI, plus de 2,5 millions de transports VSL sont remboursés annuellement.",
        },
      },
      {
        '@type': 'Question',
        name: "Quels sont les horaires du service taxi aux Sables-d'Olonne ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Notre service fonctionne 24h/24 et 7j/7 toute l'année. En haute saison (juin-septembre), la demande augmente de 340% selon l'Office de Tourisme des Sables-d'Olonne, d'où l'importance de réserver à l'avance.",
        },
      },
    ],
  })

  const getSchema = () => {
    if (data) return data

    switch (type) {
      case 'LocalBusiness':
        return getLocalBusinessSchema()
      case 'FAQ':
        return getFAQSchema()
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
