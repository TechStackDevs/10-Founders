"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with real-time inventory management and payment processing.",
    image: "/ecommerce-platform.jpg",
    developers: ["Alice Chen", "Marcus Rodriguez"],
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Development",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Machine learning-powered tool for generating optimized marketing copy and blog posts.",
    image: "/ai-content-generator.jpg",
    developers: ["Dr. Priya Sharma", "James Wilson"],
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    category: "AI/ML",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure iOS and Android banking application with biometric authentication and transfers.",
    image: "/mobile-banking-app.jpg",
    developers: ["Sofia Martinez", "David Kim"],
    tags: ["React Native", "Swift", "Kotlin", "Firebase"],
    category: "Mobile",
  },
  {
    id: 4,
    title: "Real-Time Analytics Dashboard",
    description: "Live data visualization platform processing millions of events with WebSocket support.",
    image: "/analytics-dashboard.png",
    developers: ["Alex Petrov", "Emma Johnson"],
    tags: ["Next.js", "D3.js", "WebSocket", "Redis"],
    category: "Data Visualization",
  },
  {
    id: 5,
    title: "Cloud Infrastructure Manager",
    description: "DevOps tool for managing multi-cloud deployments with automated scaling and monitoring.",
    image: "/cloud-infrastructure.jpg",
    developers: ["Raj Patel", "Anna Mueller"],
    tags: ["Go", "Kubernetes", "AWS", "Docker"],
    category: "DevOps",
  },
  {
    id: 6,
    title: "Cybersecurity Audit Platform",
    description: "Comprehensive security vulnerability assessment and compliance reporting system.",
    image: "/cybersecurity-audit.jpg",
    developers: ["Min-jun Lee", "Sophie Bernard"],
    tags: ["Python", "Penetration Testing", "OWASP", "React"],
    category: "Security",
  },
  {
    id: 7,
    title: "Video Streaming Service",
    description: "Adaptive bitrate video streaming with millions of concurrent users and CDN optimization.",
    image: "/video-streaming.jpg",
    developers: ["Marcus Rodriguez", "Dr. Priya Sharma"],
    tags: ["HLS", "DASH", "AWS CloudFront", "Node.js"],
    category: "Streaming",
  },
  {
    id: 8,
    title: "SaaS Project Management",
    description: "Collaborative workspace with real-time updates, integrations, and advanced reporting.",
    image: "/project-management-board.png",
    developers: ["James Wilson", "Emma Johnson"],
    tags: ["Vue.js", "GraphQL", "MongoDB", "Socket.io"],
    category: "Web Development",
  },
]

const categories = [
  "All",
  "Web Development",
  "Mobile",
  "AI/ML",
  "DevOps",
  "Data Visualization",
  "Security",
  "Streaming",
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Our Collective <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Explore the diverse range of projects we've built together. From cutting-edge AI solutions to
              enterprise-scale infrastructure, see what our team can accomplish.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Developers */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Built by</p>
                    <div className="flex flex-wrap gap-2">
                      {project.developers.map((dev, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {dev}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{projects.length}+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10</div>
              <p className="text-sm text-muted-foreground">Expert Developers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Technologies Used</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
