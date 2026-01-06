import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight text-balance">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let us help you plan the perfect travel experience. Our team is available 24/7 to assist with your booking
            and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="tel:9334812901">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 933-481-2901
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=9334812901" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base w-full sm:w-auto bg-transparent">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
