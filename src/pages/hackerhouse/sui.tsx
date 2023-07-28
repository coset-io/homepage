import React from "react"
import cx from "clsx"
import { motion } from "framer-motion"
import Header from "../../components/site-header"
import SEO from "../../components/seo"
import Footer from "../../components/footer"
import { Subheader } from "../../components/subheader"
import { Hero } from "../../components/sui/hero"
import { Partners } from "../../components/sui/partners"
import { useElementInViewportProgress } from "../../hooks/use-element-in-viewport-progress"
import { ActiveAnchorProvider } from "../../components/providers/active-anchor"
import { InViewSection } from "../../components/in-view-section"

export const Head = () => (
  <SEO
    title="HackerHouse Sui Event"
    description="Antalpha Labs is a web3 developer community"
  />
)

export default function Sui() {
  const { ref, elementInViewportProgress } = useElementInViewportProgress()
  const context = { index: 0 }

  return (
    <ActiveAnchorProvider>
      <Header />
      <main className="font-inter bg-web-tile">
        <motion.div
          ref={ref}
          className={cx(
            "sticky top-0 z-20 overflow-x-auto transition duration-300 ease-in-out bg-web-tile backdrop-blur-0",
            elementInViewportProgress.get() === 1 &&
              "bg-web-tile/80 backdrop-blur-lg border-b-2",
          )}
        >
          <Subheader items={["overview", "partners"]} />
        </motion.div>
        <InViewSection id="overview" context={context}>
          <Hero />
        </InViewSection>
        <InViewSection id="partners" context={context}>
          <Partners />
        </InViewSection>
      </main>
      <Footer />
    </ActiveAnchorProvider>
  )
}
