import { Metadata } from 'next'
import {
  Clock,
  Phone,
  MapPin,
  Euro,
  Car,
  Shield,
  CreditCard,
} from 'lucide-react'
import CallToAction from '../components/CallToAction'
import StructuredData from '../components/StructuredData'
import Breadcrumb, { breadcrumbConfigs } from '../components/Breadcrumb'

export const metadata: Metadata = {
  title:
    "Guide complet du taxi aux Sables-d'Olonne 2024 | Tarifs, horaires, réservation",
  description:
    "Guide pratique complet pour prendre un taxi aux Sables-d'Olonne : tarifs officiels 2024, délais, paiement CB, transport médical VSL. Toutes les réponses à vos questions.",
  keywords: [
    "guide taxi sables d'olonne",
    "tarif taxi sables d'olonne 2024",
    "réserver taxi sables d'olonne",
    'transport médical VSL vendée',
    "taxi aéroport nantes sables d'olonne",
  ],
  openGraph: {
    title: "Guide complet du taxi aux Sables-d'Olonne 2024",
    description: "Guide pratique complet : tarifs officiels 2024, délais, paiement CB, transport médical VSL. Toutes les réponses aux Sables-d'Olonne.",
    url: 'https://taxi-sables-olonne.fr/guide-taxi-sables-olonne',
    images: [
      {
        url: 'https://taxi-sables-olonne.fr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Guide taxi Sables-d\'Olonne 2024 - Tarifs, horaires et réservation',
      },
    ],
  },
  twitter: {
    title: "Guide complet du taxi aux Sables-d'Olonne 2024",
    description: "Guide pratique : tarifs 2024, délais, paiement, transport VSL. Toutes les infos taxi Sables-d'Olonne.",
    images: ['https://taxi-sables-olonne.fr/og-image.png'],
  },
  alternates: {
    canonical: 'https://taxi-sables-olonne.fr/guide-taxi-sables-olonne',
  },
}

export default function GuideTaxiPage() {
  return (
    <>
      <StructuredData type="FAQ" />
      <Breadcrumb items={breadcrumbConfigs['/guide-taxi-sables-olonne']} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Guide taxi Sables-d'Olonne
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Tout ce que vous devez savoir pour utiliser les services de taxi
              aux Sables-d'Olonne. Tarifs officiels, délais, réservation,
              transport médical VSL.
            </p>
            <CallToAction className="justify-center" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Guide pratique du taxi aux Sables-d'Olonne
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Service de taxi professionnel disponible 24h/24 et 7j/7. Notre
                guide vous explique tout ce que vous devez savoir : tarifs,
                délais, réservation et transport médical.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Euro className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">
                    Tarifs réglementaires transparents
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">
                    Intervention moyenne en 8 minutes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">
                    VSL conventionné Sécurité Sociale
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Informations essentielles
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Prise en charge</span>
                  <span className="font-semibold text-blue-600">2,90€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Prix au kilomètre (jour)</span>
                  <span className="font-semibold text-blue-600">2,16€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Prix au kilomètre (nuit)</span>
                  <span className="font-semibold text-blue-600">3,24€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Délai d'intervention</span>
                  <span className="font-semibold text-blue-600">8 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Disponibilité</span>
                  <span className="font-semibold text-blue-600">24h/24</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Tarifs réglementaires selon l'arrêté préfectoral Vendée 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les réponses aux questions les plus posées sur notre service de
              taxi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Quels sont les tarifs ?
              </h3>
              <p className="text-gray-600">
                Tarifs réglementaires : 2,90€ de prise en charge + 2,16€/km en
                journée, 3,24€/km la nuit et dimanche. Tous nos tarifs suivent
                l'arrêté préfectoral.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Délai d'intervention ?
              </h3>
              <p className="text-gray-600">
                8 minutes en moyenne dans le centre-ville des Sables-d'Olonne.
                Service disponible 24h/24 et 7j/7 toute l'année.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Moyens de paiement ?
              </h3>
              <p className="text-gray-600">
                Nous acceptons les espèces, carte bancaire sans contact et
                chèques. Terminal de paiement disponible dans le véhicule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services de taxi aux Sables-d'Olonne
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez l'ensemble de nos prestations de transport professionnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Transferts gare & aéroport
              </h3>
              <p className="text-gray-600">
                Transport ponctuel vers la gare SNCF des Sables-d'Olonne et
                l'aéroport de Nantes. Suivi des horaires de train et de vol.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Transport médical VSL
              </h3>
              <p className="text-gray-600">
                Véhicule Sanitaire Léger conventionné Sécurité Sociale.
                Transport assis pour vos rendez-vous médicaux avec
                remboursement.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Courses longue distance
              </h3>
              <p className="text-gray-600">
                Déplacements vers La Roche-sur-Yon, Nantes, et toute la région.
                Tarifs préférentiels pour les trajets longue distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Réservez votre taxi aux Sables-d'Olonne
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Service professionnel disponible 24h/24. Réservation immédiate par
            téléphone. Tarifs transparents selon la réglementation préfectorale.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="tel:0625193143"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>06 25 19 31 43</span>
            </a>
            <p className="text-blue-100">
              Guide mis à jour en 2024 • Sources officielles • 15+ années
              d'expérience
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
