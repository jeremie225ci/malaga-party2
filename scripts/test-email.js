// Script para probar el envío de emails
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function testEmail() {
  console.log('🧪 Probando envío de email...')
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Malaga Party <noreply@malagaparty.com>',
      to: ['tu-email@ejemplo.com'], // Cambia por tu email real
      subject: 'Prueba de Email - Malaga Party',
      html: `
        <h1>🎉 ¡Prueba exitosa!</h1>
        <p>Si recibes este email, significa que Resend está configurado correctamente.</p>
        <p>Tu API key funciona perfectamente.</p>
      `
    })

    if (error) {
      console.error('❌ Error:', error)
      return
    }

    console.log('✅ Email enviado exitosamente!')
    console.log('📧 ID del email:', data.id)
    console.log('🎉 Revisa tu bandeja de entrada')
    
  } catch (error) {
    console.error('❌ Error al enviar email:', error)
  }
}

testEmail() 