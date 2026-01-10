import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "V.I.P. Travels India - Luxury Tours & Bus Services Since 1991",
  description:
    "Experience India with V.I.P. Travels. Premium tour packages, luxury bus rentals, and personalized travel itineraries. Serving travelers with excellence for over 30 years.",
  keywords: ["travel india", "luxury tours", "bus rental", "vip travels", "golden triangle tour", "kerala honeymoon", "tirupati package"],
  authors: [{ name: "V.I.P. Travels" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://viptravels.in",
    siteName: "V.I.P. Travels",
    title: "V.I.P. Travels India - Luxury Travel Experiences",
    description: "Curated luxury travel experiences backed by 30 years of excellence.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "V.I.P. Travels - Luxury Journey",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          {children}
        </ThemeProvider>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
