import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-3xl font-semibold tracking-tight">V.I.P. Travels</h3>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              Creating unparalleled travel experiences across India since 1991. Your trusted partner for luxury tours
              and reliable transportation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#tours" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:9334812901"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  933-481-2901
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">info@viptravelsindia.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} V.I.P. Travels India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
