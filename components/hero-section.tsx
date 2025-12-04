export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-balance text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Collaborate With Talented</span>
            <br />
            Software Developers
          </h1>

          <p className="text-balance text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with a curated network of 10 exceptional developers. Each brings unique skills, experience, and
            expertise to bring your projects to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105">
              Browse Developers
            </button>
            <button className="px-8 py-3 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all">
              Join Our Network
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
