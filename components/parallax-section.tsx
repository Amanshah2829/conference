"use client"

import { useParallax } from "@/hooks/use-parallax"
import type { ReactNode } from "react"
import { useEffect, useState } from "react"

interface ParallaxSectionProps {
  children?: ReactNode
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null 

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // ✅ Keeps background visible on scroll
          transform: `translate3d(0, ${scrollY * speed}px, 0)`,
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: "black",
            opacity: overlayOpacity,
          }}
        />
      )}

      {/* Foreground Content */}
      <div className="relative z-20">{children}</div>
    </section>
  )
}
