"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Scale, Users, Lightbulb } from "lucide-react"
import { ProfessionalParallaxSection } from "./professional-parallax-section"
import { SubtleAnimation } from "./subtle-animations"
import { AnimatedSection } from "./animated-section"
import { StaggeredAnimation } from "./staggered-animation"
import { useRefinedParallax } from "@/hooks/use-refined-parallax"

export function OverviewSection() {
  const { scrollProgress, mouseX, mouseY } = useRefinedParallax()

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

  const transitionLayers = [
    {
      image: "/images/maritime-icons.png",
      speed: 0.15,
      opacity: 0.4,
      blur: 2,
    },
    {
      image: "/images/ocean-rim-sunset.png",
      speed: 0.3,
      opacity: 0.2,
    },
  ]

  const mapLayers = [
    {
      image: "/images/indian-ocean-map.png",
      speed: 0.2,
      opacity: 0.6,
    },
    {
      image: "/images/ocean-sunset.png",
      speed: 0.4,
      opacity: 0.3,
      blur: 1,
    },
  ]

  return (
    <>
      {/* Professional Transition Section */}
      <ProfessionalParallaxSection
        layers={transitionLayers}
        className="py-32"
        overlay={true}
        overlayOpacity={0.6}
        height="60vh"
        enableMouseParallax={false}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <SubtleAnimation type="float" intensity="subtle">
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
                Shaping the Future of
                <span className="block font-medium bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Ocean Governance
                </span>
              </h2>
              <p className="text-lg text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-light">
                Where maritime law meets innovation, and developing world perspectives drive global solutions
              </p>
            </SubtleAnimation>
          </div>
        </div>
      </ProfessionalParallaxSection>

      {/* Main Overview Content */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16" animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              Conference <span className="font-medium">Overview</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              The 48th Annual Conference on Oceans Law & Policy brings together the world's leading experts to address
              critical challenges in ocean governance, with a special emphasis on developing world perspectives.
            </p>
          </AnimatedSection>

          <StaggeredAnimation
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            staggerDelay={100}
            animation="fade-up"
          >
            {objectives.map((objective, index) => (
              <SubtleAnimation key={index} type="tilt" intensity="subtle">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm group overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${objective.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <objective.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 mb-3">{objective.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-light">{objective.description}</p>
                  </CardContent>
                </Card>
              </SubtleAnimation>
            ))}
          </StaggeredAnimation>

          <AnimatedSection animation="scale-up" delay={300}>
            <SubtleAnimation type="float" intensity="subtle">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-12 lg:p-16 relative overflow-hidden shadow-xl backdrop-blur-sm border border-white/20">
                <div className="max-w-4xl mx-auto relative z-10">
                  <h3 className="text-2xl font-light text-slate-900 mb-8 text-center">
                    Why This Conference <span className="font-medium">Matters</span>
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
                      <h4 className="text-lg font-medium text-slate-900 mb-4">Target Audience</h4>
                      <ul className="text-slate-700 space-y-3 font-light">
                        {[
                          "International law scholars and practitioners",
                          "Government officials and policymakers",
                          "Environmental scientists and researchers",
                          "NGO representatives and civil society leaders",
                          "Maritime industry professionals",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
                      <h4 className="text-lg font-medium text-slate-900 mb-4">Key Focus Areas</h4>
                      <ul className="text-slate-700 space-y-3 font-light">
                        {[
                          "Sustainable fisheries management",
                          "Marine biodiversity conservation",
                          "Climate change adaptation strategies",
                          "Maritime boundary disputes",
                          "Blue economy development",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
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

      {/* Indian Ocean Focus Section */}
      <ProfessionalParallaxSection
        layers={mapLayers}
        className="py-24"
        overlay={true}
        overlayOpacity={0.5}
        height="50vh"
        enableMouseParallax={false}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center max-w-4xl mx-auto">
            <SubtleAnimation type="fade" intensity="moderate">
              <h3 className="text-3xl font-light text-white mb-6">
                Focus on the <span className="font-medium text-cyan-300">Indian Ocean Rim</span>
              </h3>
              <p className="text-lg text-blue-100/90 leading-relaxed font-light">
                Bringing together nations from across the Indian Ocean to share experiences, challenges, and innovative
                solutions for sustainable ocean governance in one of the world's most strategically important maritime
                regions.
              </p>
            </SubtleAnimation>
          </div>
        </div>
      </ProfessionalParallaxSection>
    </>
  )
}
