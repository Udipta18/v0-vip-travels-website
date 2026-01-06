"use client"

import { useState, useEffect } from "react"
import { MapPin, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Destination {
  name: string
  description: string
  image: string
  day: string
}

interface ItineraryJourneyProps {
  title: string
  destinations: Destination[]
}

export function ItineraryJourney({ title, destinations }: ItineraryJourneyProps) {
  const [currentStop, setCurrentStop] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStop((prev) => {
        if (prev < destinations.length - 1) {
          setIsAnimating(true)
          setTimeout(() => setIsAnimating(false), 2800)
          return prev + 1
        }
        return prev
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [destinations.length])

  const resetJourney = () => {
    setCurrentStop(0)
    setIsAnimating(false)
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
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="relative min-w-max px-8">
              {/* Road/Path Line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-border" />

              <div
                className="absolute top-8 left-0 h-1 bg-primary transition-all duration-[3000ms] ease-in-out"
                style={{
                  width: `${(currentStop / (destinations.length - 1)) * 100}%`,
                }}
              />

              {/* Destinations in horizontal layout */}
              <div className="flex gap-0 relative">
                {destinations.map((dest, index) => (
                  <div
                    key={index}
                    className={`relative flex-shrink-0 px-8 transition-all duration-700 ${
                      index <= currentStop ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
                    }`}
                    style={{ width: "400px" }}
                  >
                    {/* Location marker */}
                    <div className="flex flex-col items-center mb-6 relative z-20">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          currentStop === index
                            ? "bg-primary text-primary-foreground scale-125 shadow-xl ring-4 ring-primary/30"
                            : index < currentStop
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="mt-2 text-xs font-semibold text-foreground">{dest.day}</div>
                    </div>

                    {/* Destination card */}
                    <div
                      className={`bg-card border border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                        currentStop === index ? "ring-2 ring-primary shadow-2xl scale-105" : ""
                      } ${index > currentStop ? "blur-sm" : ""}`}
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={dest.image || "/placeholder.svg"}
                          alt={dest.name}
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
                        <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{dest.name}</h3>
                        <p className="text-muted-foreground mb-3">{dest.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="absolute top-2 transition-all duration-[3000ms] ease-in-out z-30 pointer-events-none"
                style={{
                  left: `calc(${(currentStop / (destinations.length - 1)) * 100}% + ${200}px)`,
                }}
              >
                <div className="relative">
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
            </div>
          </div>

          {/* Progress indicator */}
          <div className="text-center text-muted-foreground text-sm mt-8">
            <p className="font-medium">
              Destination {currentStop + 1} of {destinations.length} •{" "}
              {Math.round(((currentStop + 1) / destinations.length) * 100)}% Complete
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
