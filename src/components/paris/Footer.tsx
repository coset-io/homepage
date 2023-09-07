import React from "react"
import cx from "clsx"

import Button from "./Button"
import Card from "./Card"
import CircleBackground from "./CircleBackground"
import { siteConfig } from "../../config"

export default function Footer() {
  return (
    <footer className="bg-[#A3F7F7] py-14 sm:py-32 px-4 sm:px-12 lg:px-20 relative overflow-hidden h-[38rem] sm:h-[52rem] md:h-[42rem] flex justify-center items-center">
      <Card className="rounded-2xl bg-white flex flex-col justify-center items-center z-10 w-full h-full">
        <div className="flex flex-col gap-8 items-center">
          <p className="font-medium text-secondary-black font-ps uppercase text-center text-sm sm:text-base">
            Get Involved with the future of ZKML today!
          </p>

          <h1 className="font-bold text-[44px] sm:text-6xl max-w-2xl text-center break-all sm:break-normal">
            We seek for all brains focusing ZKML
          </h1>

          <a href="https://tally.so/r/mZoJvy" target="_blank" rel="next">
            <Button
              className={cx("bg-[#F0C5FF] text-secondary-black uppercase")}
            >
              Apply to Hack {"->"}
            </Button>
          </a>

          <a
            href={siteConfig.telegram}
            target="_blank"
            className="underline underline-offset-4 decoration-1 tracking-widest font-ps font-medium text-sm sm:text-xl"
          >
            or contact us at telegram
          </a>
        </div>
      </Card>

      <div className="absolute z-0 top-0 right-0 bottom-0 left-0">
        <div className="absolute -top-[38rem] left-1/2 transform -translate-x-1/2 -translate-y-[38rem]">
          <CircleBackground className="animate-spin-slow" />
        </div>
      </div>
    </footer>
  )
}
