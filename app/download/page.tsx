import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ComingSoonSection } from "@/components/coming-soon-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Download LekkerClap",
  description: "Download LekkerClap on Android via Google Play or join the waitlist for iOS.",
}

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get the <span className="text-primary glow-text">App</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-3">
            Download LekkerClap and connect with your community instantly.
          </p>
        </div>
        <ComingSoonSection />
      </div>
      <Footer />
    </main>
  )
}
