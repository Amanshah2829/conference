"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { ProfessionalParallaxSection } from "./professional-parallax-section"
import { SubtleAnimation } from "./subtle-animations"
import { useRefinedParallax } from "@/hooks/use-refined-parallax"

export function HeroSection() {
  const { scrollY, scrollProgress, mouseX, mouseY } = useRefinedParallax()

  const heroLayers = [
    {
      image: "/images/ocean-sunset.png",
      speed: 0.1,
      opacity: 0.9,
      scale: 1.1,
    },
    {
      image: "/images/maritime-icons.png",
      speed: 0.25,
      opacity: 0.3,
      blur: 1,
    },
  ]

  return (
    <ProfessionalParallaxSection
      layers={heroLayers}
      className="min-h-screen flex items-center justify-center pt-16"
      overlay={true}
      overlayOpacity={0.3}
      enableMouseParallax={true}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Professional Logo Badge */}
          <SubtleAnimation type="float" intensity="subtle" className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/10">
                <span className="text-white text-xl font-bold tracking-wider">COLP</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
          </SubtleAnimation>

          {/* Main Title with Refined Typography */}
          <SubtleAnimation type="tilt" intensity="subtle" className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
              <span className="font-extralight text-white/90">48th Annual Conference on</span>
              <br />
              <span className="font-semibold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                Oceans Law & Policy
              </span>
            </h1>
            <div
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"
              style={{
                transform: `scaleX(${1 + scrollProgress * 0.3})`,
              }}
            ></div>
          </SubtleAnimation>

          {/* Conference Theme */}
          <SubtleAnimation type="fade" intensity="moderate" className="mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-light text-blue-100 leading-relaxed max-w-4xl mx-auto">
              "Developing World Approaches to Ocean Governance:
              <br />
              <span className="text-cyan-200 font-medium">Perspectives from the Indian Ocean Rim"</span>
            </h2>
          </SubtleAnimation>

          {/* Conference Details */}
          <SubtleAnimation type="slide" intensity="subtle" className="mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
              {[
                { icon: Calendar, text: "September 8-12, 2025" },
                { icon: MapPin, text: "New Delhi, India" },
                { icon: Users, text: "International Conference" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  style={{
                    transform: `translate3d(${mouseX * (2 + index)}px, ${mouseY * (1 + index)}px, 0)`,
                  }}
                >
                  <item.icon className="w-5 h-5 text-cyan-300" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </SubtleAnimation>

          {/* Description */}
          <SubtleAnimation type="fade" intensity="moderate" className="mb-10">
            <p className="text-lg text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-light">
              Join leading experts, policymakers, and scholars from around the world to explore innovative approaches to
              ocean governance, with a special focus on perspectives from developing nations in the Indian Ocean region.
            </p>
          </SubtleAnimation>

          {/* CTA Buttons */}
          <SubtleAnimation type="float" intensity="subtle" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 backdrop-blur-sm"
            >
              <Link href="#registration">Register Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 hover:border-white/50 font-medium px-8 py-3 rounded-full backdrop-blur-md transition-all duration-300"
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </SubtleAnimation>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40"
        style={{
          opacity: Math.max(0, 1 - scrollProgress * 3),
          transform: `translateX(-50%) translateY(${scrollProgress * 30}px)`,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-light tracking-wider uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>
    </ProfessionalParallaxSection>
  )
}
