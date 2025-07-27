export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://taxi-sables-olonne.fr/sitemap.xml

# Pages importantes
Allow: /
Allow: /reservation
Allow: /gare-sables-olonne
Allow: /aeroport-nantes
Allow: /transport-medical
Allow: /longue-distance
Allow: /tarifs
Allow: /avis-clients
Allow: /contact

# Optimisation pour les moteurs de recherche
Crawl-delay: 1
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
