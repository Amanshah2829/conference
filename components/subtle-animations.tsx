"use client"

import { useRefinedParallax } from "@/hooks/use-refined-parallax"
import type { ReactNode } from "react"

interface SubtleAnimationProps {
  children: ReactNode
  className?: string
  type?: "float" | "tilt" | "scale" | "fade" | "slide"
  intensity?: "subtle" | "moderate" | "strong"
  delay?: number
}

export function SubtleAnimation({
  children,
  className = "",
  type = "float",
  intensity = "subtle",
  delay = 0,
}: SubtleAnimationProps) {
  const { scrollProgress, mouseX, mouseY, scrollVelocity } = useRefinedParallax()

  const getIntensityMultiplier = () => {
    switch (intensity) {
      case "subtle":
        return 0.5
      case "moderate":
        return 1
      case "strong":
        return 1.5
      default:
        return 0.5
    }
  }

  const multiplier = getIntensityMultiplier()

  const getTransform = () => {
    const delayedProgress = Math.max(0, scrollProgress - delay * 0.1)

    switch (type) {
      case "float":
        return `translate3d(0, ${Math.sin(delayedProgress * Math.PI) * 10 * multiplier}px, 0)`
      case "tilt":
        return `rotate(${mouseX * 2 * multiplier}deg) rotateY(${mouseY * 2 * multiplier}deg)`
      case "scale":
        return `scale(${1 + delayedProgress * 0.05 * multiplier})`
      case "fade":
        return `translate3d(0, 0, 0)`
      case "slide":
        return `translate3d(${delayedProgress * 20 * multiplier}px, 0, 0)`
      default:
        return "translate3d(0, 0, 0)"
    }
  }

  const getOpacity = () => {
    if (type === "fade") {
      return Math.max(0.3, 1 - scrollProgress * 0.7)
    }
    return 1
  }

  return (
    <div
      className={`transition-all duration-300 ease-out ${className}`}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}
