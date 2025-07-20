import { CheckCircle, XCircle, X } from "lucide-react"
import { Button } from "./button"

interface NotificationProps {
  type: "success" | "error"
  message: string
  onClose: () => void
}

export function Notification({ type, message, onClose }: NotificationProps) {
  const isSuccess = type === "success"
  
  return (
    <div className={`fixed top-4 right-4 z-50 max-w-sm w-full p-4 rounded-lg shadow-lg border ${
      isSuccess 
        ? "bg-green-900/90 border-green-500/30 text-green-100" 
        : "bg-red-900/90 border-red-500/30 text-red-100"
    }`}>
      <div className="flex items-start gap-3">
        {isSuccess ? (
          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
        )}
        <div className="flex-1">
          <p className="text-sm font-medium">
            {isSuccess ? "¡Éxito!" : "Error"}
          </p>
          <p className="text-sm mt-1">{message}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className={`h-6 w-6 p-0 hover:bg-opacity-20 ${
            isSuccess ? "hover:bg-green-400" : "hover:bg-red-400"
          }`}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
} 