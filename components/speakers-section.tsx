"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin } from "lucide-react"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { StaggeredAnimation } from "./staggered-animation"

export function SpeakersSection() {
  const speakers = [
    {
      name: "Dr. Sarah Mitchell",
      title: "UN Special Rapporteur on Oceans",
      affiliation: "United Nations",
      country: "United States",
      bio: "Leading expert in international ocean law with over 20 years of experience in marine policy development and implementation.",
      image: "/placeholder.svg?height=300&width=300",
      keynote: true,
    },
    {
      name: "Judge Maria Santos",
      title: "Judge",
      affiliation: "International Tribunal for the Law of the Sea",
      country: "Brazil",
      bio: "Distinguished jurist specializing in maritime boundary disputes and UNCLOS interpretation.",
      image: "/placeholder.svg?height=300&width=300",
      keynote: true,
    },
    {
      name: "Dr. Elena Rodriguez",
      title: "Lead Author",
      affiliation: "IPCC Working Group II",
      country: "Spain",
      bio: "Climate scientist focusing on ocean-climate interactions and impacts on coastal communities.",
      image: "/placeholder.svg?height=300&width=300",
      keynote: true,
    },
    {
      name: "Prof. Rajesh Kumar",
      title: "Professor of International Law",
      affiliation: "Jawaharlal Nehru University",
      country: "India",
      bio: "Expert in maritime law and Indian Ocean regional cooperation with extensive research on UNCLOS.",
      image: "/placeholder.svg?height=300&width=300",
      keynote: false,
    },
    {
      name: "Dr. Priya Sharma",
      title: "Director",
      affiliation: "Institute for Ocean Studies",
      country: "India",
      bio: "Marine policy researcher specializing in fisheries management and coastal zone governance.",
      image: "/placeholder.svg?height=300&width=300",
      keynote: false,
    },
    {
      name: "Dr. James Okoye",
      title: "Senior Research Fellow",
      affiliation: "African Maritime Law Institute",
      country: "Nigeria",
      bio: "Expert in African maritime law and sustainable fisheries management in developing countries.",
      image: "/placeholder.svg?height=300&width=300",
      keynote: false,
    },
    {
      name: "Prof. Ahmed Hassan",
      title: "Professor of Maritime Law",
      affiliation: "Cairo University",
      country: "Egypt",
      bio: "Specialist in maritime boundary delimitation and Red Sea regional cooperation.",
      image: "/placeholder.svg?height=300&width=300",
      keynote: false,
    },
    {
      name: "Dr. Hiroshi Tanaka",
      title: "Director",
      affiliation: "Ocean Technology Institute",
      country: "Japan",
      bio: "Pioneer in digital ocean monitoring technologies and AI applications in marine science.",
      image: "/placeholder.svg?height=300&width=300",
      keynote: true,
    },
  ]

  const keynoteSpeakers = speakers.filter((speaker) => speaker.keynote)
  const panelSpeakers = speakers.filter((speaker) => !speaker.keynote)

  const createSpeakerCard = (speaker: (typeof speakers)[0], index: number) => (
    <Card
      key={index}
      className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
        speaker.keynote ? "border-2 border-blue-100" : ""
      }`}
    >
      <div className="relative">
        <Image
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {speaker.keynote && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Keynote
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h4>
        <p className="text-blue-600 font-medium mb-1">{speaker.title}</p>
        <p className="text-gray-600 text-sm mb-2">{speaker.affiliation}</p>
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4" />
          {speaker.country}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{speaker.bio}</p>
        <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-50 transition-colors">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Profile
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16" animation="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Distinguished Speakers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from world-renowned experts, policymakers, and thought leaders in ocean law and marine governance.
          </p>
        </AnimatedSection>

        {/* Keynote Speakers */}
        <div className="mb-16">
          <AnimatedSection animation="fade-up" delay={200}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Keynote Speakers</h3>
          </AnimatedSection>
          <StaggeredAnimation
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={150}
            animation="scale-up"
          >
            {keynoteSpeakers.map((speaker, index) => createSpeakerCard(speaker, index))}
          </StaggeredAnimation>
        </div>

        {/* Panel Speakers */}
        <div>
          <AnimatedSection animation="fade-up" delay={200}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Panel Speakers & Moderators</h3>
          </AnimatedSection>
          <StaggeredAnimation
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={120}
            animation="fade-up"
          >
            {panelSpeakers.map((speaker, index) => createSpeakerCard(speaker, index))}
          </StaggeredAnimation>
        </div>

        <AnimatedSection className="text-center mt-12" animation="scale-up" delay={400}>
          <p className="text-gray-600 mb-4">More speakers to be announced soon!</p>
          <Button variant="outline" size="lg" className="hover:bg-blue-50 transition-colors">
            View All Speakers
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
