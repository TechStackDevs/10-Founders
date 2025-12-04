"use client"
import { useEffect } from "react"

interface DeveloperModalProps {
  developer: any
  onClose: () => void
}

export default function DeveloperModal({ developer, onClose }: DeveloperModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8 md:p-12">
            {/* Header with image and info */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-shrink-0">
                <img
                  src={developer.image || "/placeholder.svg"}
                  alt={developer.name}
                  className="h-48 w-48 object-cover rounded-xl"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-2 text-card-foreground">{developer.name}</h2>
                <p className="text-2xl font-semibold text-primary mb-4">{developer.role}</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Experience</p>
                    <p className="text-lg text-card-foreground">{developer.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <div className="mt-2">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          developer.availability === "Available"
                            ? "bg-green-500/20 text-green-600 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-600 border border-yellow-500/30"
                        }`}
                      >
                        {developer.availability}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Contact {developer.name.split(" ")[0]}
                </button>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8 pb-8 border-b border-border">
              <h3 className="text-lg font-bold mb-4 text-card-foreground">About</h3>
              <p className="text-muted-foreground leading-relaxed">{developer.bio}</p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-card-foreground">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {developer.skills.map((skill: string, idx: number) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
