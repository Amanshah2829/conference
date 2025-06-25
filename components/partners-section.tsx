"use client"

import Image from "next/image"
import { SubtleAnimation } from "./subtle-animations"
import { AnimatedSection } from "./animated-section"

export function PartnersSection() {
  const partners = [
    { name: "The Nippon Foundation", logo: "/logo/nippon-green-logo.jpg" },
    { name: "Japan Institute of International Affairs (JIIA)", logo: "/placeholder.svg?height=80&width=200" },
    { name: "University of Copenhagen", logo: "/placeholder.svg?height=80&width=200" },
    { name: "International Maritime Law Institute", logo: "/logo/IMLI-LOGO.jpg" },
  ]

  const collaborators = [
    { name: "Ocean Foundation", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Coastal Communities Network", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Maritime Policy Forum", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Ocean Governance Alliance", logo: "/placeholder.svg?height=60&width=150" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-3">
            Partners & Collaborators
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-5"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            COLP 2025 is made possible through the generous support of our institutional partners and global collaborators.
          </p>
        </AnimatedSection>

        {/* Side-by-side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Institutional Partners */}
          <AnimatedSection animation="fade-up" delay={150}>
            <h3 className="text-2xl font-semibold text-slate-800 mb-10 text-center lg:text-left">Institutional Partners</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
              {partners.map((partner, index) => (
                <SubtleAnimation key={index} type="float" intensity="subtle">
                  <div className="group p-5 rounded-2xl bg-white/60 border border-slate-200 backdrop-blur-md shadow-sm hover:shadow-xl transition-all hover:scale-105 duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200}
                      height={80}
                      className="mx-auto opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </SubtleAnimation>
              ))}
            </div>
          </AnimatedSection>

          {/* Supporting Organizations */}
          <AnimatedSection animation="fade-up" delay={250}>
            <h3 className="text-2xl font-semibold text-slate-800 mb-10 text-center lg:text-left">Supporting Organizations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
              {collaborators.map((collab, index) => (
                <SubtleAnimation key={index} type="float" intensity="subtle">
                  <div className="group p-4 rounded-2xl bg-white/60 border border-slate-200 backdrop-blur-md shadow-sm hover:shadow-xl transition-all hover:scale-105 duration-300">
                    <Image
                      src={collab.logo}
                      alt={collab.name}
                      width={150}
                      height={60}
                      className="mx-auto opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </SubtleAnimation>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-4">Interested in becoming a partner?</p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            Contact us for partnership opportunities
          </a>
        </div>
      </div>
    </section>
  )
}
