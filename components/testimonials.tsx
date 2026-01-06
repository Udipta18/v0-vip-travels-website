import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Viswesh Singh",
    role: "Frequent Traveler",
    content:
      "I would like to thank V.I.P. Travels for their exceptional bus service. The sanitized buses and experienced drivers made my journey comfortable and safe.",
    image: "/indian-male-professional-portrait.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Tourist",
    content:
      "Traveling with V.I.P. Travels was a delightful experience. The scenic routes, comfortable buses, and friendly staff made my tour across India unforgettable.",
    image: "/indian-female-professional-portrait-smiling.jpg",
  },
  {
    name: "Amit Dash",
    role: "Business Traveler",
    content:
      "I frequently travel for business, and V.I.P. Travels has become my go-to choice. Their punctuality and comfortable seating make my trips productive and relaxing.",
    image: "/indian-businessman-professional-portrait.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6 text-balance">
            What Our Travelers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
