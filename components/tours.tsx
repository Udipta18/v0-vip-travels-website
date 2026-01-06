import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, IndianRupee, ArrowRight } from "lucide-react"
import Link from "next/link"

const tours = [
  {
    title: "Bangalore to Tirupathi",
    description: "Experience divine blessings at one of India's most sacred temples",
    duration: "2 Days",
    people: "For 2",
    price: "2,500",
    image: "/tirupati-temple-architecture-golden-hour-india.jpg",
  },
  {
    title: "Munnar Honeymoon",
    description: "Romantic getaway in the misty hills of Kerala's tea country",
    duration: "3 Days",
    people: "For 2",
    price: "3,500",
    image: "/munnar-tea-plantations-misty-mountains-kerala-roma.jpg",
  },
  {
    title: "Dudhsagar Falls Tour",
    description: "Witness the majestic four-tiered waterfall in all its glory",
    duration: "2 Days",
    people: "For 2",
    price: "5,500",
    image: "/dudhsagar-waterfall-goa-india-surrounded-by-lush-f.jpg",
  },
  {
    title: "Karnataka Wildlife Safari",
    description: "Explore the rich wildlife across Karnataka's national parks",
    duration: "6 Days",
    people: "For 2",
    price: "10,000",
    image: "/tiger-in-karnataka-wildlife-sanctuary-bandipur-for.jpg",
  },
]

export function Tours() {
  return (
    <section id="tours" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">Tour Packages</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6 text-balance">
            Curated Journeys Across India
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover handpicked destinations and immersive experiences designed to create lasting memories.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tours.map((tour, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">{tour.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{tour.description}</p>

                {/* Tour Details */}
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{tour.people}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <IndianRupee className="w-4 h-4 text-primary" />
                    <span>{tour.price}/- per person</span>
                  </div>
                </div>

                <Link href="/itinerary">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                    View Itinerary
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
