"use client"

import { useCallback, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, IndianRupee, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"

const itineraries = [
  {
    id: "golden-triangle",
    title: "Golden Triangle Tour",
    description: "Explore Delhi, Agra, and Jaipur - India's most iconic destinations",
    duration: "7 Days",
    people: "For 2-4",
    price: "25,000",
    destinations: 5,
    image: "/taj-mahal-agra-india.jpg",
  },
  {
    id: "bangalore-tirupati",
    title: "Bangalore to Tirupathi",
    description: "Experience divine blessings at one of India's most sacred temples",
    duration: "2 Days",
    people: "For 2",
    price: "2,500",
    destinations: 2,
    image: "/tirupati-temple-architecture-golden-hour-india.jpg",
  },
  {
    id: "munnar-honeymoon",
    title: "Munnar Honeymoon",
    description: "Romantic getaway in the misty hills of Kerala's tea country",
    duration: "3 Days",
    people: "For 2",
    price: "3,500",
    destinations: 3,
    image: "/munnar-tea-plantations-misty-mountains-kerala-roma.jpg",
  },
  {
    id: "karnataka-wildlife",
    title: "Karnataka Wildlife Safari",
    description: "Explore the rich wildlife across Karnataka's national parks",
    duration: "6 Days",
    people: "For 2-4",
    price: "10,000",
    destinations: 4,
    image: "/tiger-in-karnataka-wildlife-sanctuary-bandipur-for.jpg",
  },
]

export function ItineraryList() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="itinerary" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12 gap-6">
          <div className="max-w-3xl text-center w-full">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">
              Explore Our Itineraries
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight text-balance">
              Plan Your Perfect Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4">
              Browse our carefully crafted itineraries and experience the journey with interactive animations
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-full mx-auto group/carousel">
          {/* Arrows positioned on sides */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 rounded-full w-12 h-12 border-primary/20 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-primary/10 hover:text-primary transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 rounded-full w-12 h-12 border-primary/20 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-primary/10 hover:text-primary transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
          >
            <ChevronRight className="w-6 h-6" />
            <span className="sr-only">Next slide</span>
          </Button>

          <div className="overflow-hidden px-1" ref={emblaRef}>
            <div className="flex -ml-8">
              {itineraries.map((itinerary) => (
                <div key={itinerary.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-8 min-w-0 py-4">
                  <div className="h-full group cursor-pointer perspective-1000">
                    <Card
                      className="overflow-hidden border-2 border-transparent hover:border-primary/10 h-full transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl shadow-lg bg-card rounded-2xl flex flex-col"
                    >
                      <div className="p-3">
                        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                          <img
                            src={itinerary.image || "/placeholder.svg"}
                            alt={itinerary.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                      <CardContent className="p-6 pt-2 flex flex-col flex-grow">
                        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {itinerary.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">{itinerary.description}</p>

                        <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border/50 mt-auto">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{itinerary.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4 text-primary" />
                            <span>{itinerary.people}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{itinerary.destinations} Locs</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                            <IndianRupee className="w-5 h-5 text-primary" />
                            <span>{itinerary.price}</span>
                          </div>
                          <Link href={`/itinerary/${itinerary.id}`}>
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group/btn rounded-full px-6">
                              View
                              <MapPin className="w-4 h-4 ml-2 group-hover/btn:scale-110 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
