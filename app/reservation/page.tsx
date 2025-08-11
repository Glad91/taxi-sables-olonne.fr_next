import { Metadata } from 'next'
import CallToAction from '../components/CallToAction'
import StructuredData from '../components/StructuredData'
import Breadcrumb, { breadcrumbConfigs } from '../components/Breadcrumb'
import ReservationForm from '../components/ReservationForm'

export const metadata: Metadata = {
  title: "Réservation taxi en ligne | Taxi Sables-d'Olonne",
  description:
    "Réservez votre taxi aux Sables-d'Olonne en ligne. Formulaire de réservation simple et rapide. Service 24h/24. ☎️ 06 25 19 31 43",
  keywords: [
    "réservation taxi sables d'olonne",
    'réserver taxi en ligne',
    "booking taxi sables d'olonne",
  ],
  openGraph: {
    title: "Réservation taxi en ligne | Taxi Sables-d'Olonne",
    description: "Réservez votre taxi aux Sables-d'Olonne en ligne. Formulaire de réservation simple et rapide. Service 24h/24.",
    url: 'https://www.taxi-sables-olonne.fr/reservation',
    images: [
      {
        url: 'https://www.taxi-sables-olonne.fr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Réservation taxi Sables-d\'Olonne - Service de réservation en ligne',
      },
    ],
  },
  twitter: {
    title: "Réservation taxi en ligne | Taxi Sables-d'Olonne",
    description: "Réservez votre taxi aux Sables-d'Olonne en ligne. Formulaire simple et rapide. Service 24h/24.",
    images: ['https://www.taxi-sables-olonne.fr/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.taxi-sables-olonne.fr/reservation',
  },
}

export default function ReservationPage() {
  return (
    <>
      <StructuredData type="TaxiService" />
      <Breadcrumb items={breadcrumbConfigs['/reservation']} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Réservation de taxi en ligne
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Réservez votre taxi aux Sables-d'Olonne en quelques clics.
              Remplissez le formulaire ci-dessous ou appelez-nous directement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ReservationForm />

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Réservation immédiate
                </h3>
                <p className="text-gray-600 mb-6">
                  Pour une réservation immédiate ou un départ dans l'heure,
                  appelez-nous directement :
                </p>
                <CallToAction showReservation={false} />
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  Informations importantes
                </h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Confirmation par téléphone sous 2h maximum</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Service disponible 24h/24 et 7j/7</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Paiement par carte ou espèces</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Devis gratuit pour longue distance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Véhicule récent et confortable</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-900">
                  Nos tarifs préférentiels
                </h3>
                <div className="space-y-2 text-green-800">
                  <p>
                    <strong>Gare SNCF :</strong> À partir de 8€
                  </p>
                  <p>
                    <strong>Centre-ville :</strong> À partir de 8€
                  </p>
                  <p>
                    <strong>Aéroport Nantes :</strong> À partir de 230€
                  </p>
                  <p>
                    <strong>Transport médical :</strong> Prise en charge
                    Sécurité Sociale
                  </p>
                </div>
                <p className="text-sm text-green-600 mt-4">
                  Tarifs indicatifs - Devis personnalisé selon votre trajet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
