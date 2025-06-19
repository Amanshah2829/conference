"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
  delay?: number
  duration?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-${duration}`

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
        case "fade-in":
          return `${baseClasses} ${durationClass} opacity-0`
        case "slide-left":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`
        case "slide-right":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`
        case "scale-up":
          return `${baseClasses} ${durationClass} opacity-0 scale-95`
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
