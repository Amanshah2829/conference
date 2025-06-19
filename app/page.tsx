import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { ProgramSection } from "@/components/program-section"
import { SpeakersSection } from "@/components/speakers-section"
import { PartnersSection } from "@/components/partners-section"
import { VenueSection } from "@/components/venue-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <ProgramSection />
        <SpeakersSection />
        <PartnersSection />
        <VenueSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
