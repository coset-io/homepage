import React from "react"
import { Link } from "gatsby"
import Button from "./Button"
import HeroAnimations from "./HeroAnimations"

export default function Hero() {
  return (
    <section className="relative bg-[#A3F7F7] h-[802px]">
      <div className="relative grid max-w-[1920px] h-full px-4 py-8 mx-auto">
        <div className="relative z-10 mr-auto mt-20 ml-4 sm:ml-8 md:ml-6 lg:ml-8 xl:ml-10">
          <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-8xl">
            Antalpha
          </h1>
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-8xl">
            HackerHouse - ZKML
          </h1>
          <div>
            <p className="max-w-2xl text-secondary-black md:text-lg lg:text-xl font-ps">
              Date: 13th July 2023 - 20th July 2023 (1 week)
            </p>
            <p className="max-w-2xl text-secondary-black mb-8 md:text-lg lg:text-xl font-ps">
              Location： Paris, France
            </p>
          </div>
          <Link to="https://tally.so/r/mZoJvy" target="_blank" rel="next">
            <Button className="uppercase" variant="primary">
              Apply to Hack {"->"}
            </Button>
          </Link>
        </div>

        <HeroAnimations />
      </div>
    </section>
  )
}
