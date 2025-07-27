import { Metadata } from 'next'
import Link from 'next/link'
import { Car, Clock, Phone, MapPin, Star, Shield, CreditCard } from 'lucide-react'
import CallToAction from './components/CallToAction'
import StructuredData from './components/StructuredData'

export const metadata: Metadata = {
  title: "Taxi Sables-d'Olonne | Chauffeur privé 24h/24 Place Napoléon III",
  description: "Service de taxi professionnel aux Sables-d'Olonne. Réservation 24h/24, transferts gare SNCF, aéroport Nantes, transport médical VSL. ☎️ 06 25 19 31 43",
  keywords: ["taxi sables d'olonne", "chauffeur privé sables d'olonne", "transport sables d'olonne", "taxi place napoléon III", "VSL conventionné", "transfert aéroport nantes", "gare SNCF sables d'olonne"],
  alternates: {
    canonical: "https://taxi-sables-olonne.fr",
  },
}

export default function Home() {
  return (
    <>
      <StructuredData type="TaxiService" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Taxi Sables-d'Olonne</span>
              <span className="block text-taxi-yellow">Votre chauffeur de confiance</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Service de taxi professionnel aux Sables-d'Olonne. Disponible <strong>24h/24 et 7j/7</strong> pour tous vos déplacements. 
              Transferts gare SNCF, aéroport Nantes, transport médical VSL conventionné.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-taxi-yellow" />
                <span>Place Napoléon III, Les Sables-d'Olonne</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-taxi-yellow" />
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
              Découvrez notre gamme complète de services de taxi et transport pour tous vos besoins de déplacement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/gare-sables-olonne" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-primary-600 mb-4 group-hover:text-primary-700">
                <Car className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transfert Gare SNCF</h3>
              <p className="text-gray-600">Transport rapide et ponctuel depuis et vers la gare SNCF des Sables-d'Olonne.</p>
            </Link>

            <Link href="/aeroport-nantes" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-primary-600 mb-4 group-hover:text-primary-700">
                <Car className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Aéroport Nantes</h3>
              <p className="text-gray-600">Transfert confortable vers l'aéroport Nantes Atlantique avec suivi de vol.</p>
            </Link>

            <Link href="/transport-medical" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-primary-600 mb-4 group-hover:text-primary-700">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transport médical</h3>
              <p className="text-gray-600">VSL conventionné pour vos rendez-vous médicaux. Prise en charge Sécurité Sociale.</p>
            </Link>

            <Link href="/longue-distance" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-primary-600 mb-4 group-hover:text-primary-700">
                <MapPin className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Longue distance</h3>
              <p className="text-gray-600">Déplacements vers La Roche-sur-Yon, Nantes, Bordeaux et toute la région.</p>
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
              Un service de qualité reconnu par nos clients depuis de nombreuses années.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Disponibilité 24h/24</h3>
              <p className="text-gray-600">
                Service de taxi disponible jour et nuit, 7 jours sur 7, pour tous vos déplacements urgents ou programmés.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Chauffeur expérimenté</h3>
              <p className="text-gray-600">
                Chauffeur professionnel avec une parfaite connaissance des Sables-d'Olonne et de la région vendéenne.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tarifs transparents</h3>
              <p className="text-gray-600">
                Tarifs clairs et compétitifs. Paiement par carte ou espèces. Devis gratuit pour vos trajets longue distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un taxi aux Sables-d'Olonne ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre taxi ou appelez-nous directement pour un départ immédiat. 
            Service rapide et fiable garanti !
          </p>
          <CallToAction showItinerary={false} className="justify-center" />
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Taxi aux Sables-d'Olonne et alentours
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Notre zone d'intervention</h3>
              <p className="text-gray-600 mb-6">
                Basé Place Napoléon III aux Sables-d'Olonne, notre service de taxi couvre l'ensemble de la commune 
                et ses alentours. Nous intervenons rapidement dans toute la région pour vos déplacements professionnels 
                et personnels.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Les Sables-d'Olonne centre-ville</li>
                <li>✓ Olonne-sur-Mer</li>
                <li>✓ Château-d'Olonne</li>
                <li>✓ La Chaume</li>
                <li>✓ Talmont-Saint-Hilaire</li>
                <li>✓ Et toute la Vendée (85)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h3>
              <p className="text-gray-600 mb-6">
                Fort de nombreuses années d'expérience, notre service de taxi aux Sables-d'Olonne vous garantit 
                un transport sûr, ponctuel et confortable. Véhicule récent, chauffeur professionnel et tarifs compétitifs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Réservation par téléphone : <strong>06 25 19 31 43</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Localisation : Place Napoléon III, Les Sables-d'Olonne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
