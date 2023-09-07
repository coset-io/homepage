import React from "react"
import Header from "../components/site-header"
import Footer from "../components/footer"
import { Hero } from "../components/home/hero"
import { TailwindIndicator } from "../components/tailwind-indicator"
import { Feature } from "../components/home/feature"
import { LatestNews } from "../components/home/latest-news"
import { Testimonies } from "../components/home/testimonies"
import { Highlights } from "../components/home/highlights"
import { Collaborations } from "../components/home/collaborations"
import { JoinUs } from "../components/home/join-us"

export default function NewPage() {
  return (
    <div className="font-inter bg-web-paper">
      <Header />
      <main>
        <Hero />
        <Feature />
        <LatestNews />
        <Testimonies />
        <Highlights />
        <Collaborations />
        <JoinUs />
      </main>
      <Footer />
      <TailwindIndicator />
    </div>
  )
}
