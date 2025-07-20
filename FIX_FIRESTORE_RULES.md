# 🔧 Solución: Reglas de Firestore

## El Problema
Las reglas actuales de Firestore están bloqueando todas las escrituras:
```javascript
allow read, write: if false;  // ❌ Esto bloquea TODO
```

## Solución: Actualizar las Reglas

### Paso 1: Ir a las Reglas de Firestore
1. Ve a [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Selecciona tu proyecto `malagaparty-551b1`
3. En el menú lateral, ve a **"Firestore Database"**
4. Haz clic en la pestaña **"Rules"** (ya deberías estar ahí)

### Paso 2: Reemplazar las Reglas
1. **Borra todo el contenido** del editor de reglas
2. **Copia y pega** estas nuevas reglas:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir escritura en la colección registrations
    match /registrations/{document} {
      allow write: if true;  // Permite escritura para desarrollo
      allow read: if false;  // No permite lectura desde el cliente
    }
    
    // Bloquear todo lo demás
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### Paso 3: Publicar las Reglas
1. Haz clic en el botón **"Publish"** (azul)
2. Confirma la publicación
3. Espera unos segundos a que se actualicen

### Paso 4: Verificar que Funciona
1. Ve a tu página de diagnóstico: `http://localhost:3000/firebase-test`
2. Deberías ver: **"✅ Firebase funcionando correctamente"**
3. Prueba el formulario: `http://localhost:3000`

## Explicación de las Reglas

### ✅ Lo que permiten:
- **Escritura en `/registrations`**: Tu formulario puede guardar datos
- **Seguridad**: Solo permite escritura en la colección específica

### ❌ Lo que bloquean:
- **Lectura desde el cliente**: Los usuarios no pueden ver otros registros
- **Otras colecciones**: Protege el resto de tu base de datos

## Para Producción (Más Seguro)

Cuando estés listo para producción, puedes usar reglas más estrictas:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /registrations/{document} {
      allow write: if 
        request.resource.data.name is string &&
        request.resource.data.email is string &&
        request.resource.data.age is string;
      allow read: if false;
    }
    
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Verificación Rápida

Después de actualizar las reglas:

1. **Página de diagnóstico**: `http://localhost:3000/firebase-test`
2. **Formulario**: `http://localhost:3000`
3. **Firebase Console**: Verifica que aparezcan registros en la pestaña "Data"

## Comandos Útiles

```bash
# Reiniciar el servidor si es necesario
npm run dev

# Verificar que el servidor esté corriendo
curl http://localhost:3000/firebase-test
```

¡Con estas reglas, tu formulario debería funcionar perfectamente! 