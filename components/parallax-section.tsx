"use client"

import { useParallax } from "@/hooks/use-parallax"
import type { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  backgroundImage: string
  speed?: number
  className?: string
  overlay?: boolean
  overlayOpacity?: number
}

export function ParallaxSection({
  children,
  backgroundImage,
  speed = 0.5,
  className = "",
  overlay = true,
  overlayOpacity = 0.4,
}: ParallaxSectionProps) {
  const scrollY = useParallax()

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `translateY(${scrollY * speed}px)`,
          scale: "1.1", // Slight scale to prevent gaps during parallax
        }}
      />

      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
