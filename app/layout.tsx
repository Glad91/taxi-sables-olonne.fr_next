import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleTag from './components/GoogleTag'
import WebVitals from './components/WebVitals'
import JsonLD, { organizationSchema, websiteSchema } from './components/JsonLD'

export const metadata: Metadata = {
  title: {
    default: "Taxi Sables-d'Olonne | Chauffeur privé 24h/24 Place Napoléon III",
    template: "%s | Taxi Sables-d'Olonne",
  },
  description:
    "Service de taxi professionnel aux Sables-d'Olonne. Réservation 24h/24, transferts gare SNCF, aéroport Nantes, transport médical. ☎️ 06 25 19 31 43",
  keywords: [
    "taxi sables d'olonne",
    "chauffeur privé sables d'olonne",
    "transport sables d'olonne",
    'taxi place napoléon III',
    'VSL conventionné',
    'transfert aéroport nantes',
  ],
  authors: [{ name: "Taxi Sables-d'Olonne" }],
  creator: "Taxi Sables-d'Olonne",
  publisher: "Taxi Sables-d'Olonne",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://taxi-sables-olonne.fr',
    siteName: "Taxi Sables-d'Olonne",
    title: "Taxi Sables-d'Olonne | Chauffeur privé 24h/24",
    description:
      "Service de taxi professionnel aux Sables-d'Olonne. Réservation 24h/24, transferts gare SNCF, aéroport Nantes, transport médical.",
    images: [
      {
        url: 'https://taxi-sables-olonne.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Taxi Sables-d'Olonne - Service de taxi professionnel",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Taxi Sables-d'Olonne | Chauffeur privé 24h/24",
    description:
      "Service de taxi professionnel aux Sables-d'Olonne. Réservation 24h/24, transferts gare SNCF, aéroport Nantes.",
    images: ['https://taxi-sables-olonne.fr/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://taxi-sables-olonne.fr',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://taxi-sables-olonne.fr" />
        <meta name="geo.region" content="FR-85" />
        <meta name="geo.placename" content="Les Sables-d'Olonne" />
        <meta name="geo.position" content="46.496002;-1.783313" />
        <meta name="ICBM" content="46.496002, -1.783313" />
        <JsonLD data={organizationSchema} />
        <JsonLD data={websiteSchema} />
      </head>
      <body className="antialiased">
        <GoogleTag />
        <WebVitals />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
