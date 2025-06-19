"use client"

import { useAdvancedParallax } from "@/hooks/use-advanced-parallax"
import type { ReactNode } from "react"

interface Layer {
  image: string
  speed: number
  scale?: number
  opacity?: number
  blur?: number
  rotate?: number
}

interface AdvancedParallaxSectionProps {
  children: ReactNode
  layers: Layer[]
  className?: string
  overlay?: boolean
  overlayOpacity?: number
  perspective?: boolean
  mouseParallax?: boolean
  height?: string
}

export function AdvancedParallaxSection({
  children,
  layers,
  className = "",
  overlay = true,
  overlayOpacity = 0.4,
  perspective = false,
  mouseParallax = true,
  height = "100vh",
}: AdvancedParallaxSectionProps) {
  const { scrollY, scrollProgress, mouseX, mouseY } = useAdvancedParallax()

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        height,
        perspective: perspective ? "1000px" : "none",
      }}
    >
      {/* Background Layers */}
      {layers.map((layer, index) => {
        const parallaxY = scrollY * layer.speed
        const mouseParallaxX = mouseParallax ? mouseX * 20 : 0
        const mouseParallaxY = mouseParallax ? mouseY * 20 : 0
        const scaleValue = layer.scale ? 1 + scrollProgress * (layer.scale - 1) : 1.1
        const rotateValue = layer.rotate ? scrollProgress * layer.rotate : 0
        const opacityValue = layer.opacity !== undefined ? layer.opacity : 1 - scrollProgress * 0.3

        return (
          <div
            key={index}
            className="absolute inset-0 will-change-transform"
            style={{
              backgroundImage: `url(${layer.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `
                translate3d(${mouseParallaxX}px, ${parallaxY + mouseParallaxY}px, 0)
                scale(${scaleValue})
                rotate(${rotateValue}deg)
                ${perspective ? `rotateX(${scrollProgress * 5}deg)` : ""}
              `,
              opacity: opacityValue,
              filter: layer.blur ? `blur(${layer.blur}px)` : "none",
              zIndex: -layers.length + index,
            }}
          />
        )
      })}

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
              transform: `
                translate3d(
                  ${mouseX * (10 + i * 5)}px,
                  ${scrollY * (0.1 + i * 0.05)}px,
                  0
                )
                scale(${1 + Math.sin(scrollProgress * Math.PI + i) * 0.5})
              `,
              opacity: 0.6 - scrollProgress * 0.4,
              transition: "transform 0.1s ease-out",
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <div
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-full"
          style={{
            transform: `
              translate3d(${mouseX * -30}px, ${scrollY * 0.3}px, 0)
              rotate(${scrollProgress * 180}deg)
              scale(${1 + scrollProgress * 0.5})
            `,
            opacity: 0.3 - scrollProgress * 0.2,
          }}
        />

        <div
          className="absolute bottom-1/3 left-1/5 w-24 h-24 border-2 border-cyan-300/20"
          style={{
            transform: `
              translate3d(${mouseX * 40}px, ${scrollY * -0.2}px, 0)
              rotate(${scrollProgress * -90}deg)
              skew(${scrollProgress * 10}deg)
            `,
            opacity: 0.4 - scrollProgress * 0.3,
          }}
        />
      </div>

      {/* Dynamic Wave Effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 100%)`,
          transform: `translateY(${scrollY * 0.1}px) scaleY(${1 + scrollProgress * 0.5})`,
          clipPath: `polygon(0 ${50 + Math.sin(scrollProgress * Math.PI * 2) * 20}%, 25% ${30 + Math.cos(scrollProgress * Math.PI * 3) * 15}%, 50% ${40 + Math.sin(scrollProgress * Math.PI * 4) * 10}%, 75% ${35 + Math.cos(scrollProgress * Math.PI * 2) * 18}%, 100% ${45 + Math.sin(scrollProgress * Math.PI * 5) * 12}%, 100% 100%, 0% 100%)`,
        }}
      />

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"
          style={{
            opacity: overlayOpacity + scrollProgress * 0.2,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </section>
  )
}
