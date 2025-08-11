// Composant pour les avis clients avec données structurées
// À utiliser uniquement avec de vrais avis vérifiables

interface Review {
  author: string
  datePublished: string
  reviewBody: string
  reviewRating: {
    ratingValue: number
    bestRating?: number
  }
}

interface ReviewsSchemaProps {
  reviews: Review[]
  averageRating: number
  reviewCount: number
}

export default function ReviewsSchema({
  reviews,
  averageRating,
  reviewCount,
}: ReviewsSchemaProps) {
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.taxi-sables-olonne.fr/#organization',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.reviewRating.ratingValue.toString(),
        bestRating: (review.reviewRating.bestRating || 5).toString(),
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewsSchema, null, 2),
      }}
    />
  )
}

// Exemple d'utilisation (à activer avec de vrais avis) :
/*
const realReviews = [
  {
    author: "Marie Dupont",
    datePublished: "2025-07-15",
    reviewBody: "Service excellent, chauffeur ponctuel et véhicule propre.",
    reviewRating: { ratingValue: 5 }
  }
];

<ReviewsSchema 
  reviews={realReviews}
  averageRating={4.8}
  reviewCount={realReviews.length}
/>
*/
