import { Metadata } from 'next'
import { Star, User, Quote, Phone } from 'lucide-react'
import CallToAction from '../components/CallToAction'
import StructuredData from '../components/StructuredData'
import Breadcrumb, { breadcrumbConfigs } from '../components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Avis clients | Témoignages',
  description:
    "Découvrez les avis de nos clients satisfaits du service taxi aux Sables-d'Olonne. Service 5 étoiles, ponctuel et professionnel. ☎️ 06 25 19 31 43",
  keywords: [
    "avis taxi sables d'olonne",
    'témoignages clients',
    'avis google',
    'satisfaction client',
  ],
  alternates: {
    canonical: 'https://taxi-sables-olonne.fr/avis-clients',
  },
}

const reviewsData = [
  {
    id: 1,
    name: 'Marie Dubois',
    rating: 5,
    date: '15 janvier 2025',
    comment:
      "Service impeccable ! Chauffeur très professionnel et ponctuel pour mon transfert vers l'aéroport de Nantes. Je recommande vivement.",
    service: 'Transfert aéroport',
  },
  {
    id: 2,
    name: 'Pierre Martin',
    rating: 5,
    date: '8 janvier 2025',
    comment:
      'Excellent service pour mes rendez-vous médicaux. Transport VSL très confortable et chauffeur attentionné. Merci !',
    service: 'Transport médical',
  },
  {
    id: 3,
    name: 'Sophie Bernard',
    rating: 5,
    date: '3 janvier 2025',
    comment:
      "Taxi très fiable pour mes trajets quotidiens. Toujours à l'heure et tarifs corrects. Service de qualité aux Sables-d'Olonne.",
    service: 'Courses locales',
  },
  {
    id: 4,
    name: 'Jean-Claude Moreau',
    rating: 5,
    date: '28 décembre 2024',
    comment:
      "Parfait pour la gare SNCF ! Arrivé pile à l'heure pour mon train. Chauffeur sympa et véhicule propre.",
    service: 'Transfert gare',
  },
  {
    id: 5,
    name: 'Isabelle Rousseau',
    rating: 5,
    date: '20 décembre 2024',
    comment:
      "Service exceptionnel pour notre mariage. Transport de nos invités depuis l'hôtel. Très professionnel et disponible.",
    service: 'Événement spécial',
  },
  {
    id: 6,
    name: 'Michel Leroy',
    rating: 5,
    date: '15 décembre 2024',
    comment:
      'Longue distance vers Bordeaux parfaitement gérée. Confort optimal et chauffeur expérimenté. Je referai appel à ce service.',
    service: 'Longue distance',
  },
]

export default function AvisClientsPage() {
  const averageRating = 5.0
  const totalReviews = reviewsData.length

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Taxi Sables-d'Olonne",
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toString(),
      bestRating: '5',
      worstRating: '1',
      ratingCount: totalReviews.toString(),
    },
    review: reviewsData.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      datePublished: review.date,
      reviewBody: review.comment,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    })),
  }

  return (
    <>
      <StructuredData data={reviewSchema} />
      <Breadcrumb items={breadcrumbConfigs['/avis-clients']} />

      <section className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Avis de nos clients
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits du service
              taxi aux Sables-d&apos;Olonne. Votre satisfaction est notre
              priorité !
            </p>

            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    className="h-8 w-8 fill-current text-yellow-300"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold ml-4">{averageRating}/5</span>
              <span className="text-lg text-yellow-100">
                ({totalReviews} avis)
              </span>
            </div>

            <CallToAction className="justify-center" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages clients
            </h2>
            <p className="text-lg text-gray-600">
              Ce que disent nos clients de notre service taxi aux
              Sables-d&apos;Olonne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsData.map(review => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating
                            ? 'fill-current text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-600">
                    {review.service}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="absolute top-0 left-0 h-6 w-6 text-gray-300 -mt-2 -ml-1" />
                  <p className="text-gray-700 pl-6 italic">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi nos clients nous choisissent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Service 5 étoiles</h3>
              <p className="text-gray-600">
                Note moyenne de 5/5 basée sur les avis de nos clients
                satisfaits.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Disponibilité 24h/24
              </h3>
              <p className="text-gray-600">
                Service disponible jour et nuit, 7 jours sur 7, pour vos
                urgences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Chauffeur professionnel
              </h3>
              <p className="text-gray-600">
                Chauffeur expérimenté, courtois et parfaitement formé au
                transport.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Tarifs transparents
              </h3>
              <p className="text-gray-600">
                Prix clairs et compétitifs, sans surprise ni supplément caché.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Faites l&apos;expérience de notre service taxi de qualité aux
            Sables-d&apos;Olonne. Votre satisfaction sera notre récompense !
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="tel:0625193143"
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>06 25 19 31 43</span>
            </a>
            <p className="text-yellow-100">Service disponible 24h/24</p>
          </div>
        </div>
      </section>
    </>
  )
}
