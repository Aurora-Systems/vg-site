"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ComingSoonSection() {
    return (
        <section className="relative py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="glass-panel p-8 md:p-12 rounded-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Coming Soon to <span className="text-primary glow-text">Mobile</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        LekkerClap will be available on your favorite platforms. Join the waitlist to be notified when we launch!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                        {/* App Store Badge */}
                        <div className="opacity-60 grayscale cursor-not-allowed selection:bg-transparent">
                            <Image
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                width={200}
                                height={60}
                                className="h-[60px] w-auto"
                            />
                        </div>
                        <div className="text-muted-foreground font-medium">
                            <small>or</small>
                        </div>

                        {/* Google Play Store Badge */}
                        <div className="opacity-60 grayscale cursor-not-allowed selection:bg-transparent">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Get it on Google Play"
                                width={225}
                                height={60}
                                className="h-[60px] w-auto"
                            />
                        </div>
                    </div>

                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-border"
                        onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Join Waitlist
                    </Button>
                </div>
            </div>
        </section>
    )
}
