"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { useState } from "react"

export function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <div className="relative bg-gradient-to-r from-purple-600 via-primary to-purple-800 text-white overflow-hidden">
            <div className="relative flex items-center justify-center py-3 px-4">
                {/* Animated scrolling text */}
                <div className="flex-1 overflow-hidden">
                    <div className="animate-scroll whitespace-nowrap inline-block">
                        <Link
                            href="/tours/arunachal-kaziranga"
                            className="inline-flex items-center gap-2 font-semibold hover:underline"
                        >
                            <span className="text-lg">🎉</span>
                            <span>New Tour Alert! Adventurous Arunachal & Kaziranga - 10 Days Journey starting April 4, 2026</span>
                            <span className="text-lg">✨</span>
                            <span className="mx-8">|</span>
                            <span className="text-lg">🏔️</span>
                            <span>Experience the Himalayas & Wildlife Safari - Book Now!</span>
                            <span className="text-lg">🦏</span>
                            <span className="mx-8">|</span>
                            <span className="text-lg">🎉</span>
                            <span>New Tour Alert! Adventurous Arunachal & Kaziranga - 10 Days Journey starting April 4, 2026</span>
                            <span className="text-lg">✨</span>
                            <span className="mx-8">|</span>
                            <span className="text-lg">🏔️</span>
                            <span>Experience the Himalayas & Wildlife Safari - Book Now!</span>
                            <span className="text-lg">🦏</span>
                        </Link>
                    </div>
                </div>

                {/* Close button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close announcement"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

            {/* Add animation styles */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </div>
    )
}
