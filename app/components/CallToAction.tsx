import Link from 'next/link'
import { Phone, MapPin, Calendar } from 'lucide-react'

interface CallToActionProps {
  showReservation?: boolean
  showItinerary?: boolean
  className?: string
}

export default function CallToAction({ 
  showReservation = true, 
  showItinerary = true, 
  className = "" 
}: CallToActionProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a
        href="tel:0625193143"
        className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2 shadow-lg"
      >
        <Phone className="h-5 w-5" />
        <span>📞 Appeler maintenant</span>
      </a>
      
      {showItinerary && (
        <a
          href="https://maps.google.com/maps?daddr=Place+Napol%C3%A9on+III,+85100+Les+Sables-d'Olonne"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2 shadow-lg"
        >
          <MapPin className="h-5 w-5" />
          <span>📍 Itinéraire</span>
        </a>
      )}
      
      {showReservation && (
        <Link
          href="/reservation"
          className="bg-taxi-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-taxi-orange hover:text-white transition-colors flex items-center justify-center space-x-2 shadow-lg"
        >
          <Calendar className="h-5 w-5" />
          <span>Réserver en ligne</span>
        </Link>
      )}
    </div>
  )
}