"use client"

import Image from "next/image"
import { Calendar, MapPin, Music, Users } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function PresentationSection() {
  const { t } = useTranslations()

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="max-w-md mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t("presentation.title")}
          </h2>
          <p className="text-gray-300 text-lg">{t("presentation.subtitle")}</p>
        </div>

        {/* Party Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/party.webp"
            alt="Foule en fête avec écran LED"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
            <Music className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">{t("presentation.features.music.title")}</h3>
            <p className="text-sm text-gray-400">{t("presentation.features.music.description")}</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-cyan-500/20">
            <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">{t("presentation.features.ambiance.title")}</h3>
            <p className="text-sm text-gray-400">{t("presentation.features.ambiance.description")}</p>
          </div>
        </div>

        {/* Goblets Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/gobelemalaga.webp"
            alt="Gobelets avec éclairage néon bleu"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Event Details */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20">
            <Calendar className="w-6 h-6 text-cyan-400" />
            <div>
              <h4 className="font-semibold text-white">{t("presentation.event.date.title")}</h4>
              <p className="text-gray-400">{t("presentation.event.date.value")}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl border border-cyan-500/20">
            <MapPin className="w-6 h-6 text-pink-400" />
            <div>
              <h4 className="font-semibold text-white">{t("presentation.event.location.title")}</h4>
              <p className="text-gray-400">{t("presentation.event.location.value")}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-gray-300 leading-relaxed">{t("presentation.description")}</p>
        </div>
      </div>
    </section>
  )
}
