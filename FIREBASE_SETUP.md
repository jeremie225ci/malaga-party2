# Configuración de Firebase para Malaga Party

## Pasos para configurar Firebase

### 1. Instalar Firebase
Firebase ya está instalado en el proyecto. Si necesitas reinstalarlo:
```bash
npm install firebase --legacy-peer-deps
```

### 2. Configurar Firestore Database

1. Ve a la [Consola de Firebase](https://console.firebase.google.com/)
2. Selecciona tu proyecto `malagaparty-551b1`
3. En el menú lateral, ve a **Firestore Database**
4. Haz clic en **Crear base de datos**
5. Selecciona **Comenzar en modo de prueba** (para desarrollo)
6. Elige la ubicación más cercana a tus usuarios (ej: europe-west3)

### 3. Configurar Reglas de Seguridad

En Firestore Database > Reglas, actualiza las reglas para permitir escrituras:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir escritura en la colección registrations
    match /registrations/{document} {
      allow write: if true; // Para desarrollo - cambiar en producción
      allow read: if false; // No permitir lectura desde el cliente
    }
  }
}
```

### 4. Variables de Entorno (Opcional)

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBaT6Q1y8tYoSwjCKbSs52fgKpcsr1KhPs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=malagaparty-551b1.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=malagaparty-551b1
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=malagaparty-551b1.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1018361991383
NEXT_PUBLIC_FIREBASE_APP_ID=1:1018361991383:web:31e2dd8a00019171f7a092
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-GQJBPXJKV2
```

### 5. Estructura de Datos

Los registros se guardarán en la colección `registrations` con la siguiente estructura:

```javascript
{
  name: "Nombre del usuario",
  email: "email@ejemplo.com",
  phone: "123456789", // opcional
  age: "18-25",
  group: "1", // opcional
  message: "Mensaje opcional",
  createdAt: Timestamp // automático
}
```

### 6. Funcionalidades Implementadas

- ✅ Formulario de registro conectado a Firestore
- ✅ Validación de campos requeridos
- ✅ Notificaciones de éxito y error
- ✅ Estado de carga durante el envío
- ✅ Reset automático del formulario después del envío exitoso
- ✅ Manejo de errores robusto

### 7. Próximos Pasos para Producción

1. **Seguridad**: Actualizar las reglas de Firestore para producción
2. **Validación**: Agregar validación del lado del servidor
3. **Rate Limiting**: Implementar límites de envío por IP
4. **Backup**: Configurar backups automáticos de Firestore
5. **Monitoreo**: Configurar alertas y monitoreo

### 8. Comandos Útiles

```bash
# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

### 9. Verificar Funcionamiento

1. Ejecuta `npm run dev`
2. Ve a `http://localhost:3000`
3. Completa el formulario de registro
4. Verifica en la consola de Firebase que el registro se guardó correctamente 