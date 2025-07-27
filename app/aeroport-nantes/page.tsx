import { Metadata } from 'next'
import { Plane, Clock, MapPin, Phone, Car } from 'lucide-react'
import CallToAction from '../components/CallToAction'
import StructuredData from '../components/StructuredData'

export const metadata: Metadata = {
  title: "Taxi Aéroport Nantes Atlantique | Transfert Sables-d'Olonne",
  description: "Transfert taxi vers l'aéroport Nantes Atlantique depuis Les Sables-d'Olonne. Service avec suivi de vol, ponctuel et confortable. Tarif fixe 120€. ☎️ 06 25 19 31 43",
  keywords: ["taxi aéroport nantes", "transfert aéroport nantes atlantique", "taxi sables d'olonne nantes", "navette aéroport"],
  alternates: {
    canonical: "https://taxi-sables-olonne.fr/aeroport-nantes",
  },
}

export default function AeroportPage() {
  return (
    <>
      <StructuredData type="TaxiService" />
      
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Taxi Aéroport Nantes Atlantique
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transfert confortable et ponctuel entre Les Sables-d'Olonne et l'aéroport Nantes Atlantique. 
              Service avec suivi de vol pour vos arrivées et départs.
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
                Transfert Sables-d'Olonne ↔ Aéroport Nantes
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre service de taxi vous propose un transfert direct et confortable entre 
                Les Sables-d'Olonne et l'aéroport Nantes Atlantique. Nous surveillons vos vols 
                pour nous adapter aux éventuels retards ou avances.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Plane className="h-6 w-6 text-sky-600" />
                  <span className="text-gray-700">Suivi de vol en temps réel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-sky-600" />
                  <span className="text-gray-700">Ponctualité garantie pour vos vols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="h-6 w-6 text-sky-600" />
                  <span className="text-gray-700">Véhicule confortable avec climatisation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-sky-600" />
                  <span className="text-gray-700">Prise en charge à domicile ou hôtel</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Tarifs aéroport Nantes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <div className="font-semibold">Trajet simple</div>
                    <div className="text-sm text-gray-600">Sables-d'Olonne ↔ Aéroport</div>
                  </div>
                  <span className="font-bold text-sky-600 text-xl">120€</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <div className="font-semibold">Aller-retour</div>
                    <div className="text-sm text-gray-600">Réservé le même jour</div>
                  </div>
                  <span className="font-bold text-sky-600 text-xl">220€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Attente aéroport</div>
                    <div className="text-sm text-gray-600">Supplément par heure</div>
                  </div>
                  <span className="font-bold text-sky-600 text-xl">25€</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Tarifs fixes TTC. Pas de supplément pour les bagages standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Avantages de notre service aéroport
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Suivi de vol</h3>
              <p className="text-gray-600">
                Nous surveillons votre vol en temps réel pour nous adapter aux retards 
                ou avances et être présents au bon moment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ponctualité</h3>
              <p className="text-gray-600">
                Départ anticipé pour tenir compte du trafic et vous assurer d'arriver 
                à l'heure pour l'enregistrement de votre vol.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Confort</h3>
              <p className="text-gray-600">
                Véhicule spacieux et confortable pour vos bagages et votre trajet 
                de 1h15 environ vers l'aéroport Nantes Atlantique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Informations pratiques aéroport Nantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Durée et distance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Distance :</strong> 95 km environ</li>
                  <li>• <strong>Durée :</strong> 1h15 en moyenne</li>
                  <li>• <strong>Autoroute :</strong> A87 puis rocade nantaise</li>
                  <li>• <strong>Stationnement :</strong> Dépose directe aux terminaux</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Recommandations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Réservation 24h à l'avance conseillée</li>
                  <li>• Départ 2h avant vol domestique</li>
                  <li>• Départ 3h avant vol international</li>
                  <li>• Numéro de vol requis pour le suivi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Réservez votre transfert aéroport
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour réserver votre transfert vers l'aéroport Nantes Atlantique. 
            Tarif fixe et service garanti !
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="tel:0625193143"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>06 25 19 31 43</span>
            </a>
            <p className="text-sky-100">
              Réservation conseillée 24h à l'avance
            </p>
          </div>
        </div>
      </section>
    </>
  )
}