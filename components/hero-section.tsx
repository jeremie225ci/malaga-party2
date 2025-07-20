"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t, isLoading } = useTranslations()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })
  }

  if (isLoading) {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="text-white text-xl">Loading...</div>
      </section>
    )
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/party-w9kf34ukB7ANUlt6tX7AwsFRe4c3ql.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-blue-900/30 to-black/70" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
          {t("hero.title")}
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">{t("hero.subtitle")}</h2>
        <p className="text-xl md:text-2xl mb-8 text-cyan-300 font-light">{t("hero.description")}</p>
        <Button
          onClick={scrollToRegistration}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          {t("hero.cta")}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  )
}
