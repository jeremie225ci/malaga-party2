"use client"

import { useState, useEffect } from "react"

type TranslationKey = string
type Translations = Record<string, any>

const supportedLanguages = ["fr", "en", "es"]
const defaultLanguage = "fr"

export function useTranslations() {
  const [translations, setTranslations] = useState<Translations>({})
  const [currentLanguage, setCurrentLanguage] = useState<string>(defaultLanguage)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const detectLanguage = () => {
      if (typeof window !== "undefined") {
        const browserLang = navigator.language.split("-")[0]
        return supportedLanguages.includes(browserLang) ? browserLang : defaultLanguage
      }
      return defaultLanguage
    }

    const loadTranslations = async () => {
      const language = detectLanguage()
      setCurrentLanguage(language)

      try {
        const response = await fetch(`/locales/${language}.json`)
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error("Error loading translations:", error)
        // Fallback to default language
        try {
          const response = await fetch(`/locales/${defaultLanguage}.json`)
          const data = await response.json()
          setTranslations(data)
        } catch (fallbackError) {
          console.error("Error loading fallback translations:", fallbackError)
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [])

  const t = (key: TranslationKey, params?: Record<string, string>): string => {
    const keys = key.split(".")
    let value = translations

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    let result = typeof value === "string" ? value : key

    // Replace parameters in the translation
    if (params) {
      Object.entries(params).forEach(([param, replacement]) => {
        result = result.replace(`{${param}}`, replacement)
      })
    }

    return result
  }

  return { t, currentLanguage, isLoading }
}
