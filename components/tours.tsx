import Link from "next/link"
import { tours } from "@/lib/tours-data"
import { ArrowRight } from "lucide-react"

export function Tours() {
  // Filter to show only upcoming tours
  const upcomingTours = tours.filter(tour => tour.status === "upcoming")

  return (
    <section id="tours" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16 gap-6">
          <div className="max-w-3xl text-center w-full">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">
              Trending Tours
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6 text-balance">
              Upcoming Adventures
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Embark on extraordinary journeys to the world's most captivating destinations
            </p>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {upcomingTours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className="group block h-full perspective-1000"
            >
              <div className="relative overflow-hidden bg-card rounded-2xl border-2 border-transparent hover:border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col">
                <div className="p-3">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted relative">
                    <img
                      src={tour.image}
                      alt={tour.subtitle}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 shadow-md transition-colors duration-700 hover:bg-white">
                      {/* Changed to a darker amber/bronze color for readability */}
                      <span className="text-xs font-bold text-amber-700 group-hover:text-amber-800 transition-colors">{tour.days} Days</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-2 flex flex-col flex-grow">
                  {/* Darker color for the subtitle/category */}
                  <p className="text-xs uppercase tracking-wider font-bold mb-2 text-amber-700/90 group-hover:text-amber-800 transition-colors duration-500">
                    {tour.title}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl font-bold leading-tight mb-3 text-foreground group-hover:text-primary transition-colors">
                    {tour.subtitle}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex flex-wrap gap-2">
                      {tour.dates.slice(0, 2).map((date, idx) => (
                        /* Explicitly setting text-foreground (dark) for dates */
                        <span key={idx} className="bg-muted px-2 py-1 rounded-md text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">{date}</span>
                      ))}
                      {tour.dates.length > 2 && <span className="text-xs self-center">+{tour.dates.length - 2} more</span>}
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 font-medium"
          >
            View All Tours
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
