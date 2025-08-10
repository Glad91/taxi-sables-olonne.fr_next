import { Metadata } from 'next'
import { Euro, MapPin, Phone } from 'lucide-react'
import CallToAction from '../components/CallToAction'
import StructuredData from '../components/StructuredData'
import Breadcrumb, { breadcrumbConfigs } from '../components/Breadcrumb'

export const metadata: Metadata = {
  title: "Tarifs 2024 | Prix gare, aéroport, VSL",
  description:
    "Tarifs taxi Sables-d'Olonne 2024 : gare SNCF 8€, aéroport Nantes 230€, transport médical VSL remboursé. Devis gratuit pour longue distance. ☎️ 06 25 19 31 43",
  keywords: [
    "tarifs taxi sables d'olonne 2024",
    'prix taxi gare SNCF',
    'tarif aéroport nantes',
    'transport médical VSL',
    'devis taxi gratuit',
    'prix transparent taxi',
  ],
  alternates: {
    canonical: 'https://taxi-sables-olonne.fr/tarifs',
  },
}

export default function TarifsPage() {
  return (
    <>
      <StructuredData type="TaxiService" />
      <Breadcrumb items={breadcrumbConfigs['/tarifs']} />

      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tarifs taxi Sables-d&apos;Olonne
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez nos tarifs transparents et compétitifs pour tous vos
              déplacements aux Sables-d&apos;Olonne et alentours. Prix fixes
              garantis !
            </p>
            <CallToAction className="justify-center" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Euro className="h-6 w-6 text-green-600 mr-2" />
                Tarifs locaux
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Gare SNCF → Centre-ville</span>
                  <span className="font-bold text-green-600">8€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Centre-ville (course minimum)</span>
                  <span className="font-bold text-green-600">6€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Olonne-sur-Mer</span>
                  <span className="font-bold text-green-600">12€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Château-d&apos;Olonne</span>
                  <span className="font-bold text-green-600">15€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>La Chaume</span>
                  <span className="font-bold text-green-600">10€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Talmont-Saint-Hilaire</span>
                  <span className="font-bold text-green-600">18€</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                Longue distance
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Gare de Nantes (jour) - 100km</span>
                  <span className="font-bold text-blue-600">220€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Gare de Nantes (nuit/dimanche)</span>
                  <span className="font-bold text-blue-600">330€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Aéroport Nantes Atlantique - 106km</span>
                  <span className="font-bold text-blue-600">230€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Nantes centre - 105km</span>
                  <span className="font-bold text-blue-600">230€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>La Roche-sur-Yon - 35km</span>
                  <span className="font-bold text-blue-600">79€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>La Rochelle - 110km</span>
                  <span className="font-bold text-blue-600">240€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Bordeaux - 300km</span>
                  <span className="font-bold text-blue-600">650€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Autres destinations</span>
                  <span className="font-bold text-blue-600">Sur devis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transport médical VSL
            </h2>
            <p className="text-lg text-gray-600">
              Service conventionné avec prise en charge Sécurité Sociale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">
                100% pris en charge
              </h3>
              <p className="text-green-700">
                Transport médical sur prescription avec ALD (Affection Longue
                Durée)
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                65% remboursé
              </h3>
              <p className="text-blue-700">
                Prise en charge partielle par la Sécurité Sociale sur
                prescription
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-800">
                Mutuelle
              </h3>
              <p className="text-yellow-700">
                Complément pris en charge selon votre contrat mutuelle
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Informations tarifaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Tarifs et suppléments
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Prise en charge : 2,90€</li>
                  <li>• Tarif jour (6h-22h) : 2,16€/km</li>
                  <li>• Tarif nuit (22h-6h) : 3,24€/km</li>
                  <li>• Dimanche et jours fériés : 3,24€/km</li>
                  <li>• Bagages volumineux : 2€ par bagage</li>
                  <li>• Attente : 25€/heure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Modes de paiement
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Espèces</li>
                  <li>• Carte bancaire (sans frais)</li>
                  <li>• Chèques (sur accord préalable)</li>
                  <li>• Tiers payant pour VSL</li>
                  <li>• Paiement à la commande possible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Devis gratuit personnalisé
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis gratuit adapté à votre trajet.
            Tarifs transparents et sans surprise !
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="tel:0625193143"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>06 25 19 31 43</span>
            </a>
            <p className="text-green-100">Devis sous 2h maximum</p>
          </div>
        </div>
      </section>
    </>
  )
}
