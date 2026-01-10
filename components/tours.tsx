import Link from "next/link"
import { tours } from "@/lib/tours-data"
import { ArrowRight } from "lucide-react"

export function Tours() {
  return (
    <section id="tours" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">
            Trending Tours
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6 text-balance">
            Upcoming Adventures
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Embark on extraordinary journeys to the world's most captivating destinations
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[320px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={tour.image}
                    alt={tour.subtitle}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tour.gradient} opacity-60 mix-blend-multiply`} />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  {/* Top Section - Title */}
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold mb-1 opacity-90">
                      {tour.title}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-3">
                      {tour.subtitle}
                    </h3>
                  </div>

                  {/* Bottom Section - Days Badge and Dates */}
                  <div>
                    {/* Days Badge */}
                    <div className="inline-flex items-center justify-center bg-white text-gray-900 rounded-full w-14 h-14 mb-3 shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold leading-none">{tour.days}</div>
                        <div className="text-[10px] uppercase font-semibold">Days</div>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="space-y-1">
                      {tour.dates.map((date, idx) => (
                        <p key={idx} className="text-xs font-medium tracking-wide opacity-95">
                          {date}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect - Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
          >
            View All Tours
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
