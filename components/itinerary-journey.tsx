"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Car, Flag, FlagTriangleRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Destination {
  name: string
  description: string
  image: string
  day: string
  type?: string
}

interface ItineraryJourneyProps {
  title: string
  destinations: Destination[]
}

export function ItineraryJourney({ title, destinations }: ItineraryJourneyProps) {
  const allStops = [
    {
      name: "Trip Start",
      description: "Your journey begins here",
      image: "/india-airport-departure.jpg",
      day: "Start",
      type: "start",
    },
    ...destinations,
    {
      name: "Trip End",
      description: "Journey complete! Safe travels home",
      image: "/india-airport-arrival.jpg",
      day: "End",
      type: "end",
    },
  ]

  const [currentStop, setCurrentStop] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [autoAdvance, setAutoAdvance] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autoAdvance) return

    const timer = setInterval(() => {
      setCurrentStop((prev) => {
        if (prev < allStops.length - 1) {
          setIsAnimating(true)
          setTimeout(() => setIsAnimating(false), 2800)
          return prev + 1
        }
        return prev
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [allStops.length, autoAdvance])

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const stopWidth = 400 // Width of each destination card
      const scrollPosition = currentStop * stopWidth - container.clientWidth / 2 + stopWidth / 2

      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: "smooth",
      })
    }
  }, [currentStop])

  const resetJourney = () => {
    setCurrentStop(0)
    setIsAnimating(false)
    setAutoAdvance(true)
  }

  const jumpToDestination = (index: number) => {
    setCurrentStop(index)
    setAutoAdvance(false)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 2800)
  }

  const resumeAutoPlay = () => {
    setAutoAdvance(true)
  }

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch your adventure unfold as we take you through incredible destinations
          </p>
        </div>

        {/* Journey Controls */}
        <div className="flex justify-center gap-4 mb-12">
          <Button onClick={resetJourney} variant="outline">
            Restart Journey
          </Button>
          {!autoAdvance && (
            <Button onClick={resumeAutoPlay} variant="default">
              Resume Auto-Play
            </Button>
          )}
        </div>

        <div className="relative">
          <div ref={scrollContainerRef} className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="relative min-w-max px-8">
              {/* Car Road - elevated above cards */}
              <div className="mb-12 relative">
                {/* Road/Path Line */}
                <div className="absolute top-8 left-0 right-0 h-2 bg-border rounded-full" />

                {/* Progress Line */}
                <div
                  className="absolute top-8 left-0 h-2 bg-primary rounded-full transition-all duration-[3000ms] ease-in-out"
                  style={{
                    width: `${(currentStop / (allStops.length - 1)) * 100}%`,
                  }}
                />

                {/* Car */}
                <div
                  className="absolute top-2 transition-all duration-[3000ms] ease-in-out z-30"
                  style={{
                    left: `calc(${(currentStop / (allStops.length - 1)) * 100}%)`,
                  }}
                >
                  <div className="relative -translate-x-1/2">
                    <Car className={`w-12 h-12 text-primary drop-shadow-2xl ${isAnimating ? "animate-pulse" : ""}`} />
                    {isAnimating && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                        <div className="flex gap-1">
                          <div
                            className="w-1 h-1 bg-primary/60 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          />
                          <div
                            className="w-1 h-1 bg-primary/60 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          />
                          <div
                            className="w-1 h-1 bg-primary/60 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Location markers on the road */}
                <div className="absolute top-0 left-0 right-0 flex justify-between">
                  {allStops.map((stop, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center"
                      style={{
                        position: "absolute",
                        left: `${(index / (allStops.length - 1)) * 100}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div
                        className={`mb-2 text-sm font-bold whitespace-nowrap transition-all duration-500 ${
                          currentStop === index
                            ? "text-primary scale-110"
                            : index < currentStop
                              ? "text-foreground"
                              : "text-muted-foreground"
                        }`}
                      >
                        {stop.day}
                      </div>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                          currentStop === index
                            ? "bg-primary text-primary-foreground scale-125 shadow-xl ring-4 ring-primary/30"
                            : index < currentStop
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {stop.type === "start" ? (
                          <Flag className="w-5 h-5" />
                        ) : stop.type === "end" ? (
                          <FlagTriangleRight className="w-5 h-5" />
                        ) : (
                          <MapPin className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Destinations in horizontal layout */}
                <div className="flex gap-0 relative pt-32">
                  {allStops.map((stop, index) => (
                    <div
                      key={index}
                      onClick={() => jumpToDestination(index)}
                      className={`relative flex-shrink-0 px-8 transition-all duration-700 cursor-pointer hover:scale-105 ${
                        index <= currentStop ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
                      }`}
                      style={{ width: "400px" }}
                    >
                      {/* Destination card */}
                      <div
                        className={`bg-card border border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                          currentStop === index ? "ring-2 ring-primary shadow-2xl scale-105" : ""
                        } ${index > currentStop ? "blur-sm" : ""}`}
                      >
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={stop.image || "/placeholder.svg"}
                            alt={stop.name}
                            className="w-full h-full object-cover"
                          />
                          {currentStop === index && isAnimating && (
                            <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                          )}
                          {currentStop === index && (
                            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                              Current Stop
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{stop.name}</h3>
                          <p className="text-muted-foreground mb-3">{stop.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="text-center text-muted-foreground text-sm mt-8">
            <p className="font-medium">
              Stop {currentStop + 1} of {allStops.length} • {Math.round(((currentStop + 1) / allStops.length) * 100)}%
              Complete
            </p>
            {isAnimating && (
              <p className="text-xs mt-2 text-primary animate-pulse">Car traveling to next destination...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
