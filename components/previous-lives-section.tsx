export function PreviousLivesSection() {
  return (
    <section id="previous-lives" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          View <span className="text-primary glow-text">Previous Lives</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Catch up on past live streams and discussions.
        </p>
        <a
          href="https://www.youtube.com/@yourchannel" // Replace with actual YouTube channel
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          View on YouTube
        </a>
      </div>
    </section>
  )
}
