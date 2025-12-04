"use client"

interface DeveloperCardProps {
  developer: any
  onSelect: (dev: any) => void
  isSelected: boolean
}

export default function DeveloperCard({ developer, onSelect, isSelected }: DeveloperCardProps) {
  return (
    <div
      onClick={() => onSelect(developer)}
      className={`group relative cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl ${
        isSelected
          ? "border-primary shadow-lg shadow-primary/20 bg-primary/5"
          : "border-border hover:border-primary/50 bg-card hover:bg-card"
      }`}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500"></div>

      <div className="p-4">
        {/* Image container */}
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-muted">
          <div className="relative h-full w-full">
            <img
              src={developer.image || "/placeholder.svg"}
              alt={developer.name}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          </div>

          {/* Availability badge */}
          <div className="absolute bottom-2 right-2">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                developer.availability === "Available"
                  ? "bg-green-500/20 text-green-600 border border-green-500/30"
                  : "bg-yellow-500/20 text-yellow-600 border border-yellow-500/30"
              }`}
            >
              {developer.availability}
            </span>
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
            {developer.name}
          </h3>
          <p className="text-sm font-medium text-primary mb-3">{developer.role}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {developer.skills.slice(0, 2).map((skill: string, idx: number) => (
              <span key={idx} className="skill-badge text-xs">
                {skill}
              </span>
            ))}
            {developer.skills.length > 2 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-muted-foreground bg-muted">
                +{developer.skills.length - 2}
              </span>
            )}
          </div>

          {/* Experience and link */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{developer.experience} exp</span>
            <button className="text-primary font-medium text-sm hover:gap-2 flex items-center gap-1 transition-all group-hover:translate-x-1">
              View
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
