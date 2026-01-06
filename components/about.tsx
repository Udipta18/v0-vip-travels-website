import { Award, Shield, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Since 1991</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight text-balance">
              Three Decades of Travel Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 1991 by Mr. Narayan Chandra Nag, V.I.P. Travels has been crafting unforgettable journeys
              across India for over 30 years. Our commitment to delivering customer-centric travel services with
              unwavering quality and dedication sets us apart.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in creating unparalleled experiences for every traveler, consistently striving to exceed
              expectations through personalized service and attention to detail.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <p className="font-serif text-3xl font-semibold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <p className="font-serif text-3xl font-semibold text-foreground">10,000+</p>
                <p className="text-sm text-muted-foreground">Happy Travelers</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="/luxury-tour-bus-on-indian-highway--professional-tr.jpg"
                alt="V.I.P. Travels luxury bus"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-lg shadow-xl border border-border max-w-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Safe & Reliable</p>
                  <p className="text-sm text-muted-foreground">
                    Professional, vaccinated drivers and sanitized vehicles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
