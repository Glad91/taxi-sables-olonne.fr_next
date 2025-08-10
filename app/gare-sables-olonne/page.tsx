import { Metadata } from 'next'
import { Train, Clock, MapPin, Phone } from 'lucide-react'
import CallToAction from '../components/CallToAction'
import StructuredData from '../components/StructuredData'
import Breadcrumb, { breadcrumbConfigs } from '../components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Gare SNCF | Transfert 8€',
  description:
    "Transfert taxi depuis/vers la gare SNCF des Sables-d'Olonne. Service rapide et ponctuel, disponible 24h/24. Tarif préférentiel à partir de 8€. ☎️ 06 25 19 31 43",
  keywords: [
    "taxi gare sables d'olonne",
    'transfert gare SNCF',
    'taxi gare des sables',
    'transport gare',
  ],
  alternates: {
    canonical: 'https://taxi-sables-olonne.fr/gare-sables-olonne',
  },
}

export default function GarePage() {
  return (
    <>
      <StructuredData type="TaxiService" />
      <Breadcrumb items={breadcrumbConfigs['/gare-sables-olonne']} />

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Taxi Gare SNCF Sables-d'Olonne
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transfert rapide et ponctuel depuis et vers la gare SNCF des
              Sables-d'Olonne. Service disponible pour tous vos trains, y
              compris les premiers et derniers départs.
            </p>
            <CallToAction className="justify-center" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Service taxi gare SNCF des Sables-d'Olonne
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre service de taxi vous assure un transport fiable et
                ponctuel depuis et vers la gare SNCF des Sables-d'Olonne. Que
                vous arriviez en train ou que vous ayez un train à prendre, nous
                nous adaptons à vos horaires.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Train className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">
                    Prise en charge devant la gare
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">
                    Disponible pour tous les horaires de train
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">
                    Desserte de toute la région sablaise
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Tarifs gare SNCF</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Gare → Centre-ville</span>
                  <span className="font-semibold text-blue-600">8€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gare → Olonne-sur-Mer</span>
                  <span className="font-semibold text-blue-600">12€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gare → La Chaume</span>
                  <span className="font-semibold text-blue-600">10€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gare → Château-d'Olonne</span>
                  <span className="font-semibold text-blue-600">15€</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Tarifs indicatifs TTC. Supplément possible pour bagages
                volumineux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir notre taxi pour vos transferts gare ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Ponctualité garantie
              </h3>
              <p className="text-gray-600">
                Nous connaissons les horaires de train et nous assurons d'être
                présents à temps pour votre arrivée ou votre départ.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Connaissance des horaires
              </h3>
              <p className="text-gray-600">
                Service adapté aux horaires SNCF, y compris les premiers trains
                (dès 5h30) et les derniers trains (jusqu'à 23h).
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Localisation optimale
              </h3>
              <p className="text-gray-600">
                Basé Place Napoléon III, à proximité immédiate de la gare SNCF
                pour un service rapide et efficace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Réservez votre transfert gare SNCF
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Appelez-nous pour réserver votre taxi ou pour un départ immédiat
            depuis la gare des Sables-d'Olonne.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="tel:0625193143"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>06 25 19 31 43</span>
            </a>
            <p className="text-blue-100">
              Disponible 24h/24 pour tous vos trains
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
