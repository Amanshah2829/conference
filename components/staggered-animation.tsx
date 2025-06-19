"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface StaggeredAnimationProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
  threshold?: number
}

export function StaggeredAnimation({
  children,
  className = "",
  staggerDelay = 100,
  animation = "fade-up",
  threshold = 0.1,
}: StaggeredAnimationProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
  })

  const getAnimationClasses = (index: number) => {
    const baseClasses = "transition-all duration-600 ease-out"
    const delay = index * staggerDelay

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-8`
        case "fade-in":
          return `${baseClasses} opacity-0`
        case "slide-left":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "slide-right":
          return `${baseClasses} opacity-0 translate-x-8`
        case "scale-up":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={getAnimationClasses(index)}
          style={{
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
