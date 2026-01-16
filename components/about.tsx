"use client"

import Image from "next/image"
import { Award, Shield, Users, MapPin, Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Animated Counter Component
function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = ""
}: {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1) + "M"
    }
    if (num >= 1000) {
      return num.toLocaleString()
    }
    return num.toString()
  }

  return (
    <span ref={counterRef} className="tabular-nums">
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}

// Stats data for rotating card
const rotatingStats = [
  {
    icon: Users,
    title: "1M+ Happy Customers",
    description: "Trusted by millions of travelers across India"
  },
  {
    icon: MapPin,
    title: "500+ Successful Tours",
    description: "Memorable journeys to stunning destinations"
  },
  {
    icon: Award,
    title: "30+ Years of Excellence",
    description: "Three decades of premium travel services"
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "Professional, vaccinated drivers and sanitized vehicles"
  },
  {
    icon: Star,
    title: "50+ Destinations",
    description: "Explore India's most beautiful locations"
  }
]

// Rotating Stats Card Component
function RotatingStatsCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingStats.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentStat = rotatingStats[currentIndex]
  const IconComponent = currentStat.icon

  return (
    <div className="absolute -bottom-8 -left-8 bg-card/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-border/50 max-w-xs transition-all duration-500 ease-out translate-y-0 hover:-translate-y-2 hover:shadow-2xl z-10">
      <div className={`flex items-start gap-4 transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
        <div className="p-3 bg-primary/10 rounded-lg transition-colors duration-300">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1 text-lg">{currentStat.title}</p>
          <p className="text-sm text-muted-foreground leading-snug">
            {currentStat.description}
          </p>
        </div>
      </div>
      {/* Progress indicator dots */}
      <div className="flex gap-1.5 mt-4 justify-center">
        {rotatingStats.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true)
              setTimeout(() => {
                setCurrentIndex(index)
                setIsAnimating(false)
              }, 300)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-primary w-6'
              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            aria-label={`View stat ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Badge stats data with light, vibrant colors
const badgeStats = [
  {
    label: "OVER",
    value: "1M+",
    subtext: "HAPPY CUSTOMERS",
    colors: { start: "#FFB8A8", mid: "#FF9B8A", end: "#FF7F6E" } // Light Coral/Peach
  },
  {
    label: "OVER",
    value: "500+",
    subtext: "SUCCESSFUL TOURS",
    colors: { start: "#87CEEB", mid: "#6BB8DA", end: "#5AADCF" } // Soft Sky Blue
  },
  {
    label: "OVER",
    value: "30+",
    subtext: "YEARS EXPERIENCE",
    colors: { start: "#98E4C9", mid: "#7DD4B5", end: "#5FC4A1" } // Mint Green
  },
  {
    label: "OVER",
    value: "50+",
    subtext: "DESTINATIONS",
    colors: { start: "#DDA0DD", mid: "#DA8FDA", end: "#D77ED7" } // Soft Lavender/Plum
  },
]

// Rotating Badge Component (Scalloped Seal Style)
function RotatingBadge() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Generate Scalloped Seal Path (Smooth Wave)
  const generateSealPath = () => {
    const points = []
    const center = 50
    const baseRadius = 46
    const amplitude = 3 // Height of the wave
    const lobes = 14 // Reduced for a more refined look

    for (let i = 0; i <= 360; i += 1) {
      const angle = (i * Math.PI) / 180
      // Standard smooth cosine wave for gentle rounded edges
      const r = baseRadius + amplitude * Math.cos(lobes * angle)

      const x = center + r * Math.cos(angle)
      const y = center + r * Math.sin(angle)
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`)
    }
    return points.join(' ') + ' Z'
  }

  const sealPath = generateSealPath()

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % badgeStats.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentStat = badgeStats[currentIndex]

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div className="absolute -top-4 -right-4 lg:right-auto lg:-left-12 lg:-top-12 z-20 rotate-[-12deg]">
      <div className="relative w-28 h-28 md:w-40 md:h-40 filter drop-shadow-xl">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-spin-slow"
          style={{ animationDuration: '20s' }}
        >
          {/* Main Scalloped Seal Body */}
          <path
            d={sealPath}
            className="transition-all duration-500 ease-in-out"
            style={{ fill: currentStat.colors.mid }}
          />

          {/* Inner Ring with Gap */}
          <circle
            cx="50"
            cy="50"
            r="36"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.4"
          />
        </svg>

        {/* Content Container */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-300 ${isAnimating ? 'opacity-50 scale-90' : 'opacity-100 scale-100'
            }`}
        >
          {/* "OVER" Label */}
          <span className="text-[8px] md:text-[11px] font-bold tracking-widest uppercase mb-0.5 opacity-90 drop-shadow-sm">
            {currentStat.label}
          </span>

          {/* Value + Star */}
          <div className="flex items-center justify-center gap-1.5 leading-none">
            <span className="text-xl md:text-3xl font-black tracking-tight drop-shadow-md">
              {currentStat.value}
            </span>
            {/* <Star className="w-3.5 h-3.5 md:w-5 md:h-5 fill-white text-white drop-shadow-sm" /> */}
          </div>

          {/* Subtext */}
          <span className="text-[7px] md:text-[10px] font-black uppercase tracking-tight mt-1 opacity-100 max-w-[90%] text-center leading-tight drop-shadow-sm">
            {currentStat.subtext}
          </span>
        </div>
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Since 1991</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight text-balance">
              Three Decades of Travel Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 1991 by Mr. Narayan Chandra Nag, V.I.P. Travels has been crafting unforgettable journeys
              across India for over 30 years. Our commitment to delivering customer-centric travel services with
              unwavering quality and dedication sets us apart.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in creating unparalleled experiences for every traveler, consistently striving to exceed
              expectations through personalized service and attention to detail.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="space-y-2 group">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  <AnimatedCounter end={30} suffix="+" duration={1500} />
                </p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="space-y-2 group">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  <AnimatedCounter end={1000000} suffix="+" duration={2500} />
                </p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="space-y-2 group">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  <AnimatedCounter end={500} suffix="+" duration={2000} />
                </p>
                <p className="text-sm text-muted-foreground">Successful Tours</p>
              </div>
              <div className="space-y-2 group">
                <div className="flex items-center gap-2 text-primary">
                  <Star className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  <AnimatedCounter end={50} suffix="+" duration={1800} />
                </p>
                <p className="text-sm text-muted-foreground">Destinations</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative perspective-1000">
            <div className="aspect-[4/5] rounded-2xl overflow-visible shadow-2xl bg-neutral-100 relative">
              {/* Rotating Stats Badge - Top Left Edge */}
              <RotatingBadge />

              <Image
                src="/luxury-tour-bus-on-indian-highway--professional-tr.jpg"
                alt="V.I.P. Travels luxury bus"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/10 rounded-2xl" />
            </div>
            {/* Floating Card - Dynamic Rotating Stats */}
            {/* <RotatingStatsCard /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
