import { Metadata } from 'next'
import { Heart, Shield, Clock, Phone } from 'lucide-react'
import CallToAction from '../components/CallToAction'
import StructuredData from '../components/StructuredData'
import Breadcrumb, { breadcrumbConfigs } from '../components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Transport médical VSL | Remboursé',
  description:
    "Transport médical assis VSL conventionné aux Sables-d'Olonne. Prise en charge Sécurité Sociale pour vos rendez-vous médicaux. Service professionnel et discret. ☎️ 06 25 19 31 43",
  keywords: [
    "transport médical sables d'olonne",
    'VSL conventionné',
    'taxi médical',
    'transport sanitaire',
  ],
  openGraph: {
    title: "Transport médical VSL | Remboursé Sécurité Sociale",
    description: "Transport médical assis VSL conventionné aux Sables-d'Olonne. Prise en charge Sécurité Sociale pour vos rendez-vous médicaux.",
    url: 'https://www.taxi-sables-olonne.fr/transport-medical',
    images: [
      {
        url: 'https://www.taxi-sables-olonne.fr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Transport médical VSL Sables-d\'Olonne - Service conventionné remboursé',
      },
    ],
  },
  twitter: {
    title: "Transport médical VSL | Remboursé Sécurité Sociale",
    description: "Transport médical VSL conventionné aux Sables-d'Olonne. Prise en charge Sécurité Sociale pour vos RDV médicaux.",
    images: ['https://www.taxi-sables-olonne.fr/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.taxi-sables-olonne.fr/transport-medical',
  },
}

export default function TransportMedicalPage() {
  return (
    <>
      <StructuredData type="TaxiService" />
      <Breadcrumb items={breadcrumbConfigs['/transport-medical']} />

      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transport médical VSL
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Service de transport médical assis conventionné aux
              Sables-d'Olonne. Prise en charge par la Sécurité Sociale pour vos
              rendez-vous médicaux.
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
                VSL conventionné Sables-d'Olonne
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre service de transport médical VSL (Véhicule Sanitaire
                Léger) conventionné vous accompagne pour tous vos rendez-vous
                médicaux. Service professionnel, discret et adapté aux personnes
                à mobilité réduite.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">
                    Service conventionné Sécurité Sociale
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">
                    Chauffeur formé aux transports médicaux
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">
                    Ponctualité pour vos rendez-vous
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Prise en charge</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="font-semibold text-green-800">
                    Remboursement Sécurité Sociale
                  </div>
                  <div className="text-sm text-green-700">
                    Sur prescription médicale
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-blue-800">
                    Mutuelle complémentaire
                  </div>
                  <div className="text-sm text-blue-700">
                    Selon votre contrat
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="font-semibold text-yellow-800">ALD 100%</div>
                  <div className="text-sm text-yellow-700">
                    Affection Longue Durée
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Nous gérons directement le tiers payant avec votre carte Vitale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types de transports médicaux assurés
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-600 mb-4">
                <Heart className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Consultations médicales
              </h3>
              <p className="text-gray-600">
                Rendez-vous chez votre médecin généraliste, spécialiste,
                dentiste, ophtalmologue, etc.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-600 mb-4">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Examens médicaux</h3>
              <p className="text-gray-600">
                Scanner, IRM, radiologie, analyses de sang, échographies et
                autres examens.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-600 mb-4">
                <Clock className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Soins réguliers</h3>
              <p className="text-gray-600">
                Dialyse, chimiothérapie, kinésithérapie et autres soins
                nécessitant des déplacements fréquents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Conditions de prise en charge VSL
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Documents nécessaires
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Prescription médicale de transport</li>
                  <li>• Carte Vitale à jour</li>
                  <li>• Carte mutuelle (si applicable)</li>
                  <li>• Pièce d'identité</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Conditions médicales
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Impossibilité d'utiliser un véhicule personnel</li>
                  <li>• État de santé nécessitant un transport assis</li>
                  <li>• Distance &gt; 150 km aller</li>
                  <li>• Affection Longue Durée (ALD)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Réservez votre transport médical
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour organiser votre transport médical VSL. Service
            conventionné et prise en charge directe possible.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="tel:0625193143"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>06 25 19 31 43</span>
            </a>
            <p className="text-green-100">
              Réservation conseillée 24h à l'avance
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
