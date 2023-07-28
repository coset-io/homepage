import React from "react"
import poster from "./images/poster.png"

export const Hero = (props: React.ComponentProps<"div">) => {
  return (
    <div className="flex flex-col" {...props}>
      <img src={poster} />

      <div className="flex flex-col space-y-6 pt-14 pb-20 justify-center items-center">
        <h1 className="text-6xl font-semibold leading-10 mb-4">
          Antalpha HackerHouse
        </h1>
        <h1 className="text-6xl font-semibold underline decoration-2 decoration-double decoration-blue-700">
          # MOVE
        </h1>
        <p className="text-3xl text-web-gray">
          Sep 3rd - Sep 24th, 2023 @Dali, China
        </p>
        <a
          href="http://google.com"
          target="_blank"
          rel="external"
          className="inline-flex py-4 px-12 uppercase text-xs font-semibold bg-black text-white"
        >
          Apply to join
        </a>
      </div>
    </div>
  )
}
