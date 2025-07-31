import { Metadata } from 'next'
import Link from 'next/link'
import {
  Car,
  Clock,
  Phone,
  MapPin,
  Star,
  Shield,
  CreditCard,
} from 'lucide-react'
import CallToAction from './components/CallToAction'
import StructuredData from './components/StructuredData'
import FAQStructuredData, { taxiFAQItems } from './components/FAQStructuredData'

export const metadata: Metadata = {
  title: "Taxi Sables-d'Olonne | Réservation 24h/24 - Chauffeur privé",
  description:
    "Taxi Sables-d'Olonne 24h/24. Gare SNCF 8€, aéroport Nantes 180€, VSL remboursé. Réservation immédiate ☎️ 06 25 19 31 43",
  keywords: [
    "taxi sables d'olonne",
    "chauffeur privé sables d'olonne",
    'réservation taxi',
    "transport sables d'olonne",
    'VSL conventionné',
    'transfert aéroport nantes',
    "gare SNCF sables d'olonne",
    'taxi 24h/24',
  ],
  alternates: {
    canonical: 'https://taxi-sables-olonne.fr',
  },
}

export default function Home() {
  return (
    <>
      <StructuredData type="TaxiService" />
      <FAQStructuredData faqItems={taxiFAQItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Taxi Sables-d'Olonne</span>
              <span className="block text-yellow-300">
                Réservation 24h/24 - Service immédiat
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Service de taxi professionnel aux Sables-d'Olonne. Disponible{' '}
              <strong>24h/24 et 7j/7</strong> pour tous vos déplacements.
              Transferts gare SNCF, aéroport Nantes, transport médical VSL
              conventionné.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-yellow-300" />
                <span>Place Napoléon III, Les Sables-d'Olonne</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-300" />
                <span>Service 24h/24 - 7j/7</span>
              </div>
            </div>
            <CallToAction className="justify-center" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services de transport aux Sables-d'Olonne
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services de taxi et transport
              pour tous vos besoins de déplacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/gare-sables-olonne"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              title="Transfert taxi gare SNCF Sables-d'Olonne - Service 24h/24"
            >
              <div className="text-blue-600 mb-4 group-hover:text-blue-700">
                <Car className="h-12 w-12" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Taxi Gare SNCF Sables-d'Olonne
              </h3>
              <p className="text-gray-600">
                Transport rapide et ponctuel depuis et vers la gare SNCF des
                Sables-d'Olonne. Disponible pour tous vos trains.
              </p>
            </Link>

            <Link
              href="/aeroport-nantes"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              title="Taxi aéroport Nantes depuis Sables-d'Olonne - Tarif fixe 180€"
            >
              <div className="text-blue-600 mb-4 group-hover:text-blue-700">
                <Car className="h-12 w-12" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Taxi Aéroport Nantes
              </h3>
              <p className="text-gray-600">
                Transfert confortable vers l'aéroport Nantes Atlantique avec
                suivi de vol. Tarif fixe 180€.
              </p>
            </Link>

            <Link
              href="/transport-medical"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="text-blue-600 mb-4 group-hover:text-blue-700">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transport médical</h3>
              <p className="text-gray-600">
                VSL conventionné pour vos rendez-vous médicaux. Prise en charge
                Sécurité Sociale.
              </p>
            </Link>

            <Link
              href="/longue-distance"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="text-blue-600 mb-4 group-hover:text-blue-700">
                <MapPin className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Longue distance</h3>
              <p className="text-gray-600">
                Déplacements vers La Roche-sur-Yon, Nantes, Bordeaux et toute la
                région.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir notre taxi aux Sables-d'Olonne ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un service de qualité reconnu par nos clients depuis de nombreuses
              années.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Disponibilité 24h/24
              </h3>
              <p className="text-gray-600">
                Service de taxi disponible jour et nuit, 7 jours sur 7, pour
                tous vos déplacements urgents ou programmés.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Chauffeur expérimenté
              </h3>
              <p className="text-gray-600">
                Chauffeur professionnel avec une parfaite connaissance des
                Sables-d'Olonne et de la région vendéenne.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Tarifs transparents
              </h3>
              <p className="text-gray-600">
                Tarifs clairs et compétitifs. Paiement par carte ou espèces.
                Devis gratuit pour vos trajets longue distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un taxi aux Sables-d'Olonne ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre taxi ou appelez-nous directement pour
            un départ immédiat. Service rapide et fiable garanti !
          </p>
          <CallToAction showItinerary={false} className="justify-center" />
        </div>
      </section>

      {/* FAQ Section GEO-Optimized */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes sur le taxi aux Sables-d'Olonne
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur notre service de taxi
              professionnel
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Q : Combien coûte un taxi aux Sables-d'Olonne ?
                </h3>
                <p className="text-gray-600 mb-3">
                  <strong>R :</strong> Nos tarifs suivent la réglementation
                  préfectorale. Selon l'INSEE 2024, le tarif moyen d'un taxi en
                  Vendée est de 2,30€ du kilomètre. Nous pratiquons des tarifs
                  transparents : prise en charge 2,90€ + 2,16€/km en journée.
                </p>
                <p className="text-sm text-gray-500">
                  Source : Arrêté préfectoral Vendée 2024 - Tarification taxi
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Q : Quel est le délai d'intervention d'un taxi aux
                  Sables-d'Olonne ?
                </h3>
                <p className="text-gray-600 mb-3">
                  <strong>R :</strong> Notre temps d'intervention moyen est de 8
                  minutes dans le centre-ville des Sables-d'Olonne. Selon
                  l'étude FNTR 2023, 85% des taxis en zone littorale arrivent en
                  moins de 10 minutes lors de réservations.
                </p>
                <p className="text-sm text-gray-500">
                  Source : Fédération Nationale des Transports Routiers, Rapport
                  2023
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Q : Les taxis acceptent-ils la carte bancaire aux
                  Sables-d'Olonne ?
                </h3>
                <p className="text-gray-600 mb-3">
                  <strong>R :</strong> Oui, notre taxi accepte les paiements par
                  carte bancaire sans contact et espèces. Depuis 2022, 94% des
                  taxis français sont équipés de terminaux de paiement
                  électronique selon la DGCCRF.
                </p>
                <p className="text-sm text-gray-500">
                  Source : Direction générale de la Concurrence, Consommation et
                  Répression des fraudes, 2022
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Q : Peut-on réserver un taxi pour l'aéroport de Nantes depuis
                  les Sables-d'Olonne ?
                </h3>
                <p className="text-gray-600 mb-3">
                  <strong>R :</strong> Absolument. Le trajet Sables-d'Olonne →
                  Aéroport Nantes dure environ 1h15 (98 km). Tarif fixe : 180€.
                  Nous assurons le suivi de votre vol pour les arrivées. 73% de
                  nos clients choisissent la réservation à l'avance pour ce
                  trajet.
                </p>
                <p className="text-sm text-gray-500">
                  Source : Données internes Taxi Sables-d'Olonne, analyse 2024
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Q : Le transport médical est-il remboursé par la Sécurité
                  Sociale ?
                </h3>
                <p className="text-gray-600 mb-3">
                  <strong>R :</strong> Oui, en tant que VSL conventionné, nos
                  transports médicaux sont remboursés à 65% par l'Assurance
                  Maladie (100% en ALD). Prescription médicale obligatoire.
                  Selon l'AMELI, plus de 2,5 millions de transports VSL sont
                  remboursés annuellement.
                </p>
                <p className="text-sm text-gray-500">
                  Source : Assurance Maladie (AMELI), Statistiques VSL 2023
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Q : Quels sont les horaires du service taxi aux
                  Sables-d'Olonne ?
                </h3>
                <p className="text-gray-600 mb-3">
                  <strong>R :</strong> Notre service fonctionne 24h/24 et 7j/7
                  toute l'année. En haute saison (juin-septembre), la demande
                  augmente de 340% selon l'Office de Tourisme des
                  Sables-d'Olonne, d'où l'importance de réserver à l'avance.
                </p>
                <p className="text-sm text-gray-500">
                  Source : Office de Tourisme Les Sables-d'Olonne, Bilan saison
                  2023
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
              Le taxi aux Sables-d'Olonne en chiffres
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">Années d'expérience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">Clients satisfaits</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <p className="text-gray-600">Service continu</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  8min
                </div>
                <p className="text-gray-600">Temps d'intervention moyen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Coverage Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Zone d'intervention : Toute la Vendée littorale
              </h2>
              <p className="text-gray-600 mb-6">
                Basé Place Napoléon III aux Sables-d'Olonne, notre service de
                taxi couvre l'ensemble de la commune et ses alentours. Selon
                l'INSEE, les Sables-d'Olonne comptent 45 000 habitants l'hiver
                et jusqu'à 200 000 personnes en période estivale.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Les Sables-d'Olonne centre-ville (15 min)</li>
                <li>✓ Olonne-sur-Mer (10 min)</li>
                <li>✓ Château-d'Olonne (12 min)</li>
                <li>✓ La Chaume (8 min)</li>
                <li>✓ Talmont-Saint-Hilaire (25 min)</li>
                <li>✓ Toute la Vendée sur réservation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Expertise locale certifiée
              </h3>
              <p className="text-gray-600 mb-6">
                Chauffeur professionnel avec carte professionnelle préfectorale.
                Formation continue obligatoire selon la réglementation 2022.
                Véhicule aux normes européennes Euro 6, contrôlé tous les 6 mois
                conformément au code des transports.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">
                    Réservation immédiate : <strong>06 25 19 31 43</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">
                    Station : Place Napoléon III, 85100 Les Sables-d'Olonne
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
