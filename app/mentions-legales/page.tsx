import { Metadata } from 'next'
import { Shield, Building, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: "Mentions légales - Taxi Sables-d'Olonne",
  description:
    "Mentions légales du service de taxi professionnel aux Sables-d'Olonne. Informations légales, coordonnées, conditions d'utilisation.",
  openGraph: {
    title: "Mentions légales - Taxi Sables-d'Olonne",
    description: "Mentions légales du service de taxi professionnel aux Sables-d'Olonne. Informations légales et coordonnées.",
    url: 'https://taxi-sables-olonne.fr/mentions-legales',
    images: [
      {
        url: 'https://taxi-sables-olonne.fr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mentions légales Taxi Sables-d\'Olonne - Informations légales',
      },
    ],
  },
  twitter: {
    title: "Mentions légales - Taxi Sables-d'Olonne",
    description: "Mentions légales du service taxi professionnel aux Sables-d'Olonne.",
    images: ['https://taxi-sables-olonne.fr/og-image.png'],
  },
  alternates: {
    canonical: 'https://taxi-sables-olonne.fr/mentions-legales',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mentions légales
          </h1>
          <p className="text-lg text-gray-600">
            Informations légales concernant le service Taxi Sables-d'Olonne
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <div className="flex items-center mb-4">
              <Building className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold">Éditeur du site</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Raison sociale</h3>
                  <p>Taxi Sables-d'Olonne</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Forme juridique</h3>
                  <p>Entreprise individuelle</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Adresse</h3>
                  <p>
                    Place Napoléon III
                    <br />
                    85100 Les Sables-d'Olonne
                    <br />
                    France
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>06 25 19 31 43</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>contact@taxi-sables-olonne.fr</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Numéro de carte professionnelle
                  </h3>
                  <p>CP85XXXX (Préfecture de Vendée)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Assurance professionnelle
                  </h3>
                  <p>
                    Responsabilité civile professionnelle
                    <br />
                    Transport de personnes
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold">Hébergement du site</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA
                91789, USA
              </p>
              <p>
                <strong>Site web :</strong>{' '}
                <a
                  href="https://vercel.com"
                  className="text-blue-600 hover:underline"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Propriété intellectuelle
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.)
                est protégé par le droit d'auteur. Toute reproduction, même
                partielle, est interdite sans autorisation préalable.
              </p>
              <p className="text-gray-600">
                Les marques et logos présents sur ce site sont déposés par leurs
                propriétaires respectifs.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Protection des données personnelles
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d'un droit d'accès, de rectification, de
                suppression et de portabilité de vos données personnelles.
              </p>
              <p className="text-gray-600 mb-4">
                Les données collectées via ce site sont utilisées uniquement
                dans le cadre de notre activité de transport de personnes et ne
                sont jamais transmises à des tiers sans votre consentement.
              </p>
              <p className="text-gray-600">
                Pour exercer vos droits, contactez-nous à :
                contact@taxi-sables-olonne.fr
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies et tracking</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Ce site utilise Google Analytics pour analyser l'audience et
                améliorer nos services. Ces outils utilisent des cookies qui ne
                collectent que des données anonymisées.
              </p>
              <p className="text-gray-600">
                Vous pouvez désactiver ces cookies via les paramètres de votre
                navigateur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Conditions d'utilisation
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                L'utilisation de ce site implique l'acceptation pleine et
                entière des conditions générales d'utilisation.
              </p>
              <p className="text-gray-600 mb-4">
                Nous nous réservons le droit de modifier ces mentions légales à
                tout moment. Les modifications prendront effet dès leur
                publication sur le site.
              </p>
              <p className="text-gray-600">
                En cas de litige, les tribunaux de La Roche-sur-Yon seront seuls
                compétents.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Activité réglementée
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                <strong>
                  Activité de transport public particulier de personnes
                </strong>
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Autorisation préfectorale de stationnement : ADS n°XX</li>
                <li>• Licence de transport intérieur : LTI Vendée</li>
                <li>• Certificat de capacité professionnelle de transport</li>
                <li>• Visite technique périodique du véhicule</li>
                <li>• Assurance responsabilité civile professionnelle</li>
              </ul>
            </div>
          </section>

          <section className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
