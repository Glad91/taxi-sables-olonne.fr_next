import { z } from 'zod'

// Messages d'erreur personnalisés en français
const errorMessages = {
  required: 'Ce champ est obligatoire',
  email: 'Veuillez saisir une adresse email valide',
  phone: 'Veuillez saisir un numéro de téléphone valide (ex: 06 12 34 56 78)',
  date: 'Veuillez saisir une date valide',
  time: 'Veuillez saisir une heure valide (format HH:MM)',
  min: (min: number) => `Minimum ${min} caractères requis`,
  max: (max: number) => `Maximum ${max} caractères autorisés`,
}

// Regex pour validation téléphone français
const phoneRegex = /^(?:(?:\+33|0)[1-9](?:[0-9]{8}))$/
const phoneRegexFormatted = /^0[1-9](?:[ .-]?[0-9]{2}){4}$/

// Schéma de validation pour les données de réservation
export const reservationSchema = z.object({
  nom: z
    .string({ message: errorMessages.required })
    .min(2, errorMessages.min(2))
    .max(50, errorMessages.max(50))
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      'Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets'
    ),

  prenom: z
    .string({ message: errorMessages.required })
    .min(2, errorMessages.min(2))
    .max(50, errorMessages.max(50))
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      'Le prénom ne peut contenir que des lettres, espaces, apostrophes et tirets'
    ),

  telephone: z.string({ message: errorMessages.required }).refine(phone => {
    // Nettoie le numéro (retire espaces, points, tirets)
    const cleaned = phone.replace(/[\s.-]/g, '')
    return phoneRegex.test(cleaned) || phoneRegexFormatted.test(phone)
  }, errorMessages.phone),

  email: z
    .string({ message: errorMessages.required })
    .email(errorMessages.email)
    .max(100, errorMessages.max(100)),

  dateReservation: z
    .string({ message: errorMessages.required })
    .refine(date => {
      const selectedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return selectedDate >= today
    }, "La date ne peut pas être antérieure à aujourd'hui")
    .refine(date => {
      const selectedDate = new Date(date)
      const maxDate = new Date()
      maxDate.setFullYear(maxDate.getFullYear() + 1)
      return selectedDate <= maxDate
    }, 'La date ne peut pas être supérieure à un an'),

  heureReservation: z
    .string({ message: errorMessages.required })
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, errorMessages.time),

  lieuDepart: z
    .string({ message: errorMessages.required })
    .min(5, errorMessages.min(5))
    .max(200, errorMessages.max(200)),

  lieuArrivee: z
    .string({ message: errorMessages.required })
    .min(5, errorMessages.min(5))
    .max(200, errorMessages.max(200)),

  nombrePassagers: z.string({ message: errorMessages.required }).refine(val => {
    const num = parseInt(val)
    return !isNaN(num) && num >= 1 && num <= 8
  }, 'Le nombre de passagers doit être entre 1 et 8'),

  typeService: z
    .string({ message: errorMessages.required })
    .min(1, 'Veuillez sélectionner un type de service'),

  informationsComplementaires: z
    .string()
    .max(500, errorMessages.max(500))
    .optional(),
})

// Type TypeScript dérivé du schéma Zod
export type ReservationFormData = z.infer<typeof reservationSchema>

// Fonction utilitaire pour valider et formater les données
export const validateReservationData = (data: unknown) => {
  try {
    const result = reservationSchema.parse(data)
    return { success: true, data: result, errors: null }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors: Record<string, string> = {}
      error.issues.forEach(err => {
        const path = err.path.join('.')
        formattedErrors[path] = err.message
      })
      return { success: false, data: null, errors: formattedErrors }
    }
    return {
      success: false,
      data: null,
      errors: { general: 'Erreur de validation inattendue' },
    }
  }
}

// Fonction pour nettoyer et formater le numéro de téléphone
export const formatPhoneNumber = (phone: string): string => {
  // Retire tous les caractères non numériques sauf le +
  const cleaned = phone.replace(/[^\d+]/g, '')

  // Convertit le +33 en 0
  if (cleaned.startsWith('+33')) {
    return '0' + cleaned.slice(3)
  }

  return cleaned
}

// Types de services disponibles
export const serviceTypes = [
  'Taxi urbain',
  'Transfert gare SNCF',
  'Transfert aéroport',
  'Transport médical VSL',
  'Longue distance',
  'Autre',
] as const

// Validation individuelle par champ pour feedback temps réel
const fieldValidators = {
  nom: (value: string) => {
    if (!value) return 'Ce champ est obligatoire'
    if (value.length < 2) return 'Minimum 2 caractères requis'
    if (value.length > 50) return 'Maximum 50 caractères autorisés'
    if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value)) {
      return 'Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets'
    }
    return null
  },

  prenom: (value: string) => {
    if (!value) return 'Ce champ est obligatoire'
    if (value.length < 2) return 'Minimum 2 caractères requis'
    if (value.length > 50) return 'Maximum 50 caractères autorisés'
    if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value)) {
      return 'Le prénom ne peut contenir que des lettres, espaces, apostrophes et tirets'
    }
    return null
  },

  telephone: (value: string) => {
    if (!value) return 'Ce champ est obligatoire'
    const cleaned = value.replace(/[\s.-]/g, '')
    const phoneRegex = /^(?:(?:\+33|0)[1-9](?:[0-9]{8}))$/
    const phoneRegexFormatted = /^0[1-9](?:[ .-]?[0-9]{2}){4}$/

    if (!phoneRegex.test(cleaned) && !phoneRegexFormatted.test(value)) {
      return 'Veuillez saisir un numéro de téléphone valide (ex: 06 12 34 56 78)'
    }
    return null
  },

  email: (value: string) => {
    if (!value) return 'Ce champ est obligatoire'
    if (value.length > 100) return 'Maximum 100 caractères autorisés'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return 'Veuillez saisir une adresse email valide'
    }
    return null
  },

  dateReservation: (value: string) => {
    if (!value) return 'Ce champ est obligatoire'
    const selectedDate = new Date(value)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      return "La date ne peut pas être antérieure à aujourd'hui"
    }

    const maxDate = new Date()
    maxDate.setFullYear(maxDate.getFullYear() + 1)
    if (selectedDate > maxDate) {
      return 'La date ne peut pas être supérieure à un an'
    }
    return null
  },

  heureReservation: (value: string) => {
    if (!value) return 'Ce champ est obligatoire'
    if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
      return 'Veuillez saisir une heure valide (format HH:MM)'
    }
    return null
  },

  lieuDepart: (value: string) => {
    if (!value) return 'Ce champ est obligatoire'
    if (value.length < 5) return 'Minimum 5 caractères requis'
    if (value.length > 200) return 'Maximum 200 caractères autorisés'
    return null
  },

  lieuArrivee: (value: string) => {
    if (!value) return 'Ce champ est obligatoire'
    if (value.length < 5) return 'Minimum 5 caractères requis'
    if (value.length > 200) return 'Maximum 200 caractères autorisés'
    return null
  },

  nombrePassagers: (value: string) => {
    if (!value) return 'Ce champ est obligatoire'
    const num = parseInt(value)
    if (isNaN(num) || num < 1 || num > 8) {
      return 'Le nombre de passagers doit être entre 1 et 8'
    }
    return null
  },

  typeService: (value: string) => {
    if (!value) return 'Ce champ est obligatoire'
    if (value.length < 1) return 'Veuillez sélectionner un type de service'
    return null
  },

  informationsComplementaires: (value: string) => {
    if (value && value.length > 500) return 'Maximum 500 caractères autorisés'
    return null
  },
}

// Validation côté client pour feedback temps réel
export const validateField = (
  fieldName: keyof ReservationFormData,
  value: string
) => {
  // Assurer que fieldValidators contient la fonction de validation
  const validator = fieldValidators[fieldName as keyof typeof fieldValidators]
  if (!validator || typeof validator !== 'function') {
    return { isValid: true, error: null }
  }

  try {
    const error = validator(value)
    return {
      isValid: error === null,
      error: error,
    }
  } catch (e) {
    console.error(`Erreur de validation pour le champ ${fieldName}:`, e)
    return { isValid: true, error: null }
  }
}
