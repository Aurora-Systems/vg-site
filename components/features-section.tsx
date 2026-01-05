import { Bell, MapPin, Volume2, Users, ClipboardList, Map } from "lucide-react"

const features = [
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Trigger alarms with a 7-second safety delay. Cancel if triggered accidentally.",
  },
  {
    icon: Map,
    title: "Live Mesh Map Network",
    description: "Visualize responders on a dynamic map, showing who's en route and their paths.",
  },
  {
    icon: MapPin,
    title: "Precise GPS Sharing",
    description: "Share your exact location with group members instantly when you need help.",
  },
  {
    icon: Volume2,
    title: "Loud Siren Notifications",
    description: "Loud siren on rings on LekkerClap users phones, alerting nearby users.",
  },
  {
    icon: Users,
    title: "Group Management",
    description: "Create private neighbourhood groups with role-based admin controls.",
  },
  {
    icon: ClipboardList,
    title: "Audit Trail",
    description: "Time-stamped incident logs for debriefs, statistics, and accountability.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Features that <span className="text-primary glow-text">save lives</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every feature is designed with one goal: getting you help as fast as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
