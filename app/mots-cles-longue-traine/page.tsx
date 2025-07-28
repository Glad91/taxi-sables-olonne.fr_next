import { Metadata } from 'next'
import { Search, TrendingUp, Target } from 'lucide-react'
import CallToAction from '../components/CallToAction'
import JsonLD, { serviceSchema } from '../components/JsonLD'

export const metadata: Metadata = {
  title:
    "Taxi pas cher Sables d'Olonne | Transport économique Vendée | Réservation immédiate",
  description:
    "Trouvez un taxi pas cher aux Sables d'Olonne. Transport économique, réservation taxi immédiate, chauffeur professionnel Vendée. Tarifs transparents dès 2,90€.",
  keywords: [
    "taxi pas cher sables d'olonne",
    'transport économique vendée',
    'réservation taxi immédiate',
    'chauffeur professionnel sables olonne',
    "taxi nuit sables d'olonne",
    'transport urgence vendée',
    "taxi dimanche sables d'olonne",
    'véhicule avec chauffeur pas cher',
    'service taxi économique vendée',
    'réserver taxi rapidement sables olonne',
  ],
  alternates: {
    canonical: 'https://taxi-sables-olonne.fr/mots-cles-longue-traine',
  },
}

export default function MotsClesLongueTrainePage() {
  const longTailKeywords = [
    {
      category: 'Prix et économie',
      keywords: [
        "taxi pas cher sables d'olonne",
        'transport économique vendée',
        'prix taxi abordable sables olonne',
        'tarif taxi transparent vendée',
        'véhicule avec chauffeur pas cher',
      ],
    },
    {
      category: 'Urgence et disponibilité',
      keywords: [
        "taxi urgent sables d'olonne",
        'réservation taxi immédiate',
        "taxi nuit sables d'olonne",
        "transport d'urgence vendée",
        "taxi dimanche sables d'olonne",
      ],
    },
    {
      category: 'Services spécialisés',
      keywords: [
        'chauffeur professionnel sables olonne',
        'transport médical vendée',
        'taxi aéroport nantes pas cher',
        'véhicule sanitaire léger sables olonne',
        'transport gare sncf économique',
      ],
    },
    {
      category: 'Géolocalisation précise',
      keywords: [
        'taxi place napoléon III',
        "transport château d'olonne",
        "taxi la chaume sables d'olonne",
        'chauffeur olonne sur mer',
        'véhicule avec chauffeur talmont',
      ],
    },
  ]

  return (
    <>
      <JsonLD
        data={serviceSchema(
          "Service taxi longue traîne Sables-d'Olonne",
          "Service de taxi spécialisé pour tous vos besoins spécifiques aux Sables-d'Olonne et en Vendée",
          '2.90'
        )}
      />

      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Taxi spécialisé Sables-d'Olonne
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Service de taxi professionnel pour tous vos besoins spécifiques :
              transport économique, réservation immédiate, chauffeur
              expérimenté. Disponible 24h/24 en Vendée.
            </p>
            <CallToAction className="justify-center" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services taxi spécialisés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Que vous cherchiez un taxi pas cher, un transport d'urgence, ou un
              chauffeur professionnel, nous répondons à tous vos besoins
              spécifiques aux Sables-d'Olonne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {longTailKeywords.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && (
                      <Target className="h-8 w-8 text-purple-600" />
                    )}
                    {index === 1 && (
                      <TrendingUp className="h-8 w-8 text-purple-600" />
                    )}
                    {index === 2 && (
                      <Search className="h-8 w-8 text-purple-600" />
                    )}
                    {index === 3 && <span className="text-2xl">📍</span>}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.keywords.map((keyword, keyIndex) => (
                    <li
                      key={keyIndex}
                      className="text-sm text-gray-600 bg-gray-50 p-2 rounded"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi choisir notre taxi spécialisé ?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    🚀 Réservation immédiate
                  </h3>
                  <p className="text-gray-600">
                    Besoin d'un taxi urgent aux Sables-d'Olonne ? Notre service
                    de réservation immédiate vous garantit un véhicule en moins
                    de 8 minutes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    💰 Transport économique
                  </h3>
                  <p className="text-gray-600">
                    Taxi pas cher ne signifie pas service de moindre qualité.
                    Nos tarifs transparents dès 2,90€ vous garantissent le
                    meilleur rapport qualité-prix en Vendée.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    👨‍💼 Chauffeur professionnel
                  </h3>
                  <p className="text-gray-600">
                    Nos chauffeurs professionnels aux Sables-d'Olonne
                    connaissent parfaitement la région et vous offrent un
                    service de qualité 24h/24.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Zones de service spécialisées
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Place Napoléon III → Destination</span>
                  <span className="font-semibold text-purple-600">
                    Service immédiat
                  </span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Château d'Olonne transport</span>
                  <span className="font-semibold text-purple-600">
                    Tarif préférentiel
                  </span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>La Chaume taxi nuit</span>
                  <span className="font-semibold text-purple-600">24h/24</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Olonne-sur-Mer économique</span>
                  <span className="font-semibold text-purple-600">
                    Prix transparent
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Talmont véhicule avec chauffeur</span>
                  <span className="font-semibold text-purple-600">
                    Service premium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre taxi spécialisé aux Sables-d'Olonne
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Que vous cherchiez un transport économique, un taxi d'urgence, ou un
            chauffeur professionnel, notre service s'adapte à tous vos besoins
            spécifiques. Réservation immédiate garantie.
          </p>
          <div className="bg-white text-purple-600 p-6 rounded-lg inline-block">
            <p className="text-lg font-semibold mb-2">
              Transport économique • Réservation immédiate • Chauffeur
              professionnel
            </p>
            <p className="text-sm text-purple-500">
              Service 24h/24 - Tarifs transparents - Vendée et région
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
