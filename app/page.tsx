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
import { VideoTestimonials } from "@/components/video-testimonials"
import { AnnouncementBanner } from "@/components/announcement-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnnouncementBanner />
      <Navigation />
      <div className="animate-slide-up" style={{ animationDelay: "0ms" }}><Hero /></div>
      <div className="animate-slide-up" style={{ animationDelay: "100ms" }}><About /></div>
      <div className="animate-slide-up" style={{ animationDelay: "200ms" }}><Tours /></div>
      <div className="animate-slide-up" style={{ animationDelay: "300ms" }}><ItineraryList /></div>
      <div className="animate-slide-up" style={{ animationDelay: "400ms" }}><Services /></div>
      <div className="animate-slide-up" style={{ animationDelay: "500ms" }}><VideoTestimonials /></div>
      <div className="animate-slide-up" style={{ animationDelay: "600ms" }}><WhyChoose /></div>
      <div className="animate-slide-up" style={{ animationDelay: "700ms" }}><CTA /></div>
      <Footer />
    </main>
  )
}
