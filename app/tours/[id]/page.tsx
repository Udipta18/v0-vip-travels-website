import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EnquiryForm } from "@/components/enquiry-form"
import { tours } from "@/lib/tours-data"
import { ArrowLeft, Calendar, IndianRupee, Check, X, MapPin, Clock } from "lucide-react"

export async function generateStaticParams() {
    return tours.map((tour) => ({
        id: tour.id,
    }))
}

export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const tour = tours.find((t) => t.id === id)

    if (!tour) {
        notFound()
    }

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img src={tour.image} alt={tour.subtitle} className="w-full h-full object-cover" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${tour.gradient} opacity-70 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-16">
                    <Link
                        href="/#tours"
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 w-fit"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Tours
                    </Link>

                    <p className="text-white/90 text-sm uppercase tracking-widest font-semibold mb-2">{tour.title}</p>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">{tour.subtitle}</h1>

                    <div className="flex flex-wrap gap-6 text-white">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span className="font-semibold">{tour.days} Days</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span className="font-semibold">{tour.dates[0]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IndianRupee className="w-5 h-5" />
                            <span className="font-semibold">
                                {tour.price.perPerson.toLocaleString("en-IN")} per person
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column - Tour Details */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">Tour Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">{tour.description}</p>
                        </section>

                        {/* Highlights */}
                        <section>
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">Tour Highlights</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {tour.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                                <MapPin className="w-4 h-4 text-primary" />
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">{highlight}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Itinerary */}
                        <section>
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                                Day-by-Day Itinerary
                            </h2>
                            <div className="space-y-8">
                                {tour.itinerary.map((day, index) => (
                                    <div key={day.day} className="bg-card text-card-foreground rounded-xl border border-l-4 border-l-primary shadow-sm overflow-hidden">
                                        <div className="grid md:grid-cols-2 gap-0">
                                            {/* Image Section */}
                                            {day.image && (
                                                <div className="relative h-64 md:h-full">
                                                    <img
                                                        src={day.image}
                                                        alt={day.title}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}

                                            {/* Content Section */}
                                            <div className={`p-6 ${!day.image ? "md:col-span-2" : ""}`}>
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className="flex-shrink-0">
                                                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                                                            {day.day}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-1">
                                                            {day.title}
                                                        </h3>
                                                        {day.meals && (
                                                            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                                                Meals: {day.meals}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                <p className="text-muted-foreground leading-relaxed mb-4">
                                                    {day.description}
                                                </p>

                                                {day.activities && day.activities.length > 0 && (
                                                    <ul className="space-y-2">
                                                        {day.activities.map((activity, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                                <span>{activity}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <section className="grid md:grid-cols-2 gap-8">
                            {/* Inclusions */}
                            <div>
                                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <Check className="w-6 h-6 text-green-600" />
                                    What's Included
                                </h3>
                                <ul className="space-y-3">
                                    {tour.inclusions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                            <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Exclusions */}
                            <div>
                                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <X className="w-6 h-6 text-red-600" />
                                    What's Not Included
                                </h3>
                                <ul className="space-y-3">
                                    {tour.exclusions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                            <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Enquiry Form (Sticky on Desktop) */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
                            <EnquiryForm tourTitle={`${tour.title} - ${tour.subtitle}`} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
