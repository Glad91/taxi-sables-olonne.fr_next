interface OpenGraphProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'business.business'
}

export default function OpenGraph({
  title = "Taxi Sables-d'Olonne | Service 24h/24 - 7j/7",
  description = "Service de taxi professionnel aux Sables-d'Olonne. Réservation 24h/24, transferts gare SNCF, aéroport Nantes, transport médical VSL. ☎️ 06 25 19 31 43",
  image = 'https://taxi-sables-olonne.fr/og-image.png',
  url = 'https://taxi-sables-olonne.fr',
  type = 'business.business',
}: OpenGraphProps) {
  return (
    <>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Taxi Sables-d'Olonne" />
      <meta property="og:locale" content="fr_FR" />

      {/* Open Graph Business */}
      {type === 'business.business' && (
        <>
          <meta
            property="business:contact_data:street_address"
            content="Place Napoléon III"
          />
          <meta
            property="business:contact_data:locality"
            content="Les Sables-d'Olonne"
          />
          <meta property="business:contact_data:postal_code" content="85100" />
          <meta
            property="business:contact_data:country_name"
            content="France"
          />
          <meta
            property="business:contact_data:phone_number"
            content="+33625193143"
          />
          <meta
            property="business:contact_data:website"
            content="https://taxi-sables-olonne.fr"
          />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* WhatsApp / Telegram */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Article specific (for blog posts) */}
      {type === 'article' && (
        <>
          <meta property="article:author" content="Taxi Sables-d'Olonne" />
          <meta property="article:section" content="Transport" />
          <meta property="article:tag" content="taxi" />
          <meta property="article:tag" content="sables d'olonne" />
          <meta property="article:tag" content="transport" />
        </>
      )}

      {/* Additional SEO meta */}
      <meta name="author" content="Taxi Sables-d'Olonne" />
      <meta name="publisher" content="Taxi Sables-d'Olonne" />
      <meta name="copyright" content="Taxi Sables-d'Olonne" />

      {/* Geo meta tags */}
      <meta name="geo.region" content="FR-85" />
      <meta name="geo.placename" content="Les Sables-d'Olonne" />
      <meta name="geo.position" content="46.496002;-1.783313" />
      <meta name="ICBM" content="46.496002, -1.783313" />

      {/* Business meta */}
      <meta name="contact" content="contact@taxi-sables-olonne.fr" />
      <meta name="phone" content="+33625193143" />
      <meta
        name="address"
        content="Place Napoléon III, 85100 Les Sables-d'Olonne"
      />
    </>
  )
}
