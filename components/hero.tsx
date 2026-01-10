"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { tours } from "@/lib/tours-data"

export function Hero() {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(tours)
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Filter tours based on search query
  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
    } else {
      const filtered = tours.filter((tour) =>
        tour.title.toLowerCase().includes(query.toLowerCase()) ||
        tour.subtitle.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    }
  }, [query])

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = () => {
    if (query.trim()) {
      // Find exact match or just redirect to tours page with query param if we had a generic search page
      // For now, if there is at least one result, go to the first one, or just do nothing/show alert
      if (results.length > 0) {
        router.push(`/tours/${results[0].id}`)
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/majestic-indian-temple-with-mountains-at-sunset--w.jpg" alt="Indian landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight text-balance animate-slide-up" style={{ animationDelay: "100ms" }}>
            Discover India's Hidden Wonders
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-balance leading-relaxed animate-slide-up" style={{ animationDelay: "200ms" }}>
            Curated luxury travel experiences backed by 30 years of excellence. Journey through India's most captivating
            destinations with unmatched comfort and care.
          </p>

          {/* Search Bar Container */}
          <div ref={wrapperRef} className="relative max-w-2xl mx-auto pt-8 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground z-10" />
              <Input
                type="text"
                placeholder="Search for your dream destination (e.g. Kenya, Spain, Canada)..."
                className="pl-12 pr-4 h-14 rounded-full bg-white/95 border-0 text-foreground shadow-2xl focus-visible:ring-2 focus-visible:ring-primary text-base placeholder:text-muted-foreground/80"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setIsOpen(true)
                }}
                onFocus={() => setIsOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch()
                  }
                }}
              />
              <Button
                className="absolute right-1.5 h-11 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>

            {/* Dropdown Results */}
            {isOpen && results.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden text-left z-50">
                <ul className="py-2 max-h-[300px] overflow-y-auto">
                  {results.map((tour) => (
                    <li key={tour.id}>
                      <button
                        onClick={() => router.push(`/tours/${tour.id}`)}
                        className="w-full px-6 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-sm">{tour.title} {tour.subtitle}</p>
                          <p className="text-xs text-muted-foreground">{tour.days} Days • {tour.dates.length} Departures</p>
                        </div>
                        <div className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          View Tour
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
