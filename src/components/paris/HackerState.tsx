import React, { useRef } from "react"
import cx from "clsx"

import Button from "./Button"

export default function HackerState() {
  const containerRef = useRef(null)

  return (
    <section className="relative z-0" ref={containerRef}>
      <div className="h-11 bg-stone-black relative z-30" />

      <div className="absolute h-[140vh] w-[100vw] bg-[#9290F2] overflow-hidden -z-10" />

      <div className="sticky top-10 left-0 right-0 -bottom-32 z-0 h-[140vh] w-full max-w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hackerstate-background.svg"
          alt="Chill hacker state background"
          className="absolute top-0 left-0 right-0 -bottom-32 z-0 object-cover transform translate-y-36 scale-125 h-[100vh] md:h-[93vh] w-full max-w-full"
        />
      </div>

      <div className="w-full flex justify-end absolute top-0 left-0 right-0 bottom-0 -z-10">
        <div className="max-w-sm lg:max-w-screen-sm mt-[16vh] lg:mt-[24vh] 2xl:mt-[32vh] mr-8 md:mr-12 lg:mr-32 md:sm-32 text-primary-black text-3xl lg:text-4xl 2xl:text-5xl space-y-4">
          <h1 className="font-bold">Our Hacker State Includes...</h1>
          <p className="font-medium bg-white rounded-2xl px-4 py-6 max-w-fit font-ps">
            Hack Zk by Lambda Class
          </p>
          <p className="font-medium bg-white rounded-2xl px-4 py-6 max-w-fit font-ps">
            Autonomous World gaming House
          </p>
          <p className="font-medium bg-white rounded-2xl px-4 py-6 max-w-fit font-ps">
            Sozu Haus
          </p>
          <h1 className="text-8xl text-white">...</h1>
          <h1 className="font-bold">
            And no need to FOMO as we bring people together on hacker village
            gatherings.
          </h1>
        </div>
      </div>

      <div className="relative z-40 bg-stone-black text-white py-32 xl:py-24 px-8 md:px-12 xl:px-20 flex flex-col">
        <h1 className="text-5xl font-bold">Why ZKML ?</h1>

        <div className="flex flex-wrap justify-between mt-12 xl:mt-8 -mr-20 pr-8">
          <div className="mb-16 max-w-[34rem] pr-8 space-y-10">
            <h5 className="text-xl font-ps font-medium">Risky</h5>
            <h1 className="text-5xl font-bold leading-tight">
              The flaws of Traditional Platforms
            </h1>

            <p className="text-lg text-white/80 font-ps font-medium leading-7">
              Machine learning developers can use bounty platforms to get
              rewarded for their solutions. However, these platforms often
              require full model disclosure for verification, which can expose
              their privacy and security.
            </p>
          </div>

          <div className="mb-16 max-w-[34rem] pr-8 space-y-10">
            <h5 className="text-xl font-ps font-medium">Innovative</h5>
            <h1 className="text-5xl font-bold leading-tight">
              The Solution of ZKML
            </h1>

            <p className="text-lg text-white/80 font-ps font-medium leading-7">
              ZKML is a new programming language that uses zero-knowledge proofs
              (ZKPs) to verify private models with public data. ZKML also has
              many features that make machine learning easier and more
              accessible.
            </p>
          </div>

          <div className="mb-16 max-w-[34rem] pr-8 space-y-10">
            <h5 className="text-xl font-ps font-medium">Promising</h5>
            <h1 className="text-5xl font-bold leading-tight">
              The Benefits of ZKML
            </h1>

            <p className="text-lg text-white/80 font-ps font-medium leading-7">
              ZKML offers verifiable, private, and efficient machine learning
              models. ZKML can also attract Web2 developers to the Web3
              ecosystem, where they can enjoy the benefits of decentralized and
              distributed computing.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="https://www.youtube.com/watch?v=GYWkRIZeANE"
            target="_blank"
            rel="external"
          >
            <Button
              className={cx("bg-[#B2ADF4] text-secondary-black uppercase")}
            >
              How to get involed {"  ->"}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
