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
import { InViewSection } from "../../components/in-view-section"
import poster from "../../components/sui/images/poster.png"
import { ActiveAnchorProvider } from "../../components/providers/active-anchor"

export const Head = () => (
  <SEO
    title="HackerHouse Sui Event"
    description="Antalpha Labs is a web3 developer community"
    image={poster}
  />
)

const context = { index: 0 }
export default function Sui() {
  const { ref, elementInViewportProgress } = useElementInViewportProgress()

  return (
    <ActiveAnchorProvider>
      <Header />
      <main className="font-inter bg-web-tile">
        <motion.div
          ref={ref}
          className={cx(
            "sticky top-0 z-20 overflow-x-auto transition-colors duration-300 ease-in-out",
            elementInViewportProgress.get() === 1
              ? "bg-web-paper/90 backdrop-blur-lg border-b border-web-gray"
              : "bg-transparent backdrop-blur-0 border-b border-transparent",
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
