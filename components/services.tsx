import { Card, CardContent } from "@/components/ui/card"
import { Bus, Car, UsersIcon } from "lucide-react"

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
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">Our Services</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6 text-balance">
            Travel Solutions for Every Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From intimate family trips to grand group adventures, we offer comprehensive transportation solutions
            tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
