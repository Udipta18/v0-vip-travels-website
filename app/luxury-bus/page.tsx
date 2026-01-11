"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EnquiryForm } from "@/components/enquiry-form"
import { ArrowLeft, Check, Bus, Users, Clock, Shield, Wifi, Coffee } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState, useRef } from "react"

const busImages = [
    {
        src: "/tourist_bus_silver.jpeg",
        alt: "Luxury Bus with Comfortable Reclining Seat",
        caption: "Premium reclining seats with ample legroom"
    },
    {
        src: "/sethu_express.jpeg",
        alt: "Luxury Bus Modern Coach",
        caption: "Modern fleet with sleek design"
    },
    {
        src: "/luxury_bus_amenities_1768157911351.png",
        alt: "Luxury Bus Amenities - Entertainment Systems",
        caption: "Individual entertainment screens and USB charging"
    }
]

const features = [
    {
        icon: Bus,
        title: "Premium Fleet",
        description: "Modern, well-maintained luxury coaches with the latest amenities"
    },
    {
        icon: Users,
        title: "Spacious Seating",
        description: "Comfortable reclining seats with extra legroom for a relaxed journey"
    },
    {
        icon: Shield,
        title: "Safety First",
        description: "Experienced drivers and regular vehicle maintenance for your safety"
    },
    {
        icon: Wifi,
        title: "WiFi Enabled",
        description: "Stay connected throughout your journey with onboard WiFi"
    },
    {
        icon: Coffee,
        title: "Refreshments",
        description: "Complimentary water and snacks on longer journeys"
    },
    {
        icon: Clock,
        title: "Punctual Service",
        description: "On-time departures and arrivals with professional service"
    }
]

const amenities = [
    "Air Conditioning",
    "Reclining Pushback Seats",
    "Individual Entertainment Screens",
    "USB Charging Ports",
    "Reading Lights",
    "Spacious Luggage Storage",
    "Clean Washrooms",
    "Emergency Exits",
    "First Aid Kit",
    "GPS Tracking",
    "Professional Drivers",
    "24/7 Customer Support"
]

export default function LuxuryBusPage() {
    const [hoveredImage, setHoveredImage] = useState<number | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)
    const scrollPositionRef = useRef(0)

    // Duplicate images for seamless infinite loop
    const duplicatedImages = [...busImages, ...busImages, ...busImages]

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (!scrollContainer) return

        const scrollSpeed = 0.3 // pixels per frame (adjust for speed)
        let lastTimestamp = 0

        const animate = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp
            const delta = timestamp - lastTimestamp
            lastTimestamp = timestamp

            if (hoveredImage === null && scrollContainer) {
                // Move right to left (increase scrollLeft)
                scrollPositionRef.current += scrollSpeed * (delta / 16) // normalize to ~60fps

                // Get the width of one set of images
                const singleSetWidth = scrollContainer.scrollWidth / 3

                // Reset position when we've scrolled past one complete set
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
                            <Bus className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Premium Transportation</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 tracking-tight">
                            Luxury Bus Services
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            Experience the pinnacle of comfort and convenience with our premium luxury bus services.
                            Perfect for group travel, corporate events, weddings, and long-distance journeys across India.
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
                            Travel in Style and Comfort
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                            <p>
                                Our luxury bus services redefine group travel with an unparalleled blend of comfort, safety, and style.
                                Whether you're planning a corporate outing, a family reunion, a wedding celebration, or a pilgrimage,
                                our premium fleet ensures every journey is memorable.
                            </p>
                            <p>
                                Each of our luxury coaches is equipped with state-of-the-art amenities designed to make your travel
                                experience as comfortable as possible. From plush reclining seats to individual entertainment systems,
                                we've thought of everything to ensure you arrive at your destination refreshed and relaxed.
                            </p>
                            <p>
                                With experienced, professional drivers who prioritize your safety and comfort, you can sit back and
                                enjoy the journey. Our buses are regularly maintained and undergo strict safety checks to ensure the
                                highest standards of reliability and performance.
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
                            Why Choose Our Luxury Buses
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Experience premium features designed for your comfort and convenience
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
                            Premium Amenities
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
                                Book Your Luxury Bus
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Fill out the form below and our team will get back to you within 24 hours with a customized quote
                            </p>
                        </div>
                        <EnquiryForm tourTitle="Luxury Bus Services" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
