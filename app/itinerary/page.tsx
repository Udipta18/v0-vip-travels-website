"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, IndianRupee, MapPin } from "lucide-react"
import Link from "next/link"

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

export default function ItineraryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">
              Available Itineraries
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6 text-balance">
              Plan Your Perfect Journey
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Browse our carefully crafted itineraries and click to see the detailed journey animation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {itineraries.map((itinerary) => (
              <Card
                key={itinerary.id}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={itinerary.image || "/placeholder.svg"}
                    alt={itinerary.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                    {itinerary.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{itinerary.description}</p>

                  <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border">
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
                      <span>{itinerary.destinations} Destinations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <IndianRupee className="w-4 h-4 text-primary" />
                      <span>{itinerary.price}/- per person</span>
                    </div>
                  </div>

                  <Link href={`/itinerary/${itinerary.id}`}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                      View Journey Animation
                      <MapPin className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
