import React from "react"
import CircleBackground from "./CircleBackground"
import HeroAnimationBackground from "./icon/HeroAnimationBackground"

export default function HeroAnimations() {
  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 overflow-hidden z-0">
      <div className="absolute -left-[7rem] -top-[87rem]">
        <CircleBackground className="animate-spin-slow" />
      </div>
      <HeroAnimationBackground className="absolute z-10 bottom-0" />
    </div>
  )
}
