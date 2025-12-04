"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import DeveloperGrid from "@/components/developer-grid"
import Footer from "@/components/footer"

export default function Home() {
  const [selectedDeveloper, setSelectedDeveloper] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <DeveloperGrid selectedDeveloper={selectedDeveloper} setSelectedDeveloper={setSelectedDeveloper} />
      <Footer />
    </main>
  )
}
