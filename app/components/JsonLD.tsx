interface JsonLDProps {
  data: Record<string, unknown>
}

export default function JsonLD({ data }: JsonLDProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  )
}

// Schémas prédéfinis pour le site taxi
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  '@id': 'https://taxi-sables-olonne.fr/#organization',
  name: "Taxi Sables-d'Olonne",
  legalName: "Taxi Sables-d'Olonne",
  url: 'https://taxi-sables-olonne.fr',
  logo: 'https://taxi-sables-olonne.fr/logo.png',
  description:
    "Service de taxi professionnel aux Sables-d'Olonne disponible 24h/24 et 7j/7. Transferts aéroport, gare SNCF, transport médical VSL.",
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
    latitude: 46.496002,
    longitude: -1.783313,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 46.496002,
      longitude: -1.783313,
    },
    geoRadius: '50000', // 50km radius
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de taxi',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Taxi urbain',
          description: "Service de taxi dans Les Sables-d'Olonne",
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Transfert aéroport',
          description: "Transfert vers l'aéroport de Nantes Atlantique",
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Transport médical VSL',
          description: 'Véhicule Sanitaire Léger conventionné',
        },
      },
    ],
  },
  // aggregateRating supprimé - données fictives risquent pénalité Google
  // À réactiver uniquement avec de vrais avis clients vérifiables
  sameAs: [
    // URLs à remplacer par de vrais profils sociaux
    // 'https://www.facebook.com/taxisablesolonne', // À vérifier
    // 'https://maps.google.com/maps?cid=REAL_ID',  // ID Google Maps réel
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://taxi-sables-olonne.fr/#website',
  url: 'https://taxi-sables-olonne.fr',
  name: "Taxi Sables-d'Olonne",
  description: "Site officiel du service de taxi aux Sables-d'Olonne",
  publisher: {
    '@id': 'https://taxi-sables-olonne.fr/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://taxi-sables-olonne.fr/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'fr-FR',
}

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const serviceSchema = (
  serviceName: string,
  description: string,
  price?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@id': 'https://taxi-sables-olonne.fr/#organization',
  },
  areaServed: {
    '@type': 'City',
    name: "Les Sables-d'Olonne",
    addressCountry: 'FR',
  },
  ...(price && {
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  }),
})
