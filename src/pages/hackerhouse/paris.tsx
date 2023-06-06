import React from "react"
import Description from "../../components/paris/Description"
import Footer from "../../components/paris/Footer"
import HackerState from "../../components/paris/HackerState"
import Hero from "../../components/paris/Hero"
import Questions from "../../components/paris/Questions"
import Header from "../../components/paris/Header"
import SEO from "../../components/seo"

export const Head = () => (
  <SEO
    title="HackerHouse Paris Event"
    description="Antalpha Labs is a web3 developer community. Paris event is coming soon!"
    image="/static/images/hackerhouse/paris/paris_poster.png"
  />
)

export default function Paris() {
  return (
    <>
      <Header />
      <main className="font-fa 2xl:mt-[66px]">
        <Hero />
        <Description />
        <HackerState />
        <Questions />
        <Footer />
      </main>
    </>
  )
}
