import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bus, Car, UsersIcon } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Bus,
    title: "Luxury Bus Services",
    description:
      "Experience comfort with our fleet of luxury buses featuring reclining seats, air conditioning, and modern amenities for group travel.",
    image: "/luxury-coach-bus-interior-with-comfortable-seats.jpg",
  },
  {
    icon: UsersIcon,
    title: "Tempo Traveller",
    description:
      "Perfect for small groups and families. Our tempo travellers offer spacious interiors and smooth rides for memorable journeys.",
    image: "/tempo-traveller-van-on-scenic-mountain-road-india.jpg",
  },
  {
    icon: Car,
    title: "Premium Cab Rentals",
    description:
      "Private, comfortable transportation for individuals and couples. Choose from a range of premium vehicles for your travel needs.",
    image: "/luxury-sedan-car-on-indian-city-street.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16 gap-6">
          <div className="max-w-3xl text-center w-full">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">Our Services</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight text-balance">
              Travel Solutions for Every Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              From intimate family trips to grand group adventures, we offer comprehensive transportation solutions
              tailored to your needs.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="h-full group cursor-pointer perspective-1000">
              <Card
                className="overflow-hidden border-2 border-transparent hover:border-primary/10 h-full transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl shadow-lg bg-card rounded-2xl flex flex-col"
              >
                <div className="p-3">
                  <div className="aspect-[3/2] overflow-hidden rounded-xl bg-muted">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <CardContent className="p-8 pt-4 flex flex-col flex-grow">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  {service.title === "Luxury Bus Services" && (
                    <div className="mt-6">
                      <Link href="/luxury-bus">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold rounded-full">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
