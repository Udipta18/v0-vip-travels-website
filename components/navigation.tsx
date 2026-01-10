"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full text-foreground">
                <circle cx="50" cy="35" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M 30 35 Q 30 55 50 70 Q 70 55 70 35" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="35" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50" y1="15" x2="50" y2="55" stroke="currentColor" strokeWidth="1.5" />
                <rect x="45" y="70" width="10" height="8" fill="currentColor" />
                <text x="50" y="40" fontSize="14" fontWeight="bold" textAnchor="middle" fill="currentColor">VIP</text>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              V.I.P. TRAVELS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#tours" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Tours
            </a>
            <Link
              href="/itinerary"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Itinerary
            </Link>
            <a
              href="/#testimonials"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            </Button>
            <a href="tel:9334812901">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            </Button>
            <button className="p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="/#about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/#services"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="/#tours"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Tours
              </a>
              <Link
                href="/itinerary"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Itinerary
              </Link>
              <a
                href="/#testimonials"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a href="tel:9334812901" className="pt-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
