"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EnquiryForm } from "@/components/enquiry-form"
import { ArrowLeft, Check, Users, Clock, Shield, Wifi, Coffee, MapPin } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState, useRef } from "react"

const tempoImages = [
    {
        src: "/tempo_front.jpeg",
        alt: "Tempo Traveller on scenic road",
        caption: "Perfect for group excursions and family trips"
    },
    {
        src: "/tempo_inside.jpeg",
        alt: "Tempo Traveller Interior",
        caption: "Spacious and comfortable seating arrangements"
    },
    {
        src: "/tempo_back.jpeg",
        alt: "Tempo Traveller Exterior",
        caption: "Modern and reliable fleet for all terrains"
    }
]

const features = [
    {
        icon: Users,
        title: "Spacious Interiors",
        description: "Ample legroom and headspace for a comfortable group journey"
    },
    {
        icon: MapPin,
        title: "Versatile Travel",
        description: "Ideal for city tours, outstation trips, and mountain terrains"
    },
    {
        icon: Shield,
        title: "Safety Standard",
        description: "Regularly serviced vehicles with expert professional drivers"
    },
    {
        icon: Wifi,
        title: "Entertainment",
        description: "Equipped with music systems and optional WiFi on request"
    },
    {
        icon: Coffee,
        title: "Comfort Stops",
        description: "Planned itineraries with comfortable breaks for long journeys"
    },
    {
        icon: Clock,
        title: "Reliable Service",
        description: "Punctual pickups and well-planned routes for timely arrivals"
    }
]

const amenities = [
    "Air Conditioning",
    "Pushback Comfortable Seats",
    "Ample Luggage Space",
    "Music System / LED TV",
    "Charging Ports",
    "First Aid Kit",
    "Experienced Drivers",
    "Clean & Sanitized Interiors",
    "GPS Tracking",
    "Carrier for Extra Luggage",
    "Fire Extinguisher",
    "24/7 Support"
]

export default function TempoTravellerPage() {
    const [hoveredImage, setHoveredImage] = useState<number | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)
    const scrollPositionRef = useRef(0)

    // Duplicate images for seamless infinite loop
    const duplicatedImages = [...tempoImages, ...tempoImages, ...tempoImages]

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
                            <Users className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Group Travel Excellence</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 tracking-tight">
                            Tempo Traveller Rentals
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            The perfect solution for small groups, families, and corporate teams.
                            Our 9-26 seater tempo travellers offer the perfect blend of intimacy and comfort.
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
                            Intimate Group Travel Redefined
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                            <p>
                                Our Tempo Traveller services are designed to bridge the gap between private cars and large coaches.
                                Ideal for groups of 9 to 26 people, these vehicles provide a cozy yet spacious environment for
                                long-distance journeys, local sightseeing, or airport transfers.
                            </p>
                            <p>
                                Whether you're heading to the Himalayas for an adventure or touring the historic cities of Rajasthan,
                                our tempo travellers ensure that your group stays together and enjoys every moment of the trip.
                                With ergonomically designed seats and efficient climate control, the journey is as pleasant as the destination.
                            </p>
                            <p>
                                We take pride in our well-maintained fleet and professional chauffeurs who have extensive experience
                                navigating diverse Indian terrains. Safety, punctuality, and customer satisfaction are at the core
                                of our service.
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
                            Smart Features for Group Trips
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Designed to make every group outing comfortable and hassle-free
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
                            Onboard Comforts
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
                                Reserve Your Tempo Traveller
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Share your travel plans with us for a personalized group travel quote
                            </p>
                        </div>
                        <EnquiryForm tourTitle="Tempo Traveller Services" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
