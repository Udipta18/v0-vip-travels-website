"use client"

import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-xl border-t border-primary/10 py-16 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-3xl font-semibold tracking-tight text-foreground">V.I.P. Travels</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Creating unparalleled travel experiences across India since 1991. Your trusted partner for luxury tours
              and reliable transportation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#tours" className="text-muted-foreground hover:text-primary transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="tel:9334812901"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  933-481-2901
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">info@viptravelsindia.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} V.I.P. Travels India. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
