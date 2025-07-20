// Script para verificar la configuración de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaT6Q1y8tYoSwjCKbSs52fgKpcsr1KhPs",
  authDomain: "malagaparty-551b1.firebaseapp.com",
  projectId: "malagaparty-551b1",
  storageBucket: "malagaparty-551b1.firebasestorage.app",
  messagingSenderId: "1018361991383",
  appId: "1:1018361991383:web:31e2dd8a00019171f7a092",
  measurementId: "G-GQJBPXJKV2"
};

console.log("🔍 Verificando configuración de Firebase...");

try {
  // Inicializar Firebase
  const app = initializeApp(firebaseConfig);
  console.log("✅ Firebase inicializado correctamente");
  
  // Inicializar Firestore
  const db = getFirestore(app);
  console.log("✅ Firestore inicializado correctamente");
  
  // Intentar escribir un documento de prueba
  console.log("🧪 Intentando escribir documento de prueba...");
  
  const testData = {
    test: true,
    message: "Prueba de conexión",
    timestamp: serverTimestamp()
  };
  
  addDoc(collection(db, "test"), testData)
    .then((docRef) => {
      console.log("✅ Documento de prueba creado con ID:", docRef.id);
      console.log("🎉 ¡Firebase está configurado correctamente!");
    })
    .catch((error) => {
      console.error("❌ Error al escribir documento:", error);
      console.log("\n🔧 Posibles soluciones:");
      console.log("1. Ve a https://console.firebase.google.com/");
      console.log("2. Selecciona tu proyecto 'malagaparty-551b1'");
      console.log("3. Ve a 'Firestore Database' en el menú lateral");
      console.log("4. Haz clic en 'Crear base de datos'");
      console.log("5. Selecciona 'Comenzar en modo de prueba'");
      console.log("6. Elige una ubicación (ej: europe-west3)");
    });
    
} catch (error) {
  console.error("❌ Error al inicializar Firebase:", error);
} 