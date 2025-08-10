import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Interface pour les données de réservation
interface ReservationData {
  nom: string
  prenom: string
  telephone: string
  email: string
  dateReservation: string
  heureReservation: string
  lieuDepart: string
  lieuArrivee: string
  nombrePassagers: string
  typeService: string
  informationsComplementaires?: string
}

// Configuration du transporteur Gmail
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // App Password, pas le mot de passe Gmail
    },
  })
}

// Template HTML pour l'email
const createEmailTemplate = (data: ReservationData) => {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle Réservation Taxi</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }
        
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 8px;
            font-weight: 700;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 30px 20px;
        }
        
        .reservation-info {
            background: #f8fafc;
            border-left: 4px solid #fbbf24;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 25px;
        }
        
        .info-row {
            display: flex;
            margin-bottom: 12px;
            align-items: flex-start;
        }
        
        .info-label {
            font-weight: 600;
            color: #374151;
            min-width: 140px;
            margin-right: 12px;
        }
        
        .info-value {
            color: #1f2937;
            flex: 1;
        }
        
        .trajet-section {
            background: #ecfdf5;
            border: 1px solid #d1fae5;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .trajet-title {
            color: #065f46;
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .trajet-icon {
            margin-right: 8px;
            font-size: 20px;
        }
        
        .trajet-details {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 15px;
            align-items: center;
        }
        
        .lieu {
            text-align: center;
            padding: 12px;
            background: white;
            border-radius: 6px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .lieu-label {
            font-size: 12px;
            text-transform: uppercase;
            color: #6b7280;
            margin-bottom: 4px;
            font-weight: 500;
        }
        
        .lieu-nom {
            font-weight: 600;
            color: #1f2937;
        }
        
        .fleche {
            font-size: 24px;
            color: #059669;
            text-align: center;
        }
        
        .contact-info {
            background: #fef3c7;
            border: 1px solid #fde68a;
            border-radius: 8px;
            padding: 20px;
            margin-top: 25px;
        }
        
        .contact-title {
            color: #92400e;
            font-weight: 600;
            margin-bottom: 15px;
            font-size: 16px;
        }
        
        .phone-number {
            font-size: 24px;
            font-weight: bold;
            color: #1f2937;
            margin: 10px 0;
        }
        
        .footer {
            background: #374151;
            color: #d1d5db;
            padding: 20px;
            text-align: center;
            font-size: 14px;
        }
        
        .footer a {
            color: #fbbf24;
            text-decoration: none;
        }
        
        .urgent {
            background: #fef2f2;
            border: 1px solid #fecaca;
            color: #b91c1c;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            font-weight: 500;
        }
        
        @media (max-width: 600px) {
            .trajet-details {
                grid-template-columns: 1fr;
                gap: 10px;
            }
            
            .fleche {
                transform: rotate(90deg);
            }
            
            .info-row {
                flex-direction: column;
            }
            
            .info-label {
                margin-bottom: 4px;
                min-width: auto;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🚕 Nouvelle Réservation</h1>
            <p>Taxi Sables-d'Olonne</p>
        </div>
        
        <div class="content">
            <div class="urgent">
                ⚡ <strong>Réservation urgente</strong> - Merci de confirmer rapidement au client
            </div>
            
            <div class="reservation-info">
                <h2 style="color: #1f2937; margin-bottom: 20px; font-size: 20px;">
                    📋 Informations Client
                </h2>
                
                <div class="info-row">
                    <span class="info-label">👤 Nom complet :</span>
                    <span class="info-value">${data.prenom} ${data.nom}</span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">📞 Téléphone :</span>
                    <span class="info-value"><strong>${data.telephone}</strong></span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">📧 Email :</span>
                    <span class="info-value">${data.email}</span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">🗓️ Date :</span>
                    <span class="info-value"><strong>${new Date(data.dateReservation).toLocaleDateString('fr-FR', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</strong></span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">🕐 Heure :</span>
                    <span class="info-value"><strong>${data.heureReservation}</strong></span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">👥 Passagers :</span>
                    <span class="info-value">${data.nombrePassagers} personne${parseInt(data.nombrePassagers) > 1 ? 's' : ''}</span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">🚖 Service :</span>
                    <span class="info-value"><strong>${data.typeService}</strong></span>
                </div>
            </div>
            
            <div class="trajet-section">
                <div class="trajet-title">
                    <span class="trajet-icon">🗺️</span>
                    Détails du Trajet
                </div>
                
                <div class="trajet-details">
                    <div class="lieu">
                        <div class="lieu-label">Départ</div>
                        <div class="lieu-nom">${data.lieuDepart}</div>
                    </div>
                    
                    <div class="fleche">→</div>
                    
                    <div class="lieu">
                        <div class="lieu-label">Arrivée</div>
                        <div class="lieu-nom">${data.lieuArrivee}</div>
                    </div>
                </div>
            </div>
            
            ${data.informationsComplementaires ? `
            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #0c4a6e; margin-bottom: 10px; font-size: 16px;">
                    💬 Informations Complémentaires
                </h3>
                <p style="color: #1e40af; margin: 0; white-space: pre-wrap;">${data.informationsComplementaires}</p>
            </div>
            ` : ''}
            
            <div class="contact-info">
                <div class="contact-title">
                    📞 Contacter le client immédiatement
                </div>
                <div class="phone-number">
                    <a href="tel:${data.telephone}" style="color: inherit; text-decoration: none;">
                        ${data.telephone}
                    </a>
                </div>
                <div style="margin-top: 10px; color: #92400e;">
                    Cliquez sur le numéro pour appeler directement
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>
                <strong>Taxi Sables-d'Olonne</strong> • Place Napoléon III, 85100 Les Sables-d'Olonne<br>
                📞 <a href="tel:0625193143">06 25 19 31 43</a> • 
                🌐 <a href="https://taxi-sables-olonne.fr">taxi-sables-olonne.fr</a>
            </p>
            <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">
                Email automatique généré le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}
            </p>
        </div>
    </div>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Parse des données de la requête
    const data: ReservationData = await request.json()
    
    // Validation basique des données
    const requiredFields = ['nom', 'prenom', 'telephone', 'email', 'dateReservation', 'heureReservation', 'lieuDepart', 'lieuArrivee']
    const missingFields = requiredFields.filter(field => !data[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Champs manquants: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Vérification des variables d'environnement
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Variables d\'environnement manquantes: GMAIL_USER ou GMAIL_APP_PASSWORD')
      return NextResponse.json(
        { error: 'Configuration email manquante' },
        { status: 500 }
      )
    }

    // Créer le transporteur
    const transporter = createTransporter()

    // Préparer l'email
    const mailOptions = {
      from: `"Site Web Taxi" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Email de réception des réservations
      subject: `🚕 NOUVELLE RÉSERVATION - ${data.prenom} ${data.nom} - ${new Date(data.dateReservation).toLocaleDateString('fr-FR')} à ${data.heureReservation}`,
      html: createEmailTemplate(data),
      // Version texte de secours
      text: `
NOUVELLE RÉSERVATION TAXI

Client: ${data.prenom} ${data.nom}
Téléphone: ${data.telephone}
Email: ${data.email}
Date: ${new Date(data.dateReservation).toLocaleDateString('fr-FR')}
Heure: ${data.heureReservation}
Trajet: ${data.lieuDepart} → ${data.lieuArrivee}
Passagers: ${data.nombrePassagers}
Service: ${data.typeService}

${data.informationsComplementaires ? `Informations: ${data.informationsComplementaires}` : ''}

Contacter immédiatement: ${data.telephone}
      `,
    }

    // Envoyer l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Réservation envoyée avec succès' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de la réservation',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    )
  }
}