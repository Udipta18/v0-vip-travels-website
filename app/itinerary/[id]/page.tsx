"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ItineraryJourney } from "@/components/itinerary-journey"
import { useParams } from "next/navigation"

const itineraryData: Record<string, any> = {
  "golden-triangle": {
    title: "Golden Triangle Tour",
    destinations: [
      {
        name: "Delhi",
        description: "India's vibrant capital with historic Red Fort",
        image: "/delhi-red-fort-india.jpg",
        day: "Day 1-2",
      },
      {
        name: "Agra",
        description: "Home to the magnificent Taj Mahal",
        image: "/taj-mahal-agra-india.jpg",
        day: "Day 3-4",
      },
      {
        name: "Jaipur",
        description: "The Pink City with stunning palaces",
        image: "/jaipur-pink-city-amber-fort.jpg",
        day: "Day 5-6",
      },
      {
        name: "Udaipur",
        description: "City of Lakes with romantic atmosphere",
        image: "/udaipur-lake-palace-india.jpg",
        day: "Day 7",
      },
      {
        name: "Jodhpur",
        description: "The Blue City with Mehrangarh Fort",
        image: "/jodhpur-blue-city-mehrangarh-fort.jpg",
        day: "Day 8",
      },
    ],
  },
  "bangalore-tirupati": {
    title: "Bangalore to Tirupathi",
    destinations: [
      {
        name: "Bangalore",
        description: "Start your spiritual journey",
        image: "/delhi-red-fort-india.jpg",
        day: "Day 1",
      },
      {
        name: "Tirupati",
        description: "Sacred temple of Lord Venkateshwara",
        image: "/tirupati-temple-architecture-golden-hour-india.jpg",
        day: "Day 2",
      },
    ],
  },
  "munnar-honeymoon": {
    title: "Munnar Honeymoon",
    destinations: [
      {
        name: "Cochin",
        description: "Gateway to Kerala backwaters",
        image: "/delhi-red-fort-india.jpg",
        day: "Day 1",
      },
      {
        name: "Munnar",
        description: "Tea plantations and misty hills",
        image: "/munnar-tea-plantations-misty-mountains-kerala-roma.jpg",
        day: "Day 2",
      },
      {
        name: "Thekkady",
        description: "Wildlife sanctuary and spice gardens",
        image: "/taj-mahal-agra-india.jpg",
        day: "Day 3",
      },
    ],
  },
  "karnataka-wildlife": {
    title: "Karnataka Wildlife Safari",
    destinations: [
      {
        name: "Bangalore",
        description: "Starting point of your adventure",
        image: "/delhi-red-fort-india.jpg",
        day: "Day 1",
      },
      {
        name: "Bandipur",
        description: "Tiger reserve with diverse wildlife",
        image: "/tiger-in-karnataka-wildlife-sanctuary-bandipur-for.jpg",
        day: "Day 2-3",
      },
      {
        name: "Nagarhole",
        description: "Elephant country with lush forests",
        image: "/taj-mahal-agra-india.jpg",
        day: "Day 4-5",
      },
      {
        name: "Mysore",
        description: "Royal palace city",
        image: "/jaipur-pink-city-amber-fort.jpg",
        day: "Day 6",
      },
    ],
  },
}

export default function ItineraryDetailPage() {
  const params = useParams()
  const id = params.id as string
  const itinerary = itineraryData[id] || itineraryData["golden-triangle"]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ItineraryJourney title={itinerary.title} destinations={itinerary.destinations} />
      </div>
      <Footer />
    </main>
  )
}
