import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import JsonLD, { breadcrumbSchema } from './JsonLD'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Toujours inclure l'accueil en premier
  const allItems = [
    { name: 'Accueil', url: 'https://taxi-sables-olonne.fr' },
    ...items,
  ]

  return (
    <>
      {/* Schema.org Structured Data */}
      <JsonLD data={breadcrumbSchema(allItems)} />

      {/* Navigation Breadcrumb Visible - Design Pro */}
      <nav
        className={`bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 shadow-sm ${className}`}
        aria-label="Fil d'Ariane"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            {/* Breadcrumb Navigation */}
            <ol className="flex items-center space-x-1 flex-1 min-w-0">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-taxi-orange hover:bg-taxi-yellow/5 rounded-lg transition-all duration-200"
                  title="Retour à l'accueil"
                >
                  <Home
                    className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200"
                    aria-hidden="true"
                  />
                  <span>Accueil</span>
                </Link>
              </li>

              {items.map((item, index) => (
                <li key={index} className="flex items-center min-w-0">
                  {/* Séparateur moderne */}
                  <div className="flex items-center px-1">
                    <ChevronRight
                      className="h-4 w-4 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>

                  {index === items.length - 1 ? (
                    // Page actuelle - Design distinctif
                    <div className="flex items-center bg-taxi-yellow/20 px-3 py-2 rounded-lg border-l-4 border-taxi-orange">
                      <span
                        className="text-sm font-semibold text-gray-800 truncate"
                        title={item.name}
                      >
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    // Pages intermédiaires - Liens stylisés
                    <Link
                      href={item.url.replace(
                        'https://taxi-sables-olonne.fr',
                        ''
                      )}
                      className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-taxi-orange hover:bg-taxi-yellow/5 rounded-lg transition-all duration-200 truncate"
                      title={`Aller à ${item.name}`}
                    >
                      <span className="group-hover:underline decoration-taxi-orange decoration-2 underline-offset-4 truncate">
                        {item.name}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </nav>
    </>
  )
}

// Configuration des breadcrumbs par page
export const breadcrumbConfigs = {
  '/gare-sables-olonne': [
    {
      name: "Taxi Gare SNCF Sables-d'Olonne",
      url: 'https://taxi-sables-olonne.fr/gare-sables-olonne',
    },
  ],
  '/aeroport-nantes': [
    {
      name: 'Taxi Aéroport Nantes',
      url: 'https://taxi-sables-olonne.fr/aeroport-nantes',
    },
  ],
  '/transport-medical': [
    {
      name: 'Transport Médical VSL',
      url: 'https://taxi-sables-olonne.fr/transport-medical',
    },
  ],
  '/longue-distance': [
    {
      name: 'Taxi Longue Distance',
      url: 'https://taxi-sables-olonne.fr/longue-distance',
    },
  ],
  '/tarifs': [
    {
      name: 'Tarifs Taxi 2024',
      url: 'https://taxi-sables-olonne.fr/tarifs',
    },
  ],
  '/reservation': [
    {
      name: 'Réservation Taxi en Ligne',
      url: 'https://taxi-sables-olonne.fr/reservation',
    },
  ],
  '/contact': [
    {
      name: 'Contact Taxi',
      url: 'https://taxi-sables-olonne.fr/contact',
    },
  ],
  '/avis-clients': [
    {
      name: 'Avis Clients',
      url: 'https://taxi-sables-olonne.fr/avis-clients',
    },
  ],
  '/guide-taxi-sables-olonne': [
    {
      name: 'Guide Taxi Complet',
      url: 'https://taxi-sables-olonne.fr/guide-taxi-sables-olonne',
    },
  ],
}
