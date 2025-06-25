"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Scale, Users, Lightbulb } from "lucide-react"
import { SubtleAnimation } from "./subtle-animations"
import { AnimatedSection } from "./animated-section"
import { StaggeredAnimation } from "./staggered-animation"
import { AdvancedParallaxSection } from "./advanced-parallax-section"

export function OverviewSection() {
  const objectives = [
    {
      icon: Globe,
      title: "Global Perspectives",
      description:
        "Explore diverse approaches to ocean governance from developing nations, particularly those in the Indian Ocean Rim.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Scale,
      title: "Legal Framework",
      description:
        "Examine current legal frameworks and propose innovative solutions for sustainable ocean management.",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      icon: Users,
      title: "Collaborative Solutions",
      description:
        "Foster international cooperation and knowledge sharing among policymakers, researchers, and practitioners.",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Policy",
      description:
        "Develop practical policy recommendations that address the unique challenges faced by developing nations.",
      gradient: "from-blue-500 to-indigo-500",
    },
  ]

  const mapLayers = [
    {
      image: "/images/indian-ocean-map1.png",
      speed: 0.1,
      opacity: 0.8,
      blur: 1,
    },
    {
      image: "/images/ocean-sunset1.jpg",
      speed: 0.3,
      opacity: 0.5,
      scale: 1.05,
      rotate: 3,
    },
  ]

  return (
    <>
      {/* ───────── Hero / Parallax banner ───────── */}
      <AdvancedParallaxSection
        layers={mapLayers}
        className="py-32"
        overlay
        overlayOpacity={0.6}
        perspective
        mouseParallax
        height="60vh"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <SubtleAnimation animation="fade-down">
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
                Shaping the Future of{" "}
                <span className="block font-medium bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Ocean Governance
                </span>
              </h2>
            </SubtleAnimation>

            <SubtleAnimation animation="fade-up" delay={100}>
              <p className="text-lg text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-light">
                Where maritime law meets innovation, and developing-world perspectives drive global solutions.
              </p>
            </SubtleAnimation>
          </div>
        </div>
      </AdvancedParallaxSection>

      {/* ───────── Main overview section ───────── */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      >
        {/* soft radial background dots */}
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, rgba(59,130,246,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 70% 70%, rgba(6,182,212,0.1) 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* section header */}
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              Conference <span className="font-medium">Overview</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              The 48th Annual Conference on Oceans Law & Policy unites global thought leaders to
              shape the future of ocean governance with a focus on inclusive development.
            </p>
          </AnimatedSection>

          {/* objective cards */}
          <StaggeredAnimation
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            staggerDelay={100}
            animation="fade-up"
          >
            {objectives.map(({ icon: Icon, title, description, gradient }, i) => (
              <SubtleAnimation key={i} type="tilt" intensity="moderate">
                <Card className="border-0 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 bg-white/90 backdrop-blur-sm group overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-600 leading-relaxed font-light">{description}</p>
                  </CardContent>
                </Card>
              </SubtleAnimation>
            ))}
          </StaggeredAnimation>

          {/* “Why this conference matters” block */}
          <AnimatedSection animation="scale-up" delay={300}>
            <SubtleAnimation>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/60 rounded-3xl p-12 lg:p-16 shadow-2xl backdrop-blur-xl border border-white/30">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-light text-slate-900 mb-8 text-center">
                    Why This Conference <span className="font-semibold">Matters</span>
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* target audience */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                      <h4 className="text-lg font-medium text-slate-900 mb-4">Target Audience</h4>
                      <ul className="text-slate-700 space-y-3 font-light">
                        {[
                          "International law scholars and practitioners",
                          "Government officials and policymakers",
                          "Environmental scientists and researchers",
                          "NGO representatives and civil society leaders",
                          "Maritime industry professionals",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* key focus areas */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                      <h4 className="text-lg font-medium text-slate-900 mb-4">Key Focus Areas</h4>
                      <ul className="text-slate-700 space-y-3 font-light">
                        {[
                          "Sustainable fisheries management",
                          "Marine biodiversity conservation",
                          "Climate change adaptation strategies",
                          "Maritime boundary disputes",
                          "Blue economy development",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SubtleAnimation>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}