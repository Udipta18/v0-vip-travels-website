"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Sample video data - replace with real testimonials later
const videos = [
    {
        id: "dQw4w9WgXcQ", // Placeholder: Rick Roll (classic placeholder)
        title: "Amazing Family Trip to Manali",
        author: "Sharma Family",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
        id: "LXb3EKWsInQ", // Placeholder: 4K Nature
        title: "Unforgettable Journey to Goa",
        author: "Rahul & Friends",
        thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    },
    {
        id: "ysz5S6P_ks0", // Placeholder: SpaceX
        title: "Safe & Comfortable Business Travel",
        author: "Amit Patel",
        thumbnail: "https://img.youtube.com/vi/ysz5S6P_ks0/maxresdefault.jpg",
    },
    {
        id: "jNQXAC9IVRw", // Placeholder: Me at the zoo
        title: "Best Bus Service in Delhi",
        author: "Priya Singh",
        thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    },
]

export function VideoTestimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
    })

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback((emblaApi: any) => {
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on("reInit", onSelect)
        emblaApi.on("select", onSelect)
    }, [emblaApi, onSelect])

    // State to track which video is currently hovering
    const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4">
                {/* Header with Navigation */}
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
                <div className="relative max-w-full mx-auto group/carousel">
                    {/* Arrows positioned on sides */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollPrev}
                        disabled={!prevBtnEnabled}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 rounded-full w-12 h-12 border-primary/20 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-primary/10 hover:text-primary transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
                    >
                        <ChevronLeft className="w-6 h-6" />
                        <span className="sr-only">Previous slide</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 rounded-full w-12 h-12 border-primary/20 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-primary/10 hover:text-primary transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
                    >
                        <ChevronRight className="w-6 h-6" />
                        <span className="sr-only">Next slide</span>
                    </Button>
                    <div className="overflow-hidden px-1" ref={emblaRef}>
                        <div className="flex -ml-8">
                            {videos.map((video) => (
                                <div key={video.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-8 min-w-0 py-4">
                                    <div className="h-full group cursor-pointer perspective-1000">
                                        <Card
                                            className="overflow-hidden border-2 border-transparent hover:border-primary/10 h-full transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl shadow-lg bg-card rounded-2xl"
                                            onMouseEnter={() => setHoveredVideo(video.id)}
                                            onMouseLeave={() => setHoveredVideo(null)}
                                            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                                        >
                                            <div className="p-3">
                                                <div className="relative aspect-video bg-muted overflow-hidden rounded-xl">
                                                    {hoveredVideo === video.id ? (
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
                </div >
            </div >
        </section >
    )
}
