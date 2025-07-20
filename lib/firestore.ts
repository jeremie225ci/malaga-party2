import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export interface RegistrationData {
  name: string;
  email: string;
  phone?: string;
  age: string;
  group?: string;
  message?: string;
  createdAt?: any;
}

export interface FormData extends RegistrationData {
  confirmEmail: string;
}

export const saveRegistration = async (data: RegistrationData) => {
  try {
    // Guardar en Firestore
    const docRef = await addDoc(collection(db, "registrations"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    
    // Enviar email de confirmación
    try {
      const emailResponse = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
        }),
      });
      
      if (!emailResponse.ok) {
        console.warn('Error al enviar email de confirmación:', await emailResponse.text());
      }
    } catch (emailError) {
      console.warn('Error al enviar email de confirmación:', emailError);
    }
    
    return {
      success: true,
      id: docRef.id,
      message: "Registro guardado exitosamente y email de confirmación enviado"
    };
  } catch (error) {
    console.error("Error al guardar el registro:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido"
    };
  }
}; 