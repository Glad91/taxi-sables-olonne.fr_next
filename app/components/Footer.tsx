import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-taxi-yellow text-black p-2 rounded-lg font-bold text-xl">
                🚕
              </div>
              <div>
                <h3 className="text-lg font-bold">Taxi Sables-d'Olonne</h3>
                <p className="text-sm text-gray-400">
                  Votre chauffeur de confiance
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Service de taxi professionnel aux Sables-d'Olonne et ses
              alentours. Disponible 24h/24 et 7j/7 pour tous vos déplacements.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/guide-taxi-sables-olonne"
                  className="hover:text-white transition-colors"
                >
                  Guide taxi complet
                </Link>
              </li>
              <li>
                <Link
                  href="/gare-sables-olonne"
                  className="hover:text-white transition-colors"
                >
                  Transfert Gare SNCF
                </Link>
              </li>
              <li>
                <Link
                  href="/aeroport-nantes"
                  className="hover:text-white transition-colors"
                >
                  Aéroport Nantes
                </Link>
              </li>
              <li>
                <Link
                  href="/transport-medical"
                  className="hover:text-white transition-colors"
                >
                  Transport médical
                </Link>
              </li>
              <li>
                <Link
                  href="/longue-distance"
                  className="hover:text-white transition-colors"
                >
                  Longue distance
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className="hover:text-white transition-colors"
                >
                  Réservation en ligne
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:0625193143"
                  className="hover:text-white transition-colors"
                >
                  06 25 19 31 43
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:contact@taxi-sables-olonne.fr"
                  className="hover:text-white transition-colors"
                >
                  contact@taxi-sables-olonne.fr
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Place Napoléon III
                  <br />
                  85100 Les Sables-d'Olonne
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>24h/24 - 7j/7</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Zone d'intervention</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Les Sables-d'Olonne</li>
              <li>Olonne-sur-Mer</li>
              <li>Château-d'Olonne</li>
              <li>Talmont-Saint-Hilaire</li>
              <li>La Chaume</li>
              <li>Vendée (85)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Taxi Sables-d'Olonne. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/tarifs"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Tarifs
              </Link>
              <Link
                href="/avis-clients"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Avis clients
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
