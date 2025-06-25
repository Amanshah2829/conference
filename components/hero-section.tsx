/* ── components/hero-section.tsx ───────────────────────────── */
"use client"

import Image from "next/image"
import { Calendar, MapPin, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SubtleAnimation } from "./subtle-animations"
import { AdvancedParallaxSection } from "./advanced-parallax-section"

/* ── tiny helper to render the glassy “pill” badges ───────── */
function Pill({
  icon: Icon,
  text,
}: {
  icon: React.ElementType
  text: string
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm ring-1 ring-white/20">
      <Icon className="h-4 w-4" />
      {text}
    </span>
  )
}

function HeroSection() {
  const layers = [
    {
      image: "/images/indian-ocean-map1.png",
      speed: 0.15,
      opacity: 1,
      scale: 1,
    },
    {
      image: "/images/MAP.",
      speed: 0.4,
      opacity: 0.65,
      blur: 1.5,
      scale: 1.05,
    },
  ]

  return (
    <AdvancedParallaxSection
      layers={layers}
      height="95vh"
      overlay
      overlayOpacity={0.55}
      perspective
      mouseParallax
      className="relative"
    >
      {/* floating accent blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-56 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400 opacity-40 blur-3xl" />
        <div className="absolute -bottom-56 right-0 h-96 w-96 translate-x-1/3 rotate-45 rounded-full bg-blue-500 opacity-35 blur-3xl" />
      </div>

      {/* partner logos strip */}
      <div className="absolute top-10 left-1/2 flex -translate-x-1/2 items-center gap-10">
        {["/logo/WMU.png", "/logo/NWC.png", "/logo/GMU.png"].map((src) => (
          <Image
            key={src}
            src={src}
            alt="Partner logo"
            width={120}
            height={50}
            className="h-10 w-auto brightness-0 invert opacity-90 lg:h-12"
          />
        ))}
      </div>

      {/* main headline + CTAs */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <SubtleAnimation animation="fade-down" distance={40}>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">
              49<sup className="text-2xl align-super">th</sup> Annual
            </span>
            Conference on
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text font-extrabold text-transparent">
              Oceans&nbsp;Law&nbsp;&amp;&nbsp;Policy
            </span>
          </h1>
        </SubtleAnimation>

        <SubtleAnimation animation="fade-up" delay={120} distance={40}>
          <p className="mt-6 max-w-2xl text-lg font-light tracking-wide text-white/90">
            “Developing World Approaches to Ocean Governance:
            Perspectives&nbsp;from&nbsp;the&nbsp;Indian&nbsp;Ocean&nbsp;Rim”
          </p>
        </SubtleAnimation>

        <SubtleAnimation animation="fade-up" delay={240} distance={40}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Pill icon={Calendar} text="September 8-12, 2025" />
            <Pill icon={MapPin} text="New Delhi, India" />
            <Pill icon={Globe2} text="International Conference" />
          </div>
        </SubtleAnimation>

        <SubtleAnimation animation="zoom-in" delay={400}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-4 text-base font-semibold shadow-lg ring-2 ring-white/20 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <a href="#registration">Register Now</a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full border border-white/30 px-8 py-4 text-base font-normal text-white/90 backdrop-blur-lg hover:border-white/70"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </SubtleAnimation>
      </div>
    </AdvancedParallaxSection>
  )
}

/* ── exports ──────────────────────────────────────────────── */
export { HeroSection }      // 💡 named export
export default HeroSection  // default export (optional)
