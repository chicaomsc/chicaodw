"use client"

import { useEffect, useRef } from "react"

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      pulse: boolean
    }[] = []

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 8), 150)

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: getRandomColor(),
          opacity: Math.random() * 0.5 + 0.1,
          pulse: Math.random() > 0.5,
        })
      }
    }

    const getRandomColor = () => {
      const colors = [
        "rgba(0, 192, 253, alpha)", // azul ciano
        "rgba(114, 137, 218, alpha)", // roxo claro
        "rgba(170, 85, 204, alpha)", // roxo médio
        "rgba(231, 15, 170, alpha)", // rosa magenta
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        // Pulsing effect
        if (particle.pulse) {
          particle.opacity = particle.opacity + Math.sin(Date.now() * 0.001) * 0.01
          particle.opacity = Math.max(0.1, Math.min(0.6, particle.opacity))
        }

        // Draw particle
        ctx.fillStyle = particle.color.replace("alpha", particle.opacity.toString())
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              const opacity = 0.15 * (1 - distance / 150)
              const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)

              gradient.addColorStop(0, particle.color.replace("alpha", opacity.toString()))
              gradient.addColorStop(1, otherParticle.color.replace("alpha", opacity.toString()))

              ctx.beginPath()
              ctx.strokeStyle = gradient
              ctx.lineWidth = 0.5
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    window.addEventListener("resize", handleResize)
    createParticles()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
