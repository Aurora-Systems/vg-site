"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <MeshBackground />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Tap once. <span className="text-primary glow-text">Your community responds.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-pretty">
                LekkerClap is your instant SoS lifeline. Alert nearby users in seconds and get help when you need it
                most.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-border"
                  onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Join the Waitlist
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-xl bg-transparent"
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Pulsating logo */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/50 rounded-full blur-2xl animate-pulse-glow scale-110" />
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse scale-125" />
                <Image
                  src="https://cdn.clipond.com/LekkerClap/clear_logo.png"
                  alt="LekkerClap Logo"
                  width={280}
                  height={280}
                  className="relative z-10 animate-pulse-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MeshBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="1" fill="hsl(var(--primary))" className="animate-pulse" />
        </pattern>
        <radialGradient id="meshGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh)" />
      {/* Animated connection lines */}
      <g className="animate-pulse">
        <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="40%" y1="50%" x2="60%" y2="40%" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="60%" y1="40%" x2="80%" y2="60%" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="70%" y1="30%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.5" />
      </g>
      {/* Glowing nodes */}
      <circle
        cx="20%"
        cy="30%"
        r="4"
        fill="hsl(var(--primary))"
        className="animate-ping"
        style={{ animationDuration: "2s" }}
      />
      <circle
        cx="40%"
        cy="50%"
        r="4"
        fill="hsl(var(--primary))"
        className="animate-ping"
        style={{ animationDuration: "2.5s" }}
      />
      <circle
        cx="60%"
        cy="40%"
        r="4"
        fill="hsl(var(--primary))"
        className="animate-ping"
        style={{ animationDuration: "3s" }}
      />
      <circle
        cx="80%"
        cy="60%"
        r="4"
        fill="hsl(var(--primary))"
        className="animate-ping"
        style={{ animationDuration: "2.2s" }}
      />
      <circle
        cx="30%"
        cy="70%"
        r="4"
        fill="hsl(var(--primary))"
        className="animate-ping"
        style={{ animationDuration: "2.8s" }}
      />
      <circle
        cx="70%"
        cy="30%"
        r="4"
        fill="hsl(var(--primary))"
        className="animate-ping"
        style={{ animationDuration: "3.2s" }}
      />
    </svg>
  )
}
