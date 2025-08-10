import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import CallToAction from '../components/CallToAction'
import StructuredData from '../components/StructuredData'
import Breadcrumb, { breadcrumbConfigs } from '../components/Breadcrumb'

export const metadata: Metadata = {
  title: "Contact | Taxi Sables-d'Olonne - 06 25 19 31 43",
  description:
    "Contactez Taxi Sables-d'Olonne : ☎️ 06 25 19 31 43, 📧 contact@taxi-sables-olonne.fr, 📍 Place Napoléon III. Service 24h/24.",
  keywords: ["contact taxi sables d'olonne", 'téléphone taxi', 'adresse taxi'],
  alternates: {
    canonical: 'https://taxi-sables-olonne.fr/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <StructuredData type="TaxiService" />
      <Breadcrumb items={breadcrumbConfigs['/contact']} />

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Une question ? Une réservation ? Contactez Taxi
              Sables-d&apos;Olonne par téléphone, email ou venez nous voir Place
              Napoléon III.
            </p>
            <CallToAction className="justify-center" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                    <a
                      href="tel:0625193143"
                      className="text-blue-600 hover:text-blue-800 text-xl font-semibold"
                    >
                      06 25 19 31 43
                    </a>
                    <p className="text-gray-600 mt-1">
                      Disponible 24h/24 - 7j/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:contact@taxi-sables-olonne.fr"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      contact@taxi-sables-olonne.fr
                    </a>
                    <p className="text-gray-600 mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Adresse</h3>
                    <p className="text-gray-700">
                      Place Napoléon III
                      <br />
                      85100 Les Sables-d&apos;Olonne
                      <br />
                      Vendée, France
                    </p>
                    <a
                      href="https://maps.google.com/maps?daddr=Place+Napol%C3%A9on+III,+85100+Les+Sables-d'Olonne"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                    >
                      📍 Voir sur Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Horaires</h3>
                    <p className="text-gray-700">
                      <strong>Service disponible :</strong>
                      <br />
                      24 heures sur 24
                      <br />
                      7 jours sur 7<br />
                      Jours fériés inclus
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">
                Zone d&apos;intervention
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Sables-d&apos;Olonne et communes
                  </h3>
                  <ul className="grid grid-cols-2 gap-2 text-gray-600">
                    <li>• Les Sables-d&apos;Olonne</li>
                    <li>• Olonne-sur-Mer</li>
                    <li>• Château-d&apos;Olonne</li>
                    <li>• La Chaume</li>
                    <li>• L&apos;Île-d&apos;Olonne</li>
                    <li>• Vairé</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Destinations fréquentes
                  </h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Gare SNCF des Sables-d&apos;Olonne</li>
                    <li>• Aéroport Nantes Atlantique</li>
                    <li>• Hôpitaux et cliniques (La Roche-sur-Yon, Nantes)</li>
                    <li>• Talmont-Saint-Hilaire</li>
                    <li>• Saint-Jean-de-Monts</li>
                    <li>• Et toute la Vendée (85)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Urgences et réservations
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Pour un départ immédiat ou une réservation, appelez
                    directement au
                    <strong> 06 25 19 31 43</strong>. Nous sommes disponibles
                    24h/24 pour répondre à vos besoins de transport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Localisation
            </h2>
            <p className="text-lg text-gray-600">
              Nous sommes situés au cœur des Sables-d&apos;Olonne, Place
              Napoléon III
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.5!2d-1.783313!3d46.496002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDI5JzQ1LjYiTiAxwrA0NicwMy45Ilc!5e0!3m2!1sfr!2sfr!4v1647123456789!5m2!1sfr!2sfr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Taxi Sables-d'Olonne"
                className="rounded-lg"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Place Napoléon III, 85100 Les Sables-d&apos;Olonne
              </p>
              <a
                href="https://maps.google.com/maps?daddr=Place+Napol%C3%A9on+III,+85100+Les+Sables-d'Olonne"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
              >
                <MapPin className="h-5 w-5" />
                <span>Itinéraire Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
