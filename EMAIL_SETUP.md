# 📧 Configuración de Emails de Confirmación

## Servicio de Email: Resend

Estamos usando **Resend** para enviar emails de confirmación automáticamente cuando alguien se registra.

## Configuración Paso a Paso

### 1. Crear cuenta en Resend
1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Obtener API Key
1. En el dashboard de Resend, ve a **API Keys**
2. Haz clic en **Create API Key**
3. Dale un nombre (ej: "Malaga Party")
4. Copia la API key que se genera

### 3. Configurar Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Firebase Configuration (ya configurado)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBaT6Q1y8tYoSwjCKbSs52fgKpcsr1KhPs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=malagaparty-551b1.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=malagaparty-551b1
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=malagaparty-551b1.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1018361991383
NEXT_PUBLIC_FIREBASE_APP_ID=1:1018361991383:web:31e2dd8a00019171f7a092
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-GQJBPXJKV2
```

### 4. Verificar Dominio (Opcional)
Para usar tu propio dominio en lugar de `noreply@malagaparty.com`:

1. En Resend, ve a **Domains**
2. Agrega tu dominio
3. Sigue las instrucciones para verificar DNS
4. Actualiza el `from` en `app/api/send-confirmation/route.ts`

## Funcionalidades del Email

### ✅ Lo que incluye:
- **Diseño atractivo** con gradientes y emojis
- **Saludo personalizado** con el nombre del usuario
- **Confirmación de inscripción**
- **Información sobre próximos pasos**
- **Enlaces a redes sociales**
- **Diseño responsive** (se ve bien en móvil)

### 📧 Contenido del Email:
- Título: "¡Confirmación de Inscripción - Malaga Party! 🎉"
- Saludo personalizado: "¡Hola [nombre]! 👋"
- Confirmación de inscripción
- Información sobre lo que recibirán próximamente
- Enlaces a redes sociales

## Pruebas

### 1. Probar el Email
1. Completa el formulario de registro
2. Verifica que recibes el email de confirmación
3. Revisa que el diseño se ve bien en diferentes clientes de email

### 2. Verificar en Firebase
1. Ve a Firestore Database
2. Verifica que el registro se guardó correctamente
3. Los emails se envían automáticamente después de guardar

## Plan Gratuito de Resend

- **3,000 emails/mes** gratuitos
- **100 emails/día** en desarrollo
- **Soporte para dominios personalizados**
- **Analytics y tracking**

## Solución de Problemas

### Error: "API key not found"
- Verifica que `RESEND_API_KEY` esté en `.env.local`
- Reinicia el servidor: `npm run dev`

### Error: "Domain not verified"
- Usa el dominio por defecto de Resend
- O verifica tu dominio en el dashboard

### Email no llega
- Revisa la carpeta de spam
- Verifica que el email esté bien escrito
- Revisa los logs del servidor

## Personalización

### Cambiar el Diseño
Edita el HTML en `app/api/send-confirmation/route.ts`

### Cambiar el Contenido
Modifica el texto en la función `POST`

### Agregar Más Información
Puedes incluir:
- Fecha del evento
- Código de descuento
- Información de contacto
- FAQ

## Comandos Útiles

```bash
# Reiniciar servidor después de cambiar variables de entorno
npm run dev

# Verificar que las variables están cargadas
echo $RESEND_API_KEY
```

¡Con esta configuración, cada persona que se registre recibirá un email de confirmación atractivo y profesional! 