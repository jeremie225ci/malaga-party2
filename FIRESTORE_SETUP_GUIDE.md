# 🔥 Guía Visual: Configurar Firestore Database

## El Problema
El error "Missing or insufficient permissions" indica que **Firestore Database no está habilitado** en tu proyecto de Firebase.

## Solución Paso a Paso

### Paso 1: Acceder a Firebase Console
1. Ve a [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Selecciona tu proyecto `malagaparty-551b1`

### Paso 2: Habilitar Firestore Database
1. En el menú lateral izquierdo, busca **"Firestore Database"**
2. Haz clic en **"Firestore Database"**
3. Verás un botón azul **"Crear base de datos"** - haz clic en él

### Paso 3: Configurar la Base de Datos
1. **Selecciona el modo de seguridad:**
   - ✅ **"Comenzar en modo de prueba"** (recomendado para desarrollo)
   - ❌ No selecciones "Bloquear todo el acceso"

2. **Elige la ubicación:**
   - Selecciona una región cercana a tus usuarios
   - Recomendado: `europe-west3` (Frankfurt) o `europe-west1` (Bélgica)
   - Haz clic en **"Siguiente"**

### Paso 4: Finalizar Configuración
1. Revisa la configuración
2. Haz clic en **"Habilitar"**
3. Espera unos minutos a que se complete la configuración

## Verificar que Funciona

### Opción 1: Usar el Diagnóstico Integrado
1. Ve a tu formulario: `http://localhost:3000`
2. Haz clic en el enlace **"🔧 Diagnóstico de Firebase"** al final del formulario
3. La página te dirá si todo está funcionando correctamente

### Opción 2: Probar el Formulario
1. Completa el formulario con datos de prueba
2. Haz clic en **"Confirmar mi inscripción"**
3. Deberías ver una notificación verde de éxito

### Opción 3: Verificar en Firebase Console
1. Ve a **Firestore Database** en la consola
2. Deberías ver una colección llamada `registrations`
3. Los registros aparecerán en tiempo real

## Reglas de Seguridad (Opcional)

Una vez que Firestore esté funcionando, puedes configurar reglas de seguridad más estrictas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /registrations/{document} {
      allow write: if true; // Permite escritura
      allow read: if false; // No permite lectura desde el cliente
    }
  }
}
```

## Solución de Problemas Comunes

### Error: "Firestore is not enabled"
- **Solución:** Sigue los pasos 1-4 de arriba para habilitar Firestore

### Error: "Permission denied"
- **Solución:** Asegúrate de haber seleccionado "Comenzar en modo de prueba"

### Error: "Database not found"
- **Solución:** Espera unos minutos más a que se complete la configuración

### El formulario no envía datos
- **Solución:** Verifica que estés en la página de diagnóstico y que muestre "✅ Firebase funcionando correctamente"

## Comandos Útiles

```bash
# Reiniciar el servidor de desarrollo
npm run dev

# Verificar que el servidor esté corriendo
curl http://localhost:3000
```

## Contacto

Si sigues teniendo problemas después de seguir esta guía:
1. Usa la página de diagnóstico: `http://localhost:3000/firebase-test`
2. Copia los logs de error
3. Verifica que hayas completado todos los pasos de configuración 