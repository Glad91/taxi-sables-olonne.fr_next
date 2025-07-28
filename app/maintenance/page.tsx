import { Metadata } from 'next'
import { Wrench, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Maintenance - Taxi Sables-d'Olonne",
  description:
    'Site en maintenance. Notre service de taxi reste disponible 24h/24. Appelez-nous au 06 25 19 31 43.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="bg-yellow-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Wrench className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Site en maintenance
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Nous mettons à jour notre site pour vous offrir une meilleure
            expérience. Notre service de taxi reste disponible !
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center">
            <Clock className="h-6 w-6 text-blue-600 mr-2" />
            Service taxi toujours disponible
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <Phone className="h-6 w-6 text-green-600" />
              <span className="text-lg">24h/24 - 7j/7</span>
            </div>

            <a
              href="tel:0625193143"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>06 25 19 31 43</span>
            </a>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              Nos services restent actifs :
            </h3>
            <ul className="text-blue-800 text-left max-w-md mx-auto">
              <li>• Taxi urbain aux Sables-d'Olonne</li>
              <li>• Transfert aéroport Nantes</li>
              <li>• Transfert gare SNCF</li>
              <li>• Transport médical VSL</li>
              <li>• Courses longue distance</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-500">
          Merci de votre patience. Le site sera bientôt de retour !
        </p>
      </div>
    </div>
  )
}
