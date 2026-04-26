import { Play } from 'lucide-react'

const streams = [
  {
    title: "When the system fails who answers?",
    href: "https://www.youtube.com/live/rEnQW5XOyKQ?si=bN8rSTIX4slmMFfs",
    thumbnail: `https://img.youtube.com/vi/rEnQW5XOyKQ/hqdefault.jpg`,
  },
]

export function PreviousLivesSection() {
  return (
    <section id="previous-lives" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Previous <span className="text-primary glow-text">Live Streams</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Catch up on past live streams and discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream) => (
            <a
              key={stream.href}
              href={stream.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary transition-colors"
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-red-600 rounded-full p-3">
                    <Play size={24} className="text-white fill-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="font-semibold text-sm leading-snug">{stream.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
