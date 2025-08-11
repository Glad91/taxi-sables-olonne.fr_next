import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import {
  validateReservationData,
  formatPhoneNumber,
  type ReservationFormData,
} from '@/app/lib/validation'

// Configuration du transporteur Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // App Password, pas le mot de passe Gmail
    },
  })
}

// Template HTML pour l'email
const createEmailTemplate = (data: ReservationFormData) => {
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
            color: #333333;
            background-color: #f8fafc;
            padding: 20px 10px;
        }
        
        .email-container {
            max-width: 650px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0ea5e9 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="taxi-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="rgba(255,255,255,0.05)"/><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23taxi-pattern)"/></svg>') repeat;
            opacity: 0.3;
        }
        
        .header-content {
            position: relative;
            z-index: 1;
        }
        
        .header h1 {
            font-size: 32px;
            margin-bottom: 10px;
            font-weight: 800;
            letter-spacing: -0.5px;
        }
        
        .header p {
            font-size: 18px;
            opacity: 0.95;
            font-weight: 500;
        }
        
        .priority-badge {
            display: inline-block;
            background: #ef4444;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 15px;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .section {
            margin-bottom: 35px;
        }
        
        .section-title {
            font-size: 20px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 20px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e5e7eb;
        }
        
        .client-info {
            background: #f9fafb;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 25px;
        }
        
        .info-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .info-row {
            border-bottom: 1px solid #e5e7eb;
        }
        
        .info-row:last-child {
            border-bottom: none;
        }
        
        .info-label {
            padding: 8px 12px 8px 0;
            font-weight: 600;
            color: #374151;
            font-size: 14px;
            width: 30%;
        }
        
        .info-value {
            padding: 8px 0;
            color: #1f2937;
            font-size: 14px;
        }
        
        .trajet-section {
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
            border: 2px solid #a7f3d0;
            border-radius: 16px;
            padding: 30px;
            margin: 30px 0;
            position: relative;
        }
        
        .trajet-title {
            color: #065f46;
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 25px;
            text-align: center;
        }
        
        .trajet-flow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .location {
            flex: 1;
            min-width: 200px;
            text-align: center;
            padding: 20px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border: 2px solid #10b981;
        }
        
        .location-label {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            color: #059669;
            margin-bottom: 8px;
            letter-spacing: 1px;
        }
        
        .location-address {
            font-size: 16px;
            font-weight: 600;
            color: #1f2937;
            line-height: 1.4;
        }
        
        .arrow {
            font-size: 30px;
            color: #10b981;
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .contact-section {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #f59e0b;
            border-radius: 16px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
        }
        
        .contact-title {
            color: #92400e;
            font-weight: 700;
            font-size: 22px;
            margin-bottom: 20px;
        }
        
        .phone-number {
            font-size: 36px;
            font-weight: 800;
            color: #1f2937;
            margin: 15px 0;
            letter-spacing: 2px;
        }
        
        .phone-link {
            color: inherit;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .phone-link:hover {
            color: #f59e0b;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .contact-note {
            color: #92400e;
            font-size: 16px;
            font-weight: 500;
            margin-top: 15px;
        }
        
        .additional-info {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
        }
        
        .additional-title {
            color: #0c4a6e;
            font-weight: 700;
            font-size: 18px;
            margin-bottom: 15px;
        }
        
        .additional-content {
            color: #0369a1;
            font-size: 15px;
            line-height: 1.6;
            white-space: pre-wrap;
        }
        
        .footer {
            background: #374151;
            color: #d1d5db;
            padding: 30px;
            text-align: center;
        }
        
        .footer-brand {
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 15px;
        }
        
        .footer-address {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 15px;
        }
        
        .footer-contact {
            margin: 15px 0;
        }
        
        .footer-link {
            color: #fbbf24;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }
        
        .footer-link:hover {
            color: #f59e0b;
        }
        
        .timestamp {
            font-size: 12px;
            opacity: 0.8;
            margin-top: 20px;
            font-style: italic;
        }
        
        /* Responsive Design */
        @media (max-width: 600px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            
            .header, .content, .footer {
                padding: 20px 15px;
            }
            
            .info-table {
                font-size: 12px;
            }
            
            .info-label {
                width: 35%;
                font-size: 12px;
            }
            
            .info-value {
                font-size: 12px;
            }
            
            .trajet-flow {
                flex-direction: column;
            }
            
            .arrow {
                transform: rotate(90deg);
            }
            
            .phone-number {
                font-size: 28px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="header-content">
                <h1>NOUVELLE RÉSERVATION</h1>
                <p>Taxi Sables-d'Olonne</p>
                <div class="priority-badge">URGENT - À traiter immédiatement</div>
            </div>
        </div>
        
        <div class="content">
            <div class="section">
                <h2 class="section-title">Informations Client</h2>
                <div class="client-info">
                    <table class="info-table">
                        <tr class="info-row">
                            <td class="info-label">Client :</td>
                            <td class="info-value"><strong>${data.prenom} ${data.nom}</strong></td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Téléphone :</td>
                            <td class="info-value"><strong>${data.telephone}</strong></td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Email :</td>
                            <td class="info-value">${data.email}</td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Date :</td>
                            <td class="info-value">${new Date(
                              data.dateReservation
                            ).toLocaleDateString('fr-FR', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}</td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Heure :</td>
                            <td class="info-value"><strong>${data.heureReservation}</strong></td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Passagers :</td>
                            <td class="info-value">${data.nombrePassagers} personne${parseInt(data.nombrePassagers) > 1 ? 's' : ''}</td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Service :</td>
                            <td class="info-value">${data.typeService}</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="section">
                <h2 class="section-title">Détails du Trajet</h2>
                <div class="trajet-section">
                    <div class="trajet-title">Itinéraire de la course</div>
                    <div class="trajet-flow">
                        <div class="location">
                            <div class="location-label">Point de départ</div>
                            <div class="location-address">${data.lieuDepart}</div>
                        </div>
                        
                        <div class="arrow">→</div>
                        
                        <div class="location">
                            <div class="location-label">Destination</div>
                            <div class="location-address">${data.lieuArrivee}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            ${
              data.informationsComplementaires
                ? `
            <div class="section">
                <h2 class="section-title">Informations Complémentaires</h2>
                <div class="additional-info">
                    <div class="additional-title">Notes du client</div>
                    <div class="additional-content">${data.informationsComplementaires}</div>
                </div>
            </div>
            `
                : ''
            }
            
            <div class="section">
                <div class="contact-section">
                    <div class="contact-title">CONTACTER LE CLIENT IMMÉDIATEMENT</div>
                    <div class="phone-number">
                        <a href="tel:${data.telephone}" class="phone-link">${data.telephone}</a>
                    </div>
                    <div class="contact-note">Cliquez sur le numéro pour appeler directement</div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-brand">Taxi Sables-d'Olonne</div>
            <div class="footer-address">
                Place Napoléon III<br>
                85100 Les Sables-d'Olonne
            </div>
            <div class="footer-contact">
                <a href="tel:0625193143" class="footer-link">06 25 19 31 43</a> • 
                <a href="https://www.taxi-sables-olonne.fr" class="footer-link">taxi-sables-olonne.fr</a>
            </div>
            <div class="timestamp">
                Email automatique généré le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}
            </div>
        </div>
    </div>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Parse des données de la requête
    const rawData = await request.json()

    // Validation avec Zod
    const validation = validateReservationData(rawData)

    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Données invalides',
          details: validation.errors,
        },
        { status: 400 }
      )
    }

    // TypeScript assertion: data ne peut pas être null ici car validation.success === true
    const data = validation.data as ReservationFormData

    // Formatage du numéro de téléphone pour l'affichage
    const formattedPhone = formatPhoneNumber(data.telephone)

    // Utiliser le numéro formaté dans les données
    const dataWithFormattedPhone = {
      ...data,
      telephone: formattedPhone,
    }

    // Vérification des variables d'environnement
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error(
        "Variables d'environnement manquantes: GMAIL_USER ou GMAIL_APP_PASSWORD"
      )
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
      subject: `NOUVELLE RÉSERVATION TAXI - ${dataWithFormattedPhone.prenom} ${dataWithFormattedPhone.nom} - ${new Date(dataWithFormattedPhone.dateReservation).toLocaleDateString('fr-FR')} à ${dataWithFormattedPhone.heureReservation}`,
      html: createEmailTemplate(dataWithFormattedPhone),
      // Version texte de secours
      text: `
NOUVELLE RÉSERVATION TAXI

Client: ${dataWithFormattedPhone.prenom} ${dataWithFormattedPhone.nom}
Téléphone: ${dataWithFormattedPhone.telephone}
Email: ${dataWithFormattedPhone.email}
Date: ${new Date(dataWithFormattedPhone.dateReservation).toLocaleDateString('fr-FR')}
Heure: ${dataWithFormattedPhone.heureReservation}
Trajet: ${dataWithFormattedPhone.lieuDepart} → ${dataWithFormattedPhone.lieuArrivee}
Passagers: ${dataWithFormattedPhone.nombrePassagers}
Service: ${dataWithFormattedPhone.typeService}

${dataWithFormattedPhone.informationsComplementaires ? `Informations: ${dataWithFormattedPhone.informationsComplementaires}` : ''}

Contacter immédiatement: ${dataWithFormattedPhone.telephone}
      `,
    }

    // Envoyer l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      {
        success: true,
        message: 'Réservation envoyée avec succès',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)

    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi de la réservation",
        details: error instanceof Error ? error.message : 'Erreur inconnue',
      },
      { status: 500 }
    )
  }
}
