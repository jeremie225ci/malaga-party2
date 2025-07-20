import { useState } from "react";
import { saveRegistration, RegistrationData, FormData } from "@/lib/firestore";

export const useRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const submitRegistration = async (data: FormData) => {
    setIsLoading(true);
    
    try {
      // Extraer solo los datos necesarios para Firebase (sin confirmEmail)
      const { confirmEmail, ...registrationData } = data;
      const result = await saveRegistration(registrationData);
      
      if (result.success) {
        setNotification({
          type: "success",
          message: "¡Registro enviado exitosamente! Revisa tu email para la confirmación."
        });
        return { success: true };
      } else {
        setNotification({
          type: "error",
          message: result.error || "Error al enviar el formulario"
        });
        return { success: false, error: result.error };
      }
    } catch (err) {
      const errorMessage = "Error inesperado al enviar el formulario";
      setNotification({
        type: "error",
        message: errorMessage
      });
      console.error("Error en submitRegistration:", err);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const clearNotification = () => {
    setNotification(null);
  };

  const setNotificationManually = (notification: { type: "success" | "error"; message: string; } | null) => {
    setNotification(notification);
  };

  return {
    isLoading,
    notification,
    submitRegistration,
    clearNotification,
    setNotification: setNotificationManually,
  };
}; 