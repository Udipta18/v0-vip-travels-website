import { Sparkles, BadgeCheck, Lock, Award } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Clean Vehicles",
    description: "Health and safety is our top priority. All vehicles are thoroughly sanitized before every journey.",
  },
  {
    icon: BadgeCheck,
    title: "Best Rates",
    description: "Market-leading prices with complete transparency. No hidden fees, no surprises.",
  },
  {
    icon: Lock,
    title: "Secure Booking",
    description: "Your online booking is genuine and trustworthy with secure payment processing.",
  },
  {
    icon: Award,
    title: "30 Years of Trust",
    description: "Customer safety and hospitality are our highest priorities, proven over three decades.",
  },
]

export function WhyChoose() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">
              Our Promise
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-foreground text-balance">
              Why Choose V.I.P. Travels
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We focus on providing professional travel solutions with a personal touch. Our extensive network and
              decades of experience ensure your journey is exceptional.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-primary/10 text-primary rounded-xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
