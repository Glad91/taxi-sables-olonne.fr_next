import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleTag from './components/GoogleTag'
import WebVitals from './components/WebVitals'
import JsonLD, { organizationSchema, websiteSchema } from './components/JsonLD'
import CriticalCSS from './components/CriticalCSS'

export const metadata: Metadata = {
  title: {
    default: "Taxi Sables-d'Olonne | Chauffeur privé 24h/24",
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
        url: 'https://taxi-sables-olonne.fr/og-image.png',
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
    images: ['https://taxi-sables-olonne.fr/og-image.png'],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const link = document.querySelector('link[href*="fonts.googleapis.com"]');
              if (link) link.media = 'all';
            });
          `,
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          />
        </noscript>
        <meta name="geo.region" content="FR-85" />
        <meta name="geo.placename" content="Les Sables-d'Olonne" />
        <meta name="geo.position" content="46.496002;-1.783313" />
        <meta name="ICBM" content="46.496002, -1.783313" />
        <JsonLD data={organizationSchema} />
        <JsonLD data={websiteSchema} />
        <CriticalCSS />
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
