"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, User, Users, Calendar, Send } from "lucide-react"

export function EnquiryForm({ tourTitle }: { tourTitle: string }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        numberOfPeople: "",
        preferredDate: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Format the message for WhatsApp
        const whatsappNumber = "919674475855" // Indian number with country code

        let message = `*New Tour Enquiry*\n\n`
        message += `*Tour:* ${tourTitle}\n\n`
        message += `*Customer Details:*\n`
        message += `Name: ${formData.name}\n`
        message += `Email: ${formData.email}\n`
        message += `Phone: ${formData.phone}\n`

        if (formData.numberOfPeople) {
            message += `Number of People: ${formData.numberOfPeople}\n`
        }

        if (formData.preferredDate) {
            message += `Preferred Date: ${formData.preferredDate}\n`
        }

        if (formData.message) {
            message += `\n*Additional Message:*\n${formData.message}`
        }

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message)

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

        // Small delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank')

        setIsSubmitting(false)
        setSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false)
            setFormData({
                name: "",
                email: "",
                phone: "",
                numberOfPeople: "",
                preferredDate: "",
                message: "",
            })
        }, 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8">
                <div className="mb-6">
                    <h3 className="font-serif text-3xl font-semibold text-foreground mb-2">Enquire Now</h3>
                    <p className="text-muted-foreground">
                        Interested in <span className="font-semibold text-foreground">{tourTitle}</span>? Fill out the form below
                        and we'll get back to you within 24 hours.
                    </p>
                </div>

                {submitted ? (
                    <div className="py-12 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
                            <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="text-2xl font-semibold text-foreground mb-2">Thank You!</h4>
                        <p className="text-muted-foreground">
                            Your enquiry has been submitted successfully. We'll contact you soon!
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <Label htmlFor="name" className="flex items-center gap-2">
                                <User className="w-4 h-4 text-primary" />
                                Full Name *
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="border-border focus:border-primary"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" />
                                Email Address *
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="border-border focus:border-primary"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary" />
                                Phone Number *
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+91 98765 43210"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="border-border focus:border-primary"
                            />
                        </div>

                        {/* Number of People */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="numberOfPeople" className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-primary" />
                                    Number of People
                                </Label>
                                <Input
                                    id="numberOfPeople"
                                    name="numberOfPeople"
                                    type="number"
                                    min="1"
                                    placeholder="2"
                                    value={formData.numberOfPeople}
                                    onChange={handleChange}
                                    className="border-border focus:border-primary"
                                />
                            </div>

                            {/* Preferred Date */}
                            <div className="space-y-2">
                                <Label htmlFor="preferredDate" className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    Preferred Date
                                </Label>
                                <Input
                                    id="preferredDate"
                                    name="preferredDate"
                                    type="date"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    className="border-border focus:border-primary"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <Label htmlFor="message">Additional Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Any special requirements or questions..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="border-border focus:border-primary resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="animate-spin mr-2">⏳</span>
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Enquiry
                                </>
                            )}
                        </Button>
                    </form>
                )}
            </CardContent>
        </Card>
    )
}
