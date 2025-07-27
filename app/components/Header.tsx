'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Phone, MapPin, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Guide taxi', href: '/guide-taxi-sables-olonne' },
    { name: 'Gare SNCF', href: '/gare-sables-olonne' },
    { name: 'Aéroport Nantes', href: '/aeroport-nantes' },
    { name: 'Transport médical', href: '/transport-medical' },
    { name: 'Longue distance', href: '/longue-distance' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Avis clients', href: '/avis-clients' },
    { name: 'Contact', href: '/contact' },
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
                <h1 className="text-xl font-bold text-gray-900">Taxi Sables-d'Olonne</h1>
                <p className="text-sm text-gray-600">Service 24h/24 - 7j/7</p>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0625193143"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>06 25 19 31 43</span>
            </a>
            <Link
              href="/reservation"
              className="bg-taxi-yellow text-black px-4 py-2 rounded-lg font-medium hover:bg-taxi-orange hover:text-white transition-colors"
            >
              Réserver
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <a
                  href="tel:0625193143"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>06 25 19 31 43</span>
                </a>
                <Link
                  href="/reservation"
                  className="bg-taxi-yellow text-black px-4 py-2 rounded-lg font-medium hover:bg-taxi-orange hover:text-white transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Réserver en ligne
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}