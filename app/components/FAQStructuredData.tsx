interface FAQItem {
  question: string
  answer: string
}

interface FAQStructuredDataProps {
  faqItems: FAQItem[]
}

export default function FAQStructuredData({
  faqItems,
}: FAQStructuredDataProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema, null, 2),
      }}
    />
  )
}

// FAQ prédéfinies pour le site taxi
export const taxiFAQItems: FAQItem[] = [
  {
    question: "Combien coûte un taxi aux Sables-d'Olonne ?",
    answer:
      'Les tarifs suivent la réglementation préfectorale 2024 : prise en charge 2,90€ + 2,16€/km en journée. Tarifs fixes : gare SNCF 8€, aéroport Nantes 180€, centre-ville minimum 6€.',
  },
  {
    question:
      "Quel est le délai d'intervention d'un taxi aux Sables-d'Olonne ?",
    answer:
      "Notre temps d'intervention moyen est de 8 minutes dans le centre-ville des Sables-d'Olonne. Service disponible 24h/24 et 7j/7 pour réservations et courses immédiates.",
  },
  {
    question: "Les taxis acceptent-ils la carte bancaire aux Sables-d'Olonne ?",
    answer:
      'Oui, notre taxi accepte les paiements par carte bancaire sans contact, espèces et chèques (sur accord préalable). Terminal de paiement électronique disponible.',
  },
  {
    question:
      "Peut-on réserver un taxi pour l'aéroport de Nantes depuis les Sables-d'Olonne ?",
    answer:
      "Absolument. Trajet Sables-d'Olonne → Aéroport Nantes : 1h15 (98 km), tarif fixe 180€. Suivi de vol pour les arrivées. Réservation à l'avance recommandée.",
  },
  {
    question:
      'Le transport médical VSL est-il remboursé par la Sécurité Sociale ?',
    answer:
      "Oui, en tant que VSL conventionné, nos transports médicaux sont remboursés à 65% par l'Assurance Maladie (100% en ALD). Prescription médicale obligatoire.",
  },
  {
    question: "Quels sont les horaires du service taxi aux Sables-d'Olonne ?",
    answer:
      "Notre service fonctionne 24h/24 et 7j/7 toute l'année. Service immédiat par téléphone au 06 25 19 31 43 ou réservation à l'avance recommandée en haute saison.",
  },
]
