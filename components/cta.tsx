"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Headset } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export function CTA() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 850)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-card rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side: Visual/Context */}
            <div className="p-12 bg-primary text-primary-foreground flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-24 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              <div className="relative z-10">
                {isLoading ? (
                  <>
                    <Skeleton className="h-7 w-28 rounded-full bg-white/20 mb-6" />
                    <Skeleton className="h-10 w-64 bg-white/20 mb-4" />
                    <Skeleton className="h-5 w-full bg-white/20 mb-2" />
                    <Skeleton className="h-5 w-4/5 bg-white/20" />
                  </>
                ) : (
                  <>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-6">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Online 24/7
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
                      Need help planning?
                    </h2>
                    <p className="text-primary-foreground/90 text-lg leading-relaxed">
                      Our dedicated travel assistants are here to customize your perfect Indian journey.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-12 relative z-10">
                {isLoading ? (
                  <Skeleton className="w-16 h-16 rounded-xl bg-white/20" />
                ) : (
                  <Headset className="w-16 h-16 opacity-80" />
                )}
              </div>
            </div>

            {/* Right Side: Actions */}
            <div className="p-12 bg-background flex flex-col justify-center space-y-8">
              {isLoading ? (
                <>
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-4 w-60" />
                  </div>
                  <div className="space-y-4">
                    <Skeleton className="h-20 w-full rounded-xl" />
                    <Skeleton className="h-20 w-full rounded-xl" />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Talk to an Expert</h3>
                    <p className="text-muted-foreground text-sm">
                      Instant support for bookings and inquiries.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Option 1: Call */}
                    <a href="tel:9334812901" className="block group">
                      <div className="flex items-center p-4 border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">One-Tap Call</p>
                          <p className="text-sm text-muted-foreground">+91 933-481-2901</p>
                        </div>
                      </div>
                    </a>

                    {/* Option 2: Email / Ticket */}
                    <a href="mailto:support@viptravels.in?subject=New%20Inquiry%20Ticket" className="block group">
                      <div className="flex items-center p-4 border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Raise a Ticket</p>
                          <p className="text-sm text-muted-foreground">Send us an email</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
