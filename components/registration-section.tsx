"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Loader2 } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { useRegistration } from "@/hooks/use-registration"
import { FormData } from "@/lib/firestore"
import { Notification } from "@/components/ui/notification"

export default function RegistrationSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    age: "",
    group: "",
    message: "",
  })
  const { t } = useTranslations()
  const { isLoading, notification, submitRegistration, clearNotification, setNotification } = useRegistration()

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validar que los emails coincidan
    if (formData.email !== formData.confirmEmail) {
      setNotification({
        type: "error",
        message: "Los emails no coinciden. Por favor, verifica que ambos sean iguales."
      });
      return;
    }
    
    const result = await submitRegistration(formData)
    
    if (result.success) {
      // Reset form
      setFormData({
        name: "",
        email: "",
        confirmEmail: "",
        phone: "",
        age: "",
        group: "",
        message: "",
      })
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }



  return (
    <>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={clearNotification}
        />
      )}
      <section id="registration" className="py-16 px-4 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            {t("registration.title")}
          </h2>
          <p className="text-gray-300">{t("registration.subtitle")}</p>
        </div>



        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              {t("registration.form.name.label")} *
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="bg-gray-900/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              placeholder={t("registration.form.name.placeholder")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              {t("registration.form.email.label")} *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="bg-gray-900/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              placeholder={t("registration.form.email.placeholder")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmEmail" className="text-white">
              Confirmar Email *
            </Label>
            <Input
              id="confirmEmail"
              type="email"
              required
              value={formData.confirmEmail}
              onChange={(e) => handleInputChange("confirmEmail", e.target.value)}
              className={`bg-gray-900/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 ${
                formData.confirmEmail && formData.email !== formData.confirmEmail 
                  ? 'border-red-500' 
                  : formData.confirmEmail && formData.email === formData.confirmEmail 
                    ? 'border-green-500' 
                    : ''
              }`}
              placeholder="Repite tu email para confirmar"
            />
            {formData.confirmEmail && formData.email !== formData.confirmEmail && (
              <p className="text-red-400 text-sm">Los emails no coinciden</p>
            )}
            {formData.confirmEmail && formData.email === formData.confirmEmail && (
              <p className="text-green-400 text-sm">✓ Emails coinciden</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              {t("registration.form.phone.label")}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="bg-gray-900/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              placeholder={t("registration.form.phone.placeholder")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age" className="text-white">
              {t("registration.form.age.label")} *
            </Label>
            <Select onValueChange={(value) => handleInputChange("age", value)}>
              <SelectTrigger className="bg-gray-900/50 border-purple-500/30 text-white">
                <SelectValue placeholder={t("registration.form.age.placeholder")} />
              </SelectTrigger>
              <SelectContent className="bg-white border-purple-500/30 text-black">
                <SelectItem value="18-25">{t("registration.form.age.options.18-25")}</SelectItem>
                <SelectItem value="26-35">{t("registration.form.age.options.26-35")}</SelectItem>
                <SelectItem value="36-45">{t("registration.form.age.options.36-45")}</SelectItem>
                <SelectItem value="45+">{t("registration.form.age.options.45+")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="group" className="text-white">
              {t("registration.form.group.label")}
            </Label>
            <Select onValueChange={(value) => handleInputChange("group", value)}>
              <SelectTrigger className="bg-gray-900/50 border-purple-500/30 text-white">
                <SelectValue placeholder={t("registration.form.group.placeholder")} />
              </SelectTrigger>
              <SelectContent className="bg-white border-purple-500/30 text-black">
                <SelectItem value="1">{t("registration.form.group.options.1")}</SelectItem>
                <SelectItem value="2">{t("registration.form.group.options.2")}</SelectItem>
                <SelectItem value="3-5">{t("registration.form.group.options.3-5")}</SelectItem>
                <SelectItem value="6+">{t("registration.form.group.options.6+")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              {t("registration.form.message.label")}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="bg-gray-900/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 resize-none"
              placeholder={t("registration.form.message.placeholder")}
              rows={3}
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              t("registration.form.submit")
            )}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">{t("registration.form.required")}</p>
        

      </div>
    </section>
    </>
  )
}
