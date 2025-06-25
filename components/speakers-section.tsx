"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"
import { StaggeredAnimation } from "./staggered-animation"

export function SpeakersSection() {
  const speakers = [
    {
      name: "Dr. Ronan Long",
      title: "Director",
      affiliation: "World Maritime University - Sasakawa Global Ocean Institute",
      country: "Sweden",
      bio: "Internationally recognized scholar in ocean governance and law of the sea. Leads global policy research at WMU.",
      image: "/speakers/ronan-long.jpeg",
      keynote: true,
      link: "https://www.wmu.se/people/ronan-long"
    },
    {
      name: "Prof. Sanjeevi Shanthakumar",
      title: "Director",
      affiliation: "Gujarat National Law University",
      country: "India",
      bio: "Expert in environmental and water law, actively involved in capacity building for sustainable development goals.",
      image: "/speakers/sanjeevi-shanthakumar.jpeg",
      keynote: false,
      link: "https://www.linkedin.com/in/sanjeevi-shanthakumar-4a559643/"
    },
    {
      name: "Prof. James Kraska",
      title: "Chair in Oceans Law and Policy",
      affiliation: "U.S. Naval War College",
      country: "United States",
      bio: "Renowned authority on international maritime law and security in the Indo-Pacific region.",
      image: "/speakers/james-kraska.jpeg",
      keynote: true,
      link: "https://www.linkedin.com/in/jameskraska/"
    },
    {
      name: "Dr. Nilufer Oral",
      title: "Director",
      affiliation: "Centre for International Law, National University of Singapore",
      country: "Singapore",
      bio: "Member of the International Law Commission and expert in climate change law and oceans.",
      image: "/speakers/nilufer-oral.jpeg",
      keynote: true,
      link: "https://www.linkedin.com/in/nilufer-oral-8b467314/"
    },
    {
      name: "Dr. Norman Martinez",
      title: "Senior Lecturer",
      affiliation: "World Maritime University",
      country: "Sweden",
      bio: "Experienced maritime law educator and IMO legal committee expert with focus on safety and legal frameworks.",
      image: "/speakers/norman-martinez.jpg",
      keynote: false,
      link: "https://www.linkedin.com/in/norman-martinez-11738824/"
    },
    {
      name: "Dr. Pradeep Chauhan",
      title: "Director General",
      affiliation: "National Maritime Foundation",
      country: "India",
      bio: "Strategic thinker in maritime security and blue economy policy advisory in the Indian Ocean Region.",
      image: "/speakers/pradeep-chauhan.webp",
      keynote: false,
      link: "https://www.linkedin.com/in/pradeep-chauhan-a4bab144/"
    },
    {
      name: "Prof. Young Kil Park",
      title: "Professor of Law",
      affiliation: "Korea Maritime Institute",
      country: "South Korea",
      bio: "Specialist in East Asia maritime governance and regional cooperation for ocean sustainability.",
      image: "/speakers/young-kil-park.png",
      keynote: false,
      link: "https://www.cigionline.org/people/young-kil-park/"
    },
    {
      name: "Dr. Beatriz Martinez Romera",
      title: "Associate Professor of Environmental Law",
      affiliation: "University of Copenhagen",
      country: "Denmark",
      bio: "Researcher in climate change law, ocean governance, and environmental protection in international law.",
      image: "/speakers/beatriz-martinez-romera.png",
      keynote: false,
      link: "https://www.linkedin.com/in/beatriz-martinez-romera-31a31453/"
    }
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
        <Link href={speaker.link} target="_blank">
          <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-50 transition-colors">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Profile
          </Button>
        </Link>
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
      </div>
    </section>
  )
}
