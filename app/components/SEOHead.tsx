import Head from 'next/head'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  structuredData?: object
}

export default function SEOHead({
  title,
  description,
  keywords = "taxi sables d'olonne, chauffeur privé, transport",
  canonical,
  ogImage = "https://taxi-sables-olonne.fr/og-image.jpg",
  structuredData
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || "https://taxi-sables-olonne.fr"} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Taxi Sables-d'Olonne" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <meta name="geo.region" content="FR-85" />
      <meta name="geo.placename" content="Les Sables-d'Olonne" />
      <meta name="geo.position" content="46.496002;-1.783313" />
      <meta name="ICBM" content="46.496002, -1.783313" />
      
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}