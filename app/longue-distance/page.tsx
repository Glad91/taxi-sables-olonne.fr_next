import { Metadata } from 'next'
import { MapPin, Clock, Phone, Calculator } from 'lucide-react'
import CallToAction from '../components/CallToAction'
import StructuredData from '../components/StructuredData'

export const metadata: Metadata = {
  title: "Taxi longue distance | Sables-d'Olonne vers Nantes, La Roche, Bordeaux",
  description: "Service taxi longue distance depuis Les Sables-d'Olonne vers Nantes, La Roche-sur-Yon, Bordeaux et toute la France. Devis gratuit. ☎️ 06 25 19 31 43",
  keywords: ["taxi longue distance", "taxi sables d'olonne nantes", "transport longue distance", "taxi bordeaux"],
  alternates: {
    canonical: "https://taxi-sables-olonne.fr/longue-distance",
  },
}

export default function LongueDistancePage() {
  return (
    <>
      <StructuredData type="TaxiService" />
      
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Taxi longue distance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Service de taxi longue distance depuis Les Sables-d'Olonne vers Nantes, 
              La Roche-sur-Yon, Bordeaux et toute la France. Devis gratuit sur demande.
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
                Destinations longue distance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre service de taxi vous emmène dans toute la France pour vos déplacements 
                professionnels ou personnels. Confort, ponctualité et tarifs compétitifs garantis 
                pour tous vos trajets longue distance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700">Couverture nationale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700">Service 24h/24</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calculator className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700">Devis gratuit et personnalisé</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Destinations populaires</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Nantes</span>
                  <span className="font-semibold text-purple-600">À partir de 85€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>La Roche-sur-Yon</span>
                  <span className="font-semibold text-purple-600">À partir de 45€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Bordeaux</span>
                  <span className="font-semibold text-purple-600">À partir de 280€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Paris</span>
                  <span className="font-semibold text-purple-600">Sur devis</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lyon</span>
                  <span className="font-semibold text-purple-600">Sur devis</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Tarifs indicatifs TTC. Devis personnalisé selon votre destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vos trajets longue distance en détail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Région Pays de la Loire</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Nantes (85 km - 1h)</li>
                <li>• La Roche-sur-Yon (35 km - 40min)</li>
                <li>• Cholet (90 km - 1h15)</li>
                <li>• Angers (120 km - 1h30)</li>
                <li>• Le Mans (180 km - 2h)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Nouvelle-Aquitaine</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• La Rochelle (120 km - 1h30)</li>
                <li>• Poitiers (150 km - 1h45)</li>
                <li>• Bordeaux (280 km - 3h)</li>
                <li>• Cognac (200 km - 2h15)</li>
                <li>• Limoges (250 km - 2h45)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Autres régions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Paris (450 km - 4h30)</li>
                <li>• Lyon (550 km - 5h30)</li>
                <li>• Tours (200 km - 2h15)</li>
                <li>• Rennes (180 km - 2h)</li>
                <li>• Toulouse (450 km - 4h30)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Avantages de notre service longue distance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Confort et sécurité</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Véhicule récent et spacieux</li>
                  <li>• Climatisation et confort optimal</li>
                  <li>• Chauffeur expérimenté</li>
                  <li>• Pause sur demande pour longs trajets</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Service personnalisé</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Devis gratuit sous 2h</li>
                  <li>• Tarif fixe négocié à l'avance</li>
                  <li>• Prise en charge à domicile</li>
                  <li>• Possibilité d'aller-retour le même jour</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Demandez votre devis longue distance
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis gratuit et personnalisé pour votre trajet longue distance.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="tel:0625193143"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>06 25 19 31 43</span>
            </a>
            <p className="text-purple-100">
              Devis gratuit sous 2h maximum
            </p>
          </div>
        </div>
      </section>
    </>
  )
}