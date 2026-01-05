import { Check } from "lucide-react"

const benefits = [
  "Unlimited SoS alerts",
  "Live mesh map access",
  "Group management",
  "Audit trail & logs",
  "Priority support",
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-primary glow-text">transparent</span> pricing
          </h2>
        </div>

        <div className="glass-card p-8 rounded-3xl border-primary/30 glow-border-subtle">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Launch Special
            </span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold">Free</span>
              <span className="text-muted-foreground">during launch</span>
            </div>
            <p className="text-muted-foreground mt-2">
              Then just <span className="text-foreground font-semibold">$1 / R20</span> per month
            </p>
          </div>

          <div className="border-t border-border/50 pt-6">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
