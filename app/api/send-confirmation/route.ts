import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son requeridos' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Malaga Party <info@malagaparty.com>',
      to: [email],
      subject: '¡Confirmación de Inscripción - Malaga Party! 🎉',
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmación de Inscripción</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              margin: 0;
              padding: 0;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              min-height: 100vh;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 20px 40px rgba(0,0,0,0.1);
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 40px 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 2.5em;
              font-weight: bold;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            .header .subtitle {
              font-size: 1.2em;
              margin-top: 10px;
              opacity: 0.9;
            }
            .content {
              padding: 40px 30px;
              text-align: center;
            }
            .greeting {
              font-size: 1.5em;
              color: #333;
              margin-bottom: 20px;
            }
            .message {
              font-size: 1.1em;
              color: #666;
              line-height: 1.6;
              margin-bottom: 30px;
            }
            .highlight {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 20px;
              border-radius: 15px;
              margin: 30px 0;
              font-weight: bold;
              font-size: 1.1em;
            }
            .footer {
              background: #f8f9fa;
              padding: 30px;
              text-align: center;
              color: #666;
            }
            .social-links {
              margin-top: 20px;
            }
            .social-links a {
              display: inline-block;
              margin: 0 10px;
              color: #667eea;
              text-decoration: none;
              font-weight: bold;
            }
            .emoji {
              font-size: 1.5em;
              margin: 0 5px;
            }
            .party-emoji {
              font-size: 2em;
              margin: 0 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 ¡Malaga Party! 🎉</h1>
              <div class="subtitle">La noche más loca está por venir</div>
            </div>
            
            <div class="content">
              <div class="greeting">
                ¡Hola <strong>${name}</strong>! 👋
              </div>
              
              <div class="message">
                ¡Excelente decisión! Tu inscripción para <strong>Malaga Party</strong> ha sido confirmada exitosamente.
                <br><br>
                Estamos preparando la noche más épica de tu vida, y tú ya tienes tu lugar reservado.
              </div>
              
              <div class="highlight">
                🎵 Música increíble 🎵
                <br>
                🍹 Bebidas especiales 🍹
                <br>
                💃 Baile sin parar 💃
                <br>
                🌟 Momentos inolvidables 🌟
              </div>
              
              <div class="message">
                <strong>Pronto recibirás más información sobre:</strong>
                <br><br>
                📍 <strong>Ubicación exacta del evento</strong><br>
                🕐 <strong>Horario de inicio</strong><br>
                🎭 <strong>Actividades especiales</strong><br>
                🚗 <strong>Información de transporte</strong>
              </div>
              
              <div class="message">
                Mientras tanto, prepárate para la noche más loca de tu vida. 
                ¡No olvides traer tu mejor energía y ganas de pasarlo increíble!
              </div>
            </div>
            
            <div class="footer">
              <div style="font-size: 1.2em; margin-bottom: 15px;">
                <span class="party-emoji">🎊</span>
                ¡Nos vemos en la fiesta!
                <span class="party-emoji">🎊</span>
              </div>
              
              <div style="color: #999; font-size: 0.9em;">
                Si tienes alguna pregunta, no dudes en contactarnos.
                <br>
                ¡Gracias por ser parte de esta experiencia única!
              </div>
              
              <div class="social-links">
                <a href="#">📱 Instagram</a>
                <a href="#">📘 Facebook</a>
                <a href="#">📧 Contacto</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    })

    if (error) {
      console.error('Error enviando email:', error)
      return NextResponse.json(
        { error: 'Error al enviar el email de confirmación' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error en la API:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
} 