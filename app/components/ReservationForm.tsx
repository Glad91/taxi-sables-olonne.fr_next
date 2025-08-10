'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, Phone, User, Mail, Car, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react'
import { validateField, serviceTypes, type ReservationFormData } from '@/app/lib/validation'

interface FormErrors {
  [key: string]: string
}

interface FormState {
  isSubmitting: boolean
  isSubmitted: boolean
  errors: FormErrors
  generalError: string
  successMessage: string
}

const initialFormState: FormState = {
  isSubmitting: false,
  isSubmitted: false,
  errors: {},
  generalError: '',
  successMessage: ''
}

const initialFormData: ReservationFormData = {
  nom: '',
  prenom: '',
  telephone: '',
  email: '',
  dateReservation: '',
  heureReservation: '',
  lieuDepart: '',
  lieuArrivee: '',
  nombrePassagers: '1',
  typeService: '',
  informationsComplementaires: ''
}

export default function ReservationForm() {
  const [formData, setFormData] = useState<ReservationFormData>(initialFormData)
  const [formState, setFormState] = useState<FormState>(initialFormState)

  // Fonction pour valider un champ en temps réel
  const validateFieldRealTime = (fieldName: keyof ReservationFormData, value: string) => {
    const { isValid, error } = validateField(fieldName, value)
    
    setFormState(prev => ({
      ...prev,
      errors: {
        ...prev.errors,
        [fieldName]: isValid ? '' : (error || 'Erreur de validation')
      }
    }))
    
    return isValid
  }

  // Gestion des changements de champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Validation en temps réel avec délai pour éviter trop d'appels
    setTimeout(() => {
      validateFieldRealTime(name as keyof ReservationFormData, value)
    }, 300)
  }

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      generalError: '',
      successMessage: ''
    }))

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        if (result.details) {
          // Erreurs de validation Zod
          setFormState(prev => ({
            ...prev,
            errors: result.details,
            generalError: 'Veuillez corriger les erreurs ci-dessous'
          }))
        } else {
          // Erreur générale
          setFormState(prev => ({
            ...prev,
            generalError: result.error || 'Une erreur est survenue'
          }))
        }
      } else {
        // Succès
        setFormState(prev => ({
          ...prev,
          isSubmitted: true,
          successMessage: 'Votre réservation a été envoyée avec succès ! Nous vous contacterons rapidement.'
        }))
        
        // Reset du formulaire
        setFormData(initialFormData)
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setFormState(prev => ({
        ...prev,
        generalError: 'Erreur de connexion. Veuillez réessayer.'
      }))
    } finally {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false
      }))
    }
  }

  // Génération des options de date (aujourd'hui + 365 jours)
  const generateDateOptions = () => {
    const today = new Date()
    const dates = []
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date.toISOString().split('T')[0])
    }
    
    return dates
  }

  // Si le formulaire a été soumis avec succès
  if (formState.isSubmitted && formState.successMessage) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Réservation envoyée !
        </h3>
        <p className="text-green-700 mb-6">
          {formState.successMessage}
        </p>
        <button
          onClick={() => setFormState(initialFormState)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Faire une nouvelle réservation
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">
        Formulaire de réservation
      </h2>

      {/* Erreur générale */}
      {formState.generalError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
            <p className="text-red-700">{formState.generalError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informations personnelles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="prenom" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 mr-1" />
              Prénom *
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                formState.errors.prenom ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Votre prénom"
              required
            />
            {formState.errors.prenom && (
              <p className="text-red-600 text-sm mt-1">{formState.errors.prenom}</p>
            )}
          </div>

          <div>
            <label htmlFor="nom" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 mr-1" />
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                formState.errors.nom ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Votre nom"
              required
            />
            {formState.errors.nom && (
              <p className="text-red-600 text-sm mt-1">{formState.errors.nom}</p>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="telephone" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4 mr-1" />
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                formState.errors.telephone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="06 12 34 56 78"
              required
            />
            {formState.errors.telephone && (
              <p className="text-red-600 text-sm mt-1">{formState.errors.telephone}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Mail className="h-4 w-4 mr-1" />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                formState.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="votre@email.com"
              required
            />
            {formState.errors.email && (
              <p className="text-red-600 text-sm mt-1">{formState.errors.email}</p>
            )}
          </div>
        </div>

        {/* Date et heure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="dateReservation" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              Date *
            </label>
            <input
              type="date"
              id="dateReservation"
              name="dateReservation"
              value={formData.dateReservation}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              max={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                formState.errors.dateReservation ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {formState.errors.dateReservation && (
              <p className="text-red-600 text-sm mt-1">{formState.errors.dateReservation}</p>
            )}
          </div>

          <div>
            <label htmlFor="heureReservation" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Clock className="h-4 w-4 mr-1" />
              Heure *
            </label>
            <input
              type="time"
              id="heureReservation"
              name="heureReservation"
              value={formData.heureReservation}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                formState.errors.heureReservation ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {formState.errors.heureReservation && (
              <p className="text-red-600 text-sm mt-1">{formState.errors.heureReservation}</p>
            )}
          </div>
        </div>

        {/* Trajet */}
        <div className="space-y-6">
          <div>
            <label htmlFor="lieuDepart" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              Lieu de départ *
            </label>
            <input
              type="text"
              id="lieuDepart"
              name="lieuDepart"
              value={formData.lieuDepart}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                formState.errors.lieuDepart ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="ex: Place Napoléon III, Les Sables-d'Olonne"
              required
            />
            {formState.errors.lieuDepart && (
              <p className="text-red-600 text-sm mt-1">{formState.errors.lieuDepart}</p>
            )}
          </div>

          <div>
            <label htmlFor="lieuArrivee" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              Lieu d'arrivée *
            </label>
            <input
              type="text"
              id="lieuArrivee"
              name="lieuArrivee"
              value={formData.lieuArrivee}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                formState.errors.lieuArrivee ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="ex: Aéroport Nantes Atlantique"
              required
            />
            {formState.errors.lieuArrivee && (
              <p className="text-red-600 text-sm mt-1">{formState.errors.lieuArrivee}</p>
            )}
          </div>
        </div>

        {/* Service et passagers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombrePassagers" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 mr-1" />
              Nombre de passagers *
            </label>
            <select
              id="nombrePassagers"
              name="nombrePassagers"
              value={formData.nombrePassagers}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                formState.errors.nombrePassagers ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num.toString()}>
                  {num} passager{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
            {formState.errors.nombrePassagers && (
              <p className="text-red-600 text-sm mt-1">{formState.errors.nombrePassagers}</p>
            )}
          </div>

          <div>
            <label htmlFor="typeService" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Car className="h-4 w-4 mr-1" />
              Type de service *
            </label>
            <select
              id="typeService"
              name="typeService"
              value={formData.typeService}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                formState.errors.typeService ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            >
              <option value="">Sélectionnez un service</option>
              {serviceTypes.map(service => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {formState.errors.typeService && (
              <p className="text-red-600 text-sm mt-1">{formState.errors.typeService}</p>
            )}
          </div>
        </div>

        {/* Informations complémentaires */}
        <div>
          <label htmlFor="informationsComplementaires" className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="h-4 w-4 mr-1" />
            Informations complémentaires
          </label>
          <textarea
            id="informationsComplementaires"
            name="informationsComplementaires"
            value={formData.informationsComplementaires}
            onChange={handleChange}
            rows={4}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              formState.errors.informationsComplementaires ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Bagages volumineux, numéro de vol, instructions particulières..."
          />
          {formState.errors.informationsComplementaires && (
            <p className="text-red-600 text-sm mt-1">{formState.errors.informationsComplementaires}</p>
          )}
        </div>

        {/* Bouton de soumission */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formState.isSubmitting ? (
              <>
                <div className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                Envoi en cours...
              </>
            ) : (
              'Envoyer la réservation'
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Note :</strong> Une fois envoyé, ce formulaire génère un email automatique. 
          Nous vous contacterons rapidement pour confirmer votre réservation.
        </p>
      </div>
    </div>
  )
}