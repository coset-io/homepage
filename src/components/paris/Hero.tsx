import React from "react"
import { Link } from "gatsby"
import Button from "./Button"
import HeroAnimationBackground from "./icon/HeroAnimationBackground"

export default function Hero() {
  return (
    <>
      <section className="relative bg-[#A3F7F7] h-[822px]">
        <div className="relative grid max-w-[1920px] h-full px-4 py-8 mx-auto overflow-hidden">
          <div className="relative z-10 mr-auto mt-0 sm:mt-20 mb-40 ml-4 sm:ml-8 md:ml-6 lg:ml-8 xl:ml-10">
            <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-8xl">
              Antalpha
            </h1>
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-8xl">
              HackerHouse - ZKML
            </h1>
            <div>
              <p className="max-w-2xl text-secondary-black md:text-lg lg:text-xl font-ps">
                Date: 15th July 2023 - 24th July 2023 (9 days)
              </p>
              <p className="max-w-2xl text-secondary-black mb-8 md:text-lg lg:text-xl font-ps">
                Location： Paris, France
              </p>
            </div>
            <Link
              to="https://tally.so/r/mZoJvy"
              target="_blank"
              rel="next"
              className="hidden lg:block"
            >
              <Button className="uppercase" variant="primary">
                Apply to Hack {"->"}
              </Button>
            </Link>
          </div>

          <div className="absolute z-0 -bottom-1 top-[155px] scale-75 -left-[60rem] sm:scale-100 sm:top-[3px] sm:-left-[48rem] lg:top-[4rem] lg:-left-[32rem] xl:top-[4rem] xl:-left-[20rem] 2xl:top-0 2xl:left-0">
            <HeroAnimationBackground />
          </div>
        </div>
      </section>

      <div className="lg:hidden flex justify-center items-center w-full mt-8 relative z-10 px-4">
        <Link
          to="https://tally.so/r/mZoJvy"
          target="_blank"
          rel="next"
          className="w-full"
        >
          <Button className="uppercase w-full" variant="secondary">
            Apply to Hack {"->"}
          </Button>
        </Link>
      </div>
    </>
  )
}
