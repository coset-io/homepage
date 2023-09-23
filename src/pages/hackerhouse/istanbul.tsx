import React from "react"
import scrollIntoView from "scroll-into-view-if-needed"
import Header from "../../components/site-header"
import SEO from "../../components/seo"
import Footer from "../../components/footer"
import { Subheader } from "../../components/subheader"
import { Hero } from "../../components/istanbul/hero"
import { InViewSection } from "../../components/in-view-section"
import poster from "../../components/istanbul/images/poster.png"
import { ActiveAnchorProvider } from "../../components/providers/active-anchor"
import { FadeIn } from "../../components/fade-in"
import { Partners } from "../../components/istanbul/partners"
import { Details } from "../../components/istanbul/details"

export const Head = () => (
  <SEO
    title="HackerHouse Istanbul Event"
    description="Antalpha Labs is a web3 developer community"
    image={poster}
  />
)

const context = { index: 0 }
export default function Istanbul() {
  React.useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const activeSlug = location.hash.slice(1)
    if (!activeSlug) {
      return
    }
    setTimeout(() => {
      const section = document.querySelector(`#${activeSlug}`)
      if (section) {
        scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "start",
          scrollMode: "always",
        })
      }
    }, 300)
  }, [])

  return (
    <ActiveAnchorProvider>
      <Header />
      <main className="font-inter bg-web-tile">
        <Subheader />
        <InViewSection id="overview" context={context}>
          <FadeIn>
            <Hero />
          </FadeIn>
        </InViewSection>
        <InViewSection id="details" context={context}>
          <FadeIn>
            <Details />
          </FadeIn>
        </InViewSection>
        <InViewSection id="partners" context={context}>
          <FadeIn>
            <Partners />
          </FadeIn>
        </InViewSection>
      </main>
      <Footer />
    </ActiveAnchorProvider>
  )
}
