"use client"

import { useTranslations } from "@/hooks/use-translations"
import { Instagram, Twitter, Music } from "lucide-react"

export default function Footer() {
  const { t } = useTranslations()

  return (
    <footer className="py-8 px-4 bg-gradient-to-t from-purple-900/30 to-black border-t border-purple-500/20">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            <Music className="w-6 h-6" />
          </a>
        </div>

        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          {t("footer.title")}
        </h3>

        <p className="text-gray-400 text-sm mb-4">{t("footer.subtitle")}</p>

        <div className="text-xs text-gray-500 space-y-1">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.disclaimer")}</p>
        </div>
      </div>
    </footer>
  )
}
