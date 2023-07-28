import React from "react"
import Header from "../../components/site-header"
import SEO from "../../components/seo"
import Footer from "../../components/footer"
import { Subheader } from "../../components/subheader"
import { Hero } from "../../components/sui/hero"
import { Partners } from "../../components/sui/partners"

export const Head = () => (
  <SEO
    title="HackerHouse Sui Event"
    description="Antalpha Labs is a web3 developer community"
  />
)

export default function Sui() {
  return (
    <>
      <Header />
      <main className="font-inter bg-web-tile">
        <div className="container mx-auto">
          <Subheader items={["overview", "partners"]} />
        </div>
        <Hero id="overview" />
        <Partners id="partners" />
      </main>
      <Footer />
    </>
  )
}
