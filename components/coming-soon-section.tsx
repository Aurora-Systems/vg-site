"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ComingSoonSection() {
    return (
        <section className="relative py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="glass-panel p-8 md:p-12 rounded-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Now available on the <span className="text-primary glow-text">App Store</span> and <span className="text-primary glow-text">Play Store</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        LekkerClap is live on iOS and Android. Download it now and start connecting with your community.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                        {/* App Store Badge */}
                        <div className="cursor-pointer selection:bg-transparent" onClick={() => window.open("https://apps.apple.com/us/app/lekkerclap/id6759859578", "_blank")}>
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
                        <div className="cursor-pointer selection:bg-transparent" onClick={() => window.open("https://play.google.com/store/apps/details?id=attribute.xyz&pcampaignid=web_share", "_blank")}>
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
