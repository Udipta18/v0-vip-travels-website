"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle, PhoneCall } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const navLinks = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Tours", href: "/#tours", id: "tours" },
    { name: "Itinerary", href: "/#itinerary", id: "itinerary" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Testimonials", href: "/#testimonials", id: "testimonials" },
  ]

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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-all ${activeSection === link.id
                    ? "text-primary font-bold bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5 hover:font-bold"
                  }`}
              >
                {link.name}
              </Link>
            ))}


            <a href="https://api.whatsapp.com/send?phone=9334812901" target="_blank" rel="noopener noreferrer">
              <Button
                variant="default"
                size="icon"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full w-10 h-10 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                aria-label="Contact on WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Button>
            </a>
            <a href="tel:9334812901">
              <Button
                variant="default"
                size="icon"
                className="bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 rounded-full w-10 h-10"
                aria-label="Call Now"
              >
                <PhoneCall className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">

            <button className="p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-all ${activeSection === link.id
                      ? "text-primary font-bold bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/10 hover:font-bold"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a href="https://api.whatsapp.com/send?phone=9334812901" target="_blank" rel="noopener noreferrer" className="pt-2">
                <Button variant="outline" className="w-full justify-start text-[#25D366] border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] transition-all">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </Button>
              </a>
              <a href="tel:9334812901" className="pt-2">
                <Button className="w-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95 transition-all duration-300 rounded-full">
                  <PhoneCall className="w-4 h-4 mr-2" />
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
