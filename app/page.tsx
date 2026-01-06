import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { ItineraryList } from "@/components/itinerary-list"
import { WhyChoose } from "@/components/why-choose"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <ItineraryList />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
