import HeroSection from "@/components/hero-section"
import PresentationSection from "@/components/presentation-section"
import RegistrationSection from "@/components/registration-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <PresentationSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
