import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"

const PARTNERS = [
  { imageUrl: "ocean.png", name: "ocean" },
  { imageUrl: "worldcoin.png", name: "worldcoin" },
  { imageUrl: "pse.png", name: "pse" },
  { imageUrl: "mantle.png", name: "mantle" },
  { imageUrl: "hashkey.png", name: "hashkey" },
  { imageUrl: "kakapot.png", name: "kakapot" },
  { imageUrl: "modulus_labs.png", name: "modulus labs" },
  { imageUrl: "giza.png", name: "giza" },
  { imageUrl: "safe.png", name: "safe", className: "invert" },
  { imageUrl: "etherspot.png", name: "etherspot", className: "invert" },
  { imageUrl: "biconomy.png", name: "biconomy", className: "invert" },
  { imageUrl: "argent.png", name: "argent", className: "invert" },
  { imageUrl: "hyper_oracle.png", name: "hyper" },
  { imageUrl: "pimlico.png", name: "pimlico", className: "invert" },
  { imageUrl: "oas.png", name: "oas" },
  { imageUrl: "versa.png", name: "versa" },
  { imageUrl: "aztec.png", name: "aztec" },
  { imageUrl: "kucoin.png", name: "kucoin" },
  { imageUrl: "sevenx.png", name: "sevenx" },
  { imageUrl: "taiko.png", name: "taiko" },
  { imageUrl: "scroll.png", name: "scroll" },
  { imageUrl: "ofr.png", name: "ofr" },
  { imageUrl: "sui.png", name: "sui", className: "!ml-8" },
  { imageUrl: "filecoin.png", name: "filecoin" },
  { imageUrl: "ipfs.png", name: "ipfs" },
]

export const Collaborations = () => {
  return (
    <section className="bg-web-tile pt-12 md:pt-20 lg:pt-32 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center gap-8 lg:gap-16">
          <h1 className="text-web-black text-3xl lg:text-6xl font-semibold relative inline-block max-w-xs md:max-w-max">
            Collaborate worldwide with
          </h1>

          <div className="grid grid-flow-row grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-6">
            {PARTNERS.map((x) => (
              <div
                className={clsx(x.className, "scale-50 flex items-center justify-center -m-4 lg:-m-12")}
                key={x.name}
              >
                <img
                  src={`/images/logo/${x.imageUrl}`}
                  alt={`Logo of ${x.name}`}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
