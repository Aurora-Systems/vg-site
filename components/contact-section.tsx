"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, MapPin, Mail, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"
import { em_template_id, em_service_id, em_public_key } from "@/components/init/emailjs_init"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        em_service_id,
        em_template_id,
        e.currentTarget,
        em_public_key
      )

      if (result.status === 200) {
        setSubmitted(true)
        // Reset form
        e?.currentTarget?.reset()
      }
    } catch (err) {
      console.error("Failed to send email:", err)
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Get in <span className="text-primary glow-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about LekkerClap? Want to partner with us? We would love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-4 sm:p-6 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold font-heading mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground text-sm break-words">South Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm break-all">hello@lekkerclap.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+27 (0) 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl">
              <h3 className="text-lg font-semibold font-heading mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {[
                  { name: "Facebook", url: "https://www.facebook.com/lekkerclap" },
                  { name: "Instagram", url: "https://www.instagram.com/lekkerclap" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/company/lekkerclap" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Send className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="full_name"
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more..."
                    rows={5}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" className="w-full glow-border" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
