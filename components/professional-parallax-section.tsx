"use client"

import { useRefinedParallax } from "@/hooks/use-refined-parallax"
import type { ReactNode } from "react"

interface ParallaxLayer {
  image: string
  speed: number
  opacity?: number
  scale?: number
  blur?: number
}

interface ProfessionalParallaxSectionProps {
  children: ReactNode
  layers: ParallaxLayer[]
  className?: string
  overlay?: boolean
  overlayOpacity?: number
  height?: string
  enableMouseParallax?: boolean
}

export function ProfessionalParallaxSection({
  children,
  layers,
  className = "",
  overlay = true,
  overlayOpacity = 0.4,
  height = "100vh",
  enableMouseParallax = true,
}: ProfessionalParallaxSectionProps) {
  const { scrollY, scrollProgress, mouseX, mouseY, scrollVelocity } = useRefinedParallax()

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        height,
        willChange: "transform",
      }}
    >
      {/* Background Layers */}
      {layers.map((layer, index) => {
        const parallaxOffset = scrollY * layer.speed
        const mouseOffsetX = enableMouseParallax ? mouseX * 15 : 0
        const mouseOffsetY = enableMouseParallax ? mouseY * 15 : 0
        const scaleValue = layer.scale ? 1 + scrollProgress * (layer.scale - 1) : 1.05
        const opacityValue = layer.opacity !== undefined ? layer.opacity * (1 - scrollProgress * 0.2) : 1

        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${layer.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `translate3d(${mouseOffsetX}px, ${parallaxOffset + mouseOffsetY}px, 0) scale(${scaleValue})`,
              opacity: opacityValue,
              filter: layer.blur ? `blur(${layer.blur}px)` : "none",
              willChange: "transform, opacity",
              transition: "transform 0.1s ease-out",
            }}
          />
        )
      })}

      {/* Subtle Geometric Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Dots */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + i * 10}%`,
              transform: `translate3d(${mouseX * (5 + i * 2)}px, ${scrollY * (0.05 + i * 0.02)}px, 0)`,
              opacity: Math.max(0.1, 0.3 - scrollProgress * 0.2),
              transition: "transform 0.2s ease-out",
            }}
          />
        ))}

        {/* Subtle Grid Lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.05}px, 0)`,
          }}
        />
      </div>

      {/* Professional Gradient Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900/60"
          style={{
            opacity: overlayOpacity + scrollProgress * 0.1,
          }}
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 h-full">{children}</div>
    </section>
  )
}
