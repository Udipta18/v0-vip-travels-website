import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { tours } from "@/lib/tours-data"
import { ArrowRight, Calendar, IndianRupee, Clock } from "lucide-react"

export default function AllToursPage() {
    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">
                            Explore the World
                        </p>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight mb-6">
                            All Tours
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Browse our complete collection of carefully curated travel experiences to destinations around the globe
                        </p>
                    </div>
                </div>
            </section>

            {/* Tours Grid */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {tours.map((tour) => (
                            <Link key={tour.id} href={`/tours/${tour.id}`} className="group block">
                                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[400px]">
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
                                            <p className="text-xs uppercase tracking-wider font-semibold mb-1 opacity-90">{tour.title}</p>
                                            <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-3">
                                                {tour.subtitle}
                                            </h3>
                                            <p className="text-sm opacity-90 line-clamp-2">{tour.description}</p>
                                        </div>

                                        {/* Bottom Section - Details */}
                                        <div>
                                            {/* Info Cards */}
                                            <div className="grid grid-cols-2 gap-3 mb-4">
                                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                                                    <div className="flex items-center gap-2 text-xs font-medium">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{tour.days} Days</span>
                                                    </div>
                                                </div>
                                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                                                    <div className="flex items-center gap-2 text-xs font-medium">
                                                        <IndianRupee className="w-4 h-4" />
                                                        <span>₹{(tour.price.perPerson / 1000).toFixed(0)}K</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Dates */}
                                            <div className="space-y-1">
                                                {tour.dates.slice(0, 2).map((date, idx) => (
                                                    <p key={idx} className="text-xs font-medium tracking-wide opacity-95 flex items-center gap-2">
                                                        <Calendar className="w-3 h-3" />
                                                        {date}
                                                    </p>
                                                ))}
                                                {tour.dates.length > 2 && (
                                                    <p className="text-xs font-medium opacity-75">+{tour.dates.length - 2} more dates</p>
                                                )}
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
                </div>
            </section>

            <Footer />
        </div>
    )
}
