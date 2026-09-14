import Link from "next/link"
import {
  Bell,
  CalendarCheck,
  ClipboardCheck,
  EyeOff,
  Footprints,
  Heart,
  Lock,
  ShieldCheck,
  Users,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ukPages, ukPageLinks, type UkPage, type UkPageBullet } from "@/lib/uk-pages"

const iconMap: Record<UkPageBullet["icon"], typeof Users> = {
  users: Users,
  lock: Lock,
  shield: ShieldCheck,
  bell: Bell,
  heart: Heart,
  footprints: Footprints,
  calendar: CalendarCheck,
  eyeOff: EyeOff,
  clipboard: ClipboardCheck,
}

function DownloadCta() {
  return (
    <Link
      href="/download"
      className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl glow-border transition-colors"
    >
      Download LekkerClap
    </Link>
  )
}

export function UkSeoPage({ slug }: { slug: string }) {
  const page: UkPage = ukPages[slug]

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative px-4 pt-32 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {page.h1Pre}
              <span className="text-primary glow-text">{page.h1Highlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              {page.subhead}
            </p>
            <DownloadCta />
          </div>
        </div>
      </section>

      {/* Key points */}
      {page.bullets.length > 0 && (
        <section className="relative py-12 px-4">
          <div className="max-w-5xl mx-auto">
            {page.bulletsHeading && (
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                {page.bulletsHeading}
              </h2>
            )}
            <div className="grid md:grid-cols-3 gap-6">
              {page.bullets.map((bullet) => {
                const Icon = iconMap[bullet.icon]
                return (
                  <div
                    key={bullet.title}
                    className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{bullet.title}</h3>
                    <p className="text-muted-foreground">{bullet.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Steps */}
      {page.steps.length > 0 && (
        <section className="relative py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              {page.stepsHeading ?? "How it works"}
            </h2>
            <ol className="space-y-4">
              {page.steps.map((step, index) => (
                <li key={index} className="glass-card p-5 rounded-2xl flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground pt-1.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Prose blocks (privacy / boundaries / captains) */}
      {page.prose.length > 0 && (
        <section className="relative py-12 px-4">
          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-1">
            {page.prose.map((block) => (
              <div key={block.heading} className="glass-panel p-8 rounded-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {block.heading}
                </h2>
                <p className="text-muted-foreground text-lg">{block.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="relative py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Frequently asked <span className="text-primary glow-text">questions</span>
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Safety powered by <span className="text-primary glow-text">your community</span>
          </h2>
          <DownloadCta />
        </div>
      </section>

      {/* Cross-links between UK pages */}
      <section className="relative pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-6 text-muted-foreground">
            Explore more life moments
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {ukPageLinks
              .filter((link) => link.slug !== page.slug)
              .map((link) => (
                <Link
                  key={link.slug}
                  href={`/${link.slug}`}
                  className="glass-card px-5 py-2.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
