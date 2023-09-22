import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const Hero = (props: React.ComponentProps<"div">) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center" {...props}>
        <StaticImage
          alt="Antalpha Istanbul event poster"
          src="./images/poster.png"
        />

        <div className="flex flex-col pt-14 pb-20 justify-center items-center text-center">
          <h1 className="text-6xl font-semibold leading-tight">
            Antalpha HackerHouse
          </h1>
          <h1 className="text-6xl font-semibold underline decoration-2 decoration-double decoration-blue-700">
            # ZKONNECT
          </h1>
          <p className="text-3xl leading-normal text-web-gray/70 mt-6">
            Oct. 22nd - Nov. 20th
          </p>
          <p className="text-3xl leading-normal text-web-gray/70">
            At Istanbul
          </p>
          <a
            href="https://tally.so/r/wL7VBp"
            target="_blank"
            rel="external"
            className="inline-flex py-4 px-10 uppercase text-xs font-semibold bg-web-black text-white rounded-sm border border-web-black mt-6 hover:opacity-80 transition-colors"
          >
            Apply to join
          </a>
        </div>
      </div>
    </>
  )
}
