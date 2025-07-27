import { Metadata } from 'next'
import { Calendar, Clock, MapPin, Phone, User, Mail } from 'lucide-react'
import CallToAction from '../components/CallToAction'
import StructuredData from '../components/StructuredData'

export const metadata: Metadata = {
  title: "Réservation taxi en ligne | Taxi Sables-d'Olonne",
  description:
    "Réservez votre taxi aux Sables-d'Olonne en ligne. Formulaire de réservation simple et rapide. Service 24h/24. ☎️ 06 25 19 31 43",
  keywords: [
    "réservation taxi sables d'olonne",
    'réserver taxi en ligne',
    "booking taxi sables d'olonne",
  ],
  alternates: {
    canonical: 'https://taxi-sables-olonne.fr/reservation',
  },
}

export default function ReservationPage() {
  return (
    <>
      <StructuredData type="TaxiService" />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">
                Formulaire de réservation
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="nom"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Téléphone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="telephone"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email (optionnel)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="votre@email.fr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        id="date"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="heure"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Heure *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="time"
                        id="heure"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="depart"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Adresse de départ *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="depart"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Adresse de prise en charge"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Destination *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="destination"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Adresse de destination"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="passagers"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre de passagers
                  </label>
                  <select
                    id="passagers"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="1">1 passager</option>
                    <option value="2">2 passagers</option>
                    <option value="3">3 passagers</option>
                    <option value="4">4 passagers</option>
                    <option value="4+">Plus de 4 passagers</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="commentaires"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Commentaires ou instructions particulières
                  </label>
                  <textarea
                    id="commentaires"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Bagages, vol à surveiller, instructions particulières..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Envoyer ma demande de réservation
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Champs obligatoires. Votre réservation sera confirmée par
                téléphone dans les plus brefs délais.
              </p>
            </div>

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
                    <strong>Centre-ville :</strong> À partir de 6€
                  </p>
                  <p>
                    <strong>Aéroport Nantes :</strong> À partir de 140€
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
