"use client"

import { useEffect, useState, useCallback, useRef } from "react"

interface RefinedParallaxData {
  scrollY: number
  scrollProgress: number
  scrollVelocity: number
  windowHeight: number
  mouseX: number
  mouseY: number
  isScrolling: boolean
}

export function useRefinedParallax() {
  const [parallaxData, setParallaxData] = useState<RefinedParallaxData>({
    scrollY: 0,
    scrollProgress: 0,
    scrollVelocity: 0,
    windowHeight: 0,
    mouseX: 0,
    mouseY: 0,
    isScrolling: false,
  })

  const lastScrollY = useRef(0)
  const scrollTimeout = useRef<NodeJS.Timeout>()
  const rafId = useRef<number>()

  const updateParallax = useCallback(() => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight - windowHeight
    const scrollProgress = Math.min(scrollY / Math.max(documentHeight, 1), 1)
    const scrollVelocity = Math.abs(scrollY - lastScrollY.current)

    lastScrollY.current = scrollY

    setParallaxData((prev) => ({
      ...prev,
      scrollY,
      scrollProgress,
      scrollVelocity: Math.min(scrollVelocity, 50), // Cap velocity for stability
      windowHeight,
      isScrolling: true,
    }))

    // Reset scrolling state after inactivity
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    scrollTimeout.current = setTimeout(() => {
      setParallaxData((prev) => ({ ...prev, isScrolling: false }))
    }, 150)
  }, [])

  const updateMouse = useCallback((e: MouseEvent) => {
    // Normalize mouse position to -0.5 to 0.5 range for subtle effects
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5

    setParallaxData((prev) => ({
      ...prev,
      mouseX,
      mouseY,
    }))
  }, [])

  useEffect(() => {
    updateParallax()

    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(updateParallax)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => updateMouse(e))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("resize", updateParallax, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", updateParallax)
      if (rafId.current) cancelAnimationFrame(rafId.current)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [updateParallax, updateMouse])

  return parallaxData
}
