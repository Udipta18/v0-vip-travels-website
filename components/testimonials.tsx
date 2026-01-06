"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Viswesh Singh",
    role: "Frequent Traveler",
    content:
      "I would like to thank V.I.P. Travels for their exceptional bus service. The sanitized buses and experienced drivers made my journey comfortable and safe.",
    image: "/indian-male-professional-portrait.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Tourist",
    content:
      "Traveling with V.I.P. Travels was a delightful experience. The scenic routes, comfortable buses, and friendly staff made my tour across India unforgettable.",
    image: "/indian-female-professional-portrait-smiling.jpg",
  },
  {
    name: "Amit Dash",
    role: "Business Traveler",
    content:
      "I frequently travel for business, and V.I.P. Travels has become my go-to choice. Their punctuality and comfortable seating make my trips productive and relaxing.",
    image: "/indian-businessman-professional-portrait.jpg",
  },
]

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6 text-balance">
            What Our Travelers Say
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-border bg-card shadow-lg">
                    <CardContent className="p-12 md:p-16 text-center">
                      <Quote className="w-16 h-16 text-primary/20 mb-8 mx-auto" />
                      <p className="text-muted-foreground leading-relaxed mb-10 text-xl md:text-2xl font-light italic text-balance">
                        "{testimonial.content}"
                      </p>
                      <div className="flex flex-col items-center gap-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/10"
                        />
                        <div>
                          <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
