"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EnquiryForm } from "@/components/enquiry-form"
import { ArrowLeft, Check, Car, UserCheck, ShieldCheck, Clock, Star, Gift } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState, useRef } from "react"

const cabImages = [
    {
        src: "/luxury-sedan-car-on-indian-city-street.jpg",
        alt: "Luxury Sedan on City Street",
        caption: "Premium sedans for corporate and personal travel"
    },
    {
        src: "/india-airport-arrival.jpg",
        alt: "Airport pickup service",
        caption: "Reliable airport transfers and city pickups"
    },
    {
        src: "/luxury-sedan-car-on-indian-city-street.jpg",
        alt: "Premium SUV",
        caption: "Luxury SUVs for family trips and rugged terrains"
    }
]

const features = [
    {
        icon: UserCheck,
        title: "Chauffeur Driven",
        description: "Professional, Courteous, and well-trained uniformed chauffeurs"
    },
    {
        icon: Star,
        title: "Premium Fleet",
        description: "Latest models of Luxury Sedans and SUVs in pristine condition"
    },
    {
        icon: ShieldCheck,
        title: "Safe & Secure",
        description: "Real-time GPS tracking and 24/7 emergency assistance"
    },
    {
        icon: Clock,
        title: "Always On Time",
        description: "Guaranteed punctuality for all your important appointments"
    },
    {
        icon: Gift,
        title: "Complimentary Extras",
        description: "Bottled water, newspapers, and hand sanitizers in every car"
    },
    {
        icon: Car,
        title: "Flexible Rentals",
        description: "Point-to-point, hourly rentals, and outstation packages"
    }
]

const amenities = [
    "Plush Leather Interiors",
    "Dual-Zone Climate Control",
    "Bottled Mineral Water",
    "Daily Newspaper / Magazines",
    "USB Mobile Charging Points",
    "WIFI (on request)",
    "Umbrella (per request)",
    "GPS Navigation",
    "Electronic Toll Payment (Fastag)",
    "Comprehensive Insurance",
    "First Aid Kit",
    "Clean & Sanitized Daily"
]

export default function PremiumCabsPage() {
    const [hoveredImage, setHoveredImage] = useState<number | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)
    const scrollPositionRef = useRef(0)

    // Duplicate images for seamless infinite loop
    const duplicatedImages = [...cabImages, ...cabImages, ...cabImages]

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (!scrollContainer) return

        const scrollSpeed = 0.3
        let lastTimestamp = 0

        const animate = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp
            const delta = timestamp - lastTimestamp
            lastTimestamp = timestamp

            if (hoveredImage === null && scrollContainer) {
                scrollPositionRef.current += scrollSpeed * (delta / 16)
                const singleSetWidth = scrollContainer.scrollWidth / 3
                if (scrollPositionRef.current >= singleSetWidth) {
                    scrollPositionRef.current = scrollPositionRef.current - singleSetWidth
                }
                scrollContainer.scrollLeft = scrollPositionRef.current
            }
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [hoveredImage])

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
                <div className="container mx-auto px-4">
                    <Link
                        href="/#services"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                            <Car className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Executive Chauffeur Service</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 tracking-tight">
                            Premium Cab Rentals
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            Arrive in style with our fleet of premium sedans and SUVs.
                            From corporate transfers to luxury personal travel, we provide
                            unmatched class and reliability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Carousel */}
            <section className="py-12 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="relative max-w-full mx-auto">
                        <div
                            ref={scrollContainerRef}
                            className="overflow-hidden"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <div className="flex gap-8 w-max">
                                {duplicatedImages.map((image, index) => (
                                    <div
                                        key={`${image.src}-${index}`}
                                        className="w-[90vw] md:w-[70vw] lg:w-[60vw] flex-shrink-0"
                                        onMouseEnter={() => setHoveredImage(index)}
                                        onMouseLeave={() => setHoveredImage(null)}
                                    >
                                        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                                <p className="text-white text-lg font-medium">{image.caption}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
                            Excellence in Every Mile
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                            <p>
                                At V.I.P. Travels, we understand that sometimes you need more than just a ride.
                                Our premium cab rental service is designed for those who value privacy,
                                luxury, and professional excellence.
                            </p>
                            <p>
                                Whether it's a high-profile corporate meeting, a wedding event, or a personal
                                luxury tour, our fleet of high-end sedans and SUVs is at your disposal.
                                Each vehicle is maintained to showroom standards, ensuring your journey is
                                as smooth as it is stylish.
                            </p>
                            <p>
                                Our chauffeurs are the heartbeat of our service. Beyond their expert driving
                                skills, they are trained in etiquette and local geography, serving as your
                                guide and concierge on the road. Experience the true meaning of V.I.P.
                                treatment with our premium rentals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4">
                            The V.I.P. Experience
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Setting the gold standard in premium car rentals and chauffeur services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-2 border-transparent hover:border-primary/10 transition-all duration-300 hover:shadow-lg">
                                <CardContent className="p-6">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8 text-center">
                            Executive Amenities
                        </h2>
                        <Card className="border-2 border-primary/20">
                            <CardContent className="p-8">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <Check className="w-5 h-5 text-primary" />
                                            </div>
                                            <span className="text-foreground">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Enquiry Form Section */}
            <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4">
                                Book Your Premium Cab
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Leave your details and requirements for a bespoke rental experience
                            </p>
                        </div>
                        <EnquiryForm tourTitle="Premium Cab Rentals" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
