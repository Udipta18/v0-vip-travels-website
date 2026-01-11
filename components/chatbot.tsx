"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Mic, MicOff, MessageCircle, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
    role: "user" | "assistant"
    content: string
    timestamp: Date
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hello! I'm your V.I.P. Travels assistant. How can I help you plan your perfect journey today?",
            timestamp: new Date(),
        },
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isListening, setIsListening] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const recognitionRef = useRef<any>(null)

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    // Initialize speech recognition
    useEffect(() => {
        if (typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
            recognitionRef.current = new SpeechRecognition()
            recognitionRef.current.continuous = false
            recognitionRef.current.interimResults = false
            recognitionRef.current.lang = "en-US"

            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript
                setInput(transcript)
                setIsListening(false)
            }

            recognitionRef.current.onerror = () => {
                setIsListening(false)
            }

            recognitionRef.current.onend = () => {
                setIsListening(false)
            }
        }
    }, [])

    const toggleVoiceInput = () => {
        if (!recognitionRef.current) {
            alert("Speech recognition is not supported in your browser. Please use Chrome or Edge.")
            return
        }

        if (isListening) {
            recognitionRef.current.stop()
            setIsListening(false)
        } else {
            recognitionRef.current.start()
            setIsListening(true)
        }
    }

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return

        const userMessage: Message = {
            role: "user",
            content: input.trim(),
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        try {
            // Convert messages to history format (excluding the system message)
            const history = messages.slice(1).map(msg => ({
                role: msg.role,
                content: msg.content
            }))

            console.log("Sending to API:", userMessage.content)

            const apiUrl = process.env.NEXT_PUBLIC_CHATBOT_API_URL || "https://chat-bot-backend-psi-smoky.vercel.app"
            const response = await fetch(`${apiUrl}/api/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage.content,
                    history: history
                }),
            })

            if (!response.ok) {
                const errorText = await response.text()
                console.error("API Error:", errorText)
                throw new Error(`API Error: ${response.status}`)
            }

            const data = await response.json()
            console.log("Received response:", data)

            const assistantMessage: Message = {
                role: "assistant",
                content: data.response || "I apologize, but I couldn't process that request.",
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, assistantMessage])
        } catch (error) {
            console.error("Chat error:", error)
            const errorMessage: Message = {
                role: "assistant",
                content: "I'm having trouble connecting. Please make sure the backend is running and check the console.",
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <>
            {/* Chatbot Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-24 right-4 z-50 bg-gradient-to-r from-purple-600 via-primary to-purple-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                    aria-label="Open chat"
                >
                    <Bot className="w-6 h-6 group-hover:animate-pulse" />
                </button>
            )}

            {/* Chatbot Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-4 z-50 w-[380px] h-[600px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-600 via-primary to-purple-800 text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">V.I.P. Travels Assistant</h3>
                                <p className="text-xs opacity-90">Always here to help</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 rounded-full p-1 transition-colors"
                            aria-label="Close chat"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.role === "user"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-card border border-border"
                                        }`}
                                >
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                                    <p
                                        className={`text-xs mt-1 ${message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                                            }`}
                                    >
                                        {message.timestamp.toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-card border border-border rounded-2xl px-4 py-3">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-card border-t border-border">
                        <div className="flex gap-2">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="w-full px-4 py-3 pr-12 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={toggleVoiceInput}
                                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors ${isListening
                                        ? "bg-red-500 text-white"
                                        : "hover:bg-muted"
                                        }`}
                                    aria-label={isListening ? "Stop recording" : "Start voice input"}
                                >
                                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                                </button>
                            </div>
                            <Button
                                onClick={sendMessage}
                                disabled={!input.trim() || isLoading}
                                className="rounded-full px-4"
                                size="icon"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                        {isListening && (
                            <p className="text-xs text-center mt-2 text-red-500 animate-pulse">
                                🎤 Listening...
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
