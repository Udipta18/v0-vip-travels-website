"use client"

import { useEffect, useState, useRef } from "react"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Sample video data - replace with real testimonials later
const videos = [
    {
        id: "dQw4w9WgXcQ",
        title: "Amazing Family Trip to Manali",
        author: "Sharma Family",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
        id: "LXb3EKWsInQ",
        title: "Unforgettable Journey to Goa",
        author: "Rahul & Friends",
        thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    },
    {
        id: "ysz5S6P_ks0",
        title: "Safe & Comfortable Business Travel",
        author: "Amit Patel",
        thumbnail: "https://img.youtube.com/vi/ysz5S6P_ks0/maxresdefault.jpg",
    },
    {
        id: "jNQXAC9IVRw",
        title: "Best Bus Service in Delhi",
        author: "Priya Singh",
        thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    },
]

export function VideoTestimonials() {
    const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)
    const scrollPositionRef = useRef(0)

    // Duplicate videos for seamless infinite loop
    const duplicatedVideos = [...videos, ...videos, ...videos]

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (!scrollContainer) return

        const scrollSpeed = 0.5 // pixels per frame (adjust for speed)
        let lastTimestamp = 0

        const animate = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp
            const delta = timestamp - lastTimestamp
            lastTimestamp = timestamp

            if (!hoveredVideo && scrollContainer) {
                // Move right to left (increase scrollLeft)
                scrollPositionRef.current += scrollSpeed * (delta / 16) // normalize to ~60fps

                // Get the width of one set of videos
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
    }, [hoveredVideo])

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-12 gap-6">
                    <div className="max-w-3xl text-center w-full">
                        <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">
                            Testimonials
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight text-balance">
                            Feedback from our travellers
                        </h2>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-full mx-auto">
                    <div
                        ref={scrollContainerRef}
                        className="overflow-hidden"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <div className="flex gap-8 w-max">
                            {duplicatedVideos.map((video, index) => (
                                <div
                                    key={`${video.id}-${index}`}
                                    className="w-[90vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0"
                                >
                                    <div className="h-full group cursor-pointer">
                                        <Card
                                            className="overflow-hidden border-2 border-transparent hover:border-primary/10 h-full transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl shadow-lg bg-card rounded-2xl"
                                            onMouseEnter={() => setHoveredVideo(`${video.id}-${index}`)}
                                            onMouseLeave={() => setHoveredVideo(null)}
                                            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                                        >
                                            <div className="p-3">
                                                <div className="relative aspect-video bg-muted overflow-hidden rounded-xl">
                                                    {hoveredVideo === `${video.id}-${index}` ? (
                                                        <iframe
                                                            width="100%"
                                                            height="100%"
                                                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                                                            title={video.title}
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            className="absolute inset-0 w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <>
                                                            <img
                                                                src={video.thumbnail}
                                                                alt={video.title}
                                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                            />
                                                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                                                                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                                                    <Play className="w-6 h-6 ml-1 text-primary group-hover:text-white" />
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <CardContent className="p-6 relative">
                                                <h3 className="font-serif text-xl font-semibold mb-2 line-clamp-1 group-hover:text-primary transition-colors duration-300">
                                                    {video.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                                    {video.author}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
