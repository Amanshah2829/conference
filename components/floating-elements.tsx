"use client"

import { useAdvancedParallax } from "@/hooks/use-advanced-parallax"

interface FloatingElementsProps {
  density?: number
  theme?: "ocean" | "maritime" | "academic"
}

export function FloatingElements({ density = 12, theme = "ocean" }: FloatingElementsProps) {
  const { scrollY, scrollProgress, mouseX, mouseY } = useAdvancedParallax()

  const getThemeElements = () => {
    switch (theme) {
      case "ocean":
        return ["🐠", "🐙", "🦑", "🐚", "🌊", "⚓", "🛥️", "🏝️"]
      case "maritime":
        return ["⚓", "🧭", "⛵", "🚢", "🏴‍☠️", "🗺️", "📜", "⚖️"]
      case "academic":
        return ["📚", "🎓", "📊", "🔬", "📋", "💼", "🌍", "📈"]
      default:
        return ["🌊", "🐠", "⚓", "🛥️"]
    }
  }

  const elements = getThemeElements()

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: density }).map((_, i) => {
        const element = elements[i % elements.length]
        const baseX = (i * 100) / density
        const baseY = (i * 80) / density
        const phase = (i * Math.PI) / 4

        return (
          <div
            key={i}
            className="absolute text-2xl opacity-20 select-none"
            style={{
              left: `${baseX}%`,
              top: `${baseY}%`,
              transform: `
                translate3d(
                  ${mouseX * (15 + i * 3)}px,
                  ${scrollY * (0.05 + i * 0.02) + Math.sin(scrollProgress * Math.PI * 2 + phase) * 20}px,
                  0
                )
                rotate(${scrollProgress * (30 + i * 10)}deg)
                scale(${0.8 + Math.sin(scrollProgress * Math.PI + phase) * 0.3})
              `,
              opacity: Math.max(0.1, 0.3 - scrollProgress * 0.2),
              filter: `hue-rotate(${scrollProgress * 60}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {element}
          </div>
        )
      })}
    </div>
  )
}
