"use client"

import { useEffect, useState, useCallback } from "react"

interface ParallaxData {
  scrollY: number
  scrollProgress: number
  windowHeight: number
  documentHeight: number
  mouseX: number
  mouseY: number
}

export function useAdvancedParallax() {
  const [parallaxData, setParallaxData] = useState<ParallaxData>({
    scrollY: 0,
    scrollProgress: 0,
    windowHeight: 0,
    documentHeight: 0,
    mouseX: 0,
    mouseY: 0,
  })

  const updateParallax = useCallback(() => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight - windowHeight
    const scrollProgress = Math.min(scrollY / documentHeight, 1)

    setParallaxData((prev) => ({
      ...prev,
      scrollY,
      scrollProgress,
      windowHeight,
      documentHeight,
    }))
  }, [])

  const updateMouse = useCallback((e: MouseEvent) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2

    setParallaxData((prev) => ({
      ...prev,
      mouseX,
      mouseY,
    }))
  }, [])

  useEffect(() => {
    // Initial setup
    updateParallax()

    // Optimized scroll handler with RAF
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateParallax()
          ticking = false
        })
        ticking = true
      }
    }

    // Mouse move handler with throttling
    let mouseTicking = false
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseTicking) {
        requestAnimationFrame(() => {
          updateMouse(e)
          mouseTicking = false
        })
        mouseTicking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("resize", updateParallax, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", updateParallax)
    }
  }, [updateParallax, updateMouse])

  return parallaxData
}
