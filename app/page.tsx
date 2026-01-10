import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Tours } from "@/components/tours"
import { ItineraryList } from "@/components/itinerary-list"
import { WhyChoose } from "@/components/why-choose"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnnouncementBanner />
      <Navigation />
      <Hero />
      <About />
      <Tours />
      <Services />
      <ItineraryList />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
