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
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-balance">
              Why Choose V.I.P. Travels
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We focus on providing professional travel solutions with a personal touch. Our extensive network and
              decades of experience ensure your journey is exceptional.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex p-4 bg-primary-foreground/10 rounded-full">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold">{feature.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
