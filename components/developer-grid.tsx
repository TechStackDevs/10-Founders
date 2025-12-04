"use client"

import { useState } from "react"
import DeveloperCard from "./developer-card"
import DeveloperModal from "./developer-modal"

const developers = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Full Stack Architect",
    bio: "Specializes in scalable web applications with a focus on performance optimization and cloud infrastructure.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    availability: "Available",
    image: "/asian-male-developer-tech.jpg",
    experience: "8 years",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Frontend Specialist",
    bio: "Expert in crafting beautiful, accessible user interfaces with a passion for modern design systems.",
    skills: ["Next.js", "Tailwind CSS", "Figma", "A11y", "WebGL"],
    availability: "Available",
    image: "/female-developer-design.jpg",
    experience: "6 years",
  },
  {
    id: 3,
    name: "James Martinez",
    role: "Backend Engineer",
    bio: "Focused on building robust APIs and microservices with expertise in distributed systems.",
    skills: ["Go", "Python", "Docker", "Kubernetes", "gRPC"],
    availability: "Available",
    image: "/male-developer-server.jpg",
    experience: "9 years",
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "DevOps Engineer",
    bio: "Specializes in infrastructure automation, CI/CD pipelines, and cloud platform management.",
    skills: ["Terraform", "Jenkins", "GitLab CI", "Prometheus", "Linux"],
    availability: "Limited",
    image: "/indian-female-engineer.jpg",
    experience: "7 years",
  },
  {
    id: 5,
    name: "Michael Johnson",
    role: "Mobile Developer",
    bio: "Creating responsive, high-performance mobile applications across iOS and Android platforms.",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    availability: "Available",
    image: "/male-mobile-developer.jpg",
    experience: "7 years",
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    role: "ML Engineer",
    bio: "Building intelligent systems with machine learning, data analysis, and AI solutions.",
    skills: ["Python", "TensorFlow", "PyTorch", "SQL", "Jupyter"],
    availability: "Available",
    image: "/female-ml-engineer.jpg",
    experience: "6 years",
  },
  {
    id: 7,
    name: "David Kim",
    role: "Security Expert",
    bio: "Ensuring application security with penetration testing, vulnerability assessment, and compliance.",
    skills: ["Cybersecurity", "Penetration Testing", "OWASP", "Cryptography", "Audit"],
    availability: "Available",
    image: "/korean-male-security.jpg",
    experience: "10 years",
  },
  {
    id: 8,
    name: "Lisa Chen",
    role: "QA Lead",
    bio: "Leading comprehensive testing strategies and quality assurance frameworks for mission-critical applications.",
    skills: ["Selenium", "Jest", "Cypress", "Test Strategy", "Automation"],
    availability: "Limited",
    image: "/female-qa-tester.jpg",
    experience: "8 years",
  },
  {
    id: 9,
    name: "Christopher Lee",
    role: "Product Engineer",
    bio: "Bridging product vision and engineering excellence, shipping features that users love.",
    skills: ["Product Strategy", "React", "Python", "SQL", "Analytics"],
    availability: "Available",
    image: "/male-product-engineer.jpg",
    experience: "9 years",
  },
  {
    id: 10,
    name: "Olivia Brown",
    role: "Tech Lead",
    bio: "Mentoring teams and architecting solutions for complex technical challenges at scale.",
    skills: ["System Design", "Team Leadership", "Java", "Spring Boot", "Architecture"],
    availability: "Limited",
    image: "/female-tech-lead.jpg",
    experience: "11 years",
  },
]

export default function DeveloperGrid({ selectedDeveloper, setSelectedDeveloper }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalDeveloper, setModalDeveloper] = useState<any>(null)

  const handleOpenModal = (dev: any) => {
    setModalDeveloper(dev)
    setIsModalOpen(true)
  }

  return (
    <section id="developers" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Meet Our <span className="gradient-text">Exceptional Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover developers with diverse expertise ready to collaborate on your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {developers.map((dev) => (
            <DeveloperCard
              key={dev.id}
              developer={dev}
              onSelect={handleOpenModal}
              isSelected={selectedDeveloper === dev.id}
            />
          ))}
        </div>
      </div>

      {isModalOpen && modalDeveloper && (
        <DeveloperModal developer={modalDeveloper} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  )
}
