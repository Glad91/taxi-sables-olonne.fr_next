import Link from 'next/link'
import { Home, Phone, Search } from 'lucide-react'
import CallToAction from './components/CallToAction'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page non trouvée
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            Nous sommes toujours disponibles pour vos trajets en taxi aux
            Sables-d'Olonne !
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold mb-6">Pages populaires :</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Home className="h-5 w-5 text-blue-600" />
              <span>Accueil</span>
            </Link>
            <Link
              href="/reservation"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Search className="h-5 w-5 text-blue-600" />
              <span>Réservation</span>
            </Link>
            <Link
              href="/tarifs"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span className="text-blue-600">€</span>
              <span>Tarifs</span>
            </Link>
            <Link
              href="/aeroport-nantes"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span className="text-blue-600">✈️</span>
              <span>Aéroport Nantes</span>
            </Link>
            <Link
              href="/gare-sables-olonne"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span className="text-blue-600">🚄</span>
              <span>Gare SNCF</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 text-blue-600" />
              <span>Contact</span>
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Besoin d'un taxi maintenant ?
          </h3>
          <CallToAction className="justify-center" showItinerary={false} />
        </div>

        <p className="text-gray-500">
          Vous pouvez aussi{' '}
          <Link href="/" className="text-blue-600 hover:underline">
            retourner à l'accueil
          </Link>{' '}
          ou nous appeler directement au{' '}
          <a href="tel:0625193143" className="text-blue-600 hover:underline">
            06 25 19 31 43
          </a>
        </p>
      </div>
    </div>
  )
}
