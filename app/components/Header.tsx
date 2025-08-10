'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { useGoogleAnalytics } from './GoogleTag'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { trackEvent } = useGoogleAnalytics()

  const handlePhoneClick = () => {
    trackEvent('phone_call', 'engagement', 'header_phone_button')
  }

  const handleReservationClick = () => {
    trackEvent('start_booking', 'engagement', 'header_reservation_button')
  }

  const navigation = [
    { name: 'Guide', href: '/guide-taxi-sables-olonne' },
    { name: 'Gare', href: '/gare-sables-olonne' },
    { name: 'Aéroport', href: '/aeroport-nantes' },
    { name: 'Médical', href: '/transport-medical' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Contact', href: '/contact' },
  ]

  const moreNavigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Guide taxi complet', href: '/guide-taxi-sables-olonne' },
    { name: 'Gare SNCF', href: '/gare-sables-olonne' },
    { name: 'Aéroport Nantes', href: '/aeroport-nantes' },
    { name: 'Transport médical VSL', href: '/transport-medical' },
    { name: 'Longue distance', href: '/longue-distance' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Avis clients', href: '/avis-clients' },
    { name: 'Contact', href: '/contact' },
    { name: 'Réservation', href: '/reservation' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-taxi-yellow text-black p-2 rounded-lg font-bold text-xl">
                🚕
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Taxi Sables-d'Olonne
                </h1>
                <p className="text-sm text-gray-600">Service 24h/24 - 7j/7</p>
              </div>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center space-x-6">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:0625193143"
              onClick={handlePhoneClick}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2 text-sm whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">06 25 19 31 43</span>
              <span className="xl:hidden">Appeler</span>
            </a>
            <Link
              href="/reservation"
              onClick={handleReservationClick}
              className="bg-taxi-yellow text-black px-3 py-2 rounded-lg font-medium hover:bg-taxi-orange hover:text-white transition-colors text-sm whitespace-nowrap"
            >
              Réserver
            </Link>
          </div>

          <div className="xl:hidden flex items-center space-x-2">
            <a
              href="tel:0625193143"
              onClick={handlePhoneClick}
              className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
              aria-label="Appeler maintenant"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              {moreNavigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a
                  href="tel:0625193143"
                  onClick={handlePhoneClick}
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>06 25 19 31 43</span>
                </a>
                <div className="text-xs text-gray-500 text-center">
                  Service disponible 24h/24 - 7j/7
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
