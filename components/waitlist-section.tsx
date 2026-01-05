"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Loader2 } from "lucide-react"
import { supabase } from "@/components/init/supabase_init"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    setErrorMessage("")

    try {
      // Sign up user with Supabase without email confirmation
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: crypto.randomUUID(), // Generate a random password since we're not using it
        options: {
          emailRedirectTo: undefined, // No email confirmation needed
          data: {
            waitlist: true,
            joined_at: new Date().toISOString(),
          },
        },
      })

      if (error) {
        console.error("Supabase signup error:", error)
        setErrorMessage(error.message || "Failed to join waitlist. Please try again.")
        setStatus("error")
      } else {
        setStatus("success")
        setEmail("")
      }
    } catch (err) {
      console.error("Unexpected error:", err)
      setErrorMessage("An unexpected error occurred. Please try again.")
      setStatus("error")
    }
  }

  return (
    <section id="waitlist" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Waitlist form card */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be the <span className="text-primary glow-text">first</span> to know
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join our waitlist and get early access when LekkerClap launches in your area.
            </p>

            {status === "success" ? (
              <div className="flex items-center justify-center md:justify-start gap-3 text-green-400 bg-green-400/10 p-4 rounded-xl">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {status === "error" && errorMessage && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {errorMessage}
                  </div>
                )}
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl text-foreground placeholder:text-muted-foreground"
                />
                <p className="text-xs text-muted-foreground text-center md:text-left -mt-2">
                  By joining, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms & Conditions
                  </a>
                  .
                </p>
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-xl glow-border w-full sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
            )}

            <p className="text-sm text-muted-foreground mt-4">No spam, ever. Unsubscribe anytime.</p>
          </div>

          {/* Image beside the card */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
              <Image
                src="https://cdn.clipond.com/LekkerClap/iPhone%2015.png"
                alt="LekkerClap App Preview"
                width={400}
                height={400}
                className="relative z-10 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
