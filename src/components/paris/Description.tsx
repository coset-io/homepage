import React, { PropsWithChildren, ReactElement } from "react"
import Card from "./Card"
import HouseBook from "./icon/HouseBook"
import Bulb from "./icon/Bulb"
import cx from "clsx"
import Furniture from "./icon/Furniture"
import { ReactNode } from "react"
import DinnerBackground from "./icon/DinnerBackground"
import Heart from "./icon/Heart"
import Accommodation from "./icon/Accommodation"
import HaveFunCircle from "./icon/HaveFunCircle"

const DescriptionCard = ({
  icon,
  heading,
  title,
  content,
  bgIcon,
  lamp = false,
  color = "green",
}: PropsWithChildren<{
  icon: ReactElement
  heading: string
  title: string
  content: ReactNode
  bgIcon: ReactElement
  lamp?: boolean
  color?: "green" | "pink" | "purple"
}>) => {
  return (
    <Card
      className={cx(
        {
          "bg-[#A3F7F770]": color === "green",
          "bg-[#F0C5FF70]": color === "pink",
          "bg-[#9290F266]": color === "purple",
        },
        "h-[44rem] w-full",
      )}
    >
      <div className="relative z-10">
        <div className="flex items-end gap-3">
          {icon}
          <h5 className="text-secondary-black uppercase font-ps pb-2 text-sm 2xl:text-base">
            {heading}
          </h5>
        </div>
        <h1 className="mt-8 text-5xl 2xl:text-7xl font-bold max-w-lg leading-snug 2xl:leading-[6rem]">
          {title}
        </h1>
        <p className="mt-7 text-xl font-medium font-ps max-w-md">{content}</p>
      </div>

      <div className="absolute z-0 right-0 bottom-0">{bgIcon}</div>

      {lamp && (
        <div className="absolute z-0 top-0 right-20">
          <svg
            width="192"
            height="385"
            viewBox="0 0 192 385"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M90.4971 0.737305H84.2324V178.473H90.4971V0.737305Z"
              fill="#9290F2"
            />
            <path
              d="M120.819 178.474H53.9141V219.872H120.819V178.474Z"
              fill="#9290F2"
            />
            <path
              style={{ mixBlendMode: "soft-light" }}
              d="M191.32 384.737H0.320312L53.9131 219.872H120.819L191.32 384.737Z"
              fill="url(#paint0_linear_3384_3046)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3384_3046"
                x1="87.3523"
                y1="219.571"
                x2="87.3523"
                y2="381.776"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </Card>
  )
}

export default function Description() {
  return (
    <section className="p-10 lg:p-28 xl:p-42 text-primary-black relative bg-white w-full z-10">
      <div className="max-w-[1920px] mx-auto flex flex-wrap flex-col-reverse 2xl:flex-row-reverse justify-center relative">
        <HaveFunCircle className="hover:animate-spin-medium ml-auto order-2 2xl:ml-0 2xl:mr-auto 2xl:order-1" />

        <div className="text-6xl mb-20 font-bold space-y-2 inline-block">
          <h1 className="break-keep 2xl:mt-40">If you have missed</h1>

          <div className="inline-flex gap-4">
            <h1>the</h1>
            <span className="bg-[#A3F7F7] text-secondary-black p-1 rounded-2xl font-ps font-medium">
              Zuzalu Vibes
            </span>
          </div>

          <h1>
            We bring them to <span className="text-[#E497FF]">Paris</span> for{" "}
            <span className="text-[#E497FF]">YOU</span>
          </h1>
        </div>
      </div>

      <div className="mt-20 2xl:mt-42 mx-auto xl:grid grid-cols-2 auto-cols-auto auto-rows-auto clear-both">
        <div className="space-y-3 w-[95%] xl:max-w-screen-sm ">
          <h1 className="font-bold text-6xl">Network state 🪩</h1>

          <h1 className="font-bold text-6xl">but for hackers ?!</h1>

          <h1 className="font-bold text-6xl">Hell’ya LFG !</h1>

          <p className="text-xl font-ps">
            In July, a worldwide group of developers, designers, creators, and
            thinkers will unite at 🤌{" "}
            <a
              href="https://www.ethcc.io/"
              target="_blank"
              className="text-[#9290F2] underline"
            >
              ETHCC
            </a>{" "}
            to shape the decentralized future.
          </p>
        </div>

        <div className="row-start-2 row-end-3 col-start-1 col-end-3 xl:row-span-2 xl:col-span-1 py-10">
          <DescriptionCard
            icon={<Accommodation />}
            heading="Large house For party"
            title="Free Accommodation"
            content={
              <p>
                Complimentary accommodation in{" "}
                <span className="underline underline-offset-4 decoration-1">
                  a stunning private villa
                </span>
                , and{" "}
                <span className="underline underline-offset-4 decoration-1">
                  a Private Luxury car
                </span>
                .
              </p>
            }
            bgIcon={<Furniture />}
            color="purple"
            lamp
          />
        </div>

        <div className="row-start-3 col-start-1 row-end-4 col-end-3 xl:row-span-2 xl:col-span-1 py-10 xl:mr-10">
          <DescriptionCard
            icon={<Bulb />}
            heading="What events will happen?"
            title="Workshops & Sessions"
            content="Learn, exchange, and collaborate with experts and peers in your field."
            bgIcon={
              <div className="pr-2">
                <HouseBook />
              </div>
            }
          />
        </div>

        <div className="row-start-4 col-start-1 row-end-5 col-end-3 xl:row-span-2 xl:col-span-1 py-10">
          <DescriptionCard
            icon={<Heart />}
            heading="Are we going to have fun? ( For sure )"
            title="Leisure & Networking"
            content={
              <p>
                Activities designed for{" "}
                <span className="underline underline-offset-4 decoration-1">
                  networking and bonding
                </span>
                , as well as gourmet meals crafted by our in-house chef &{" "}
                <span className="underline underline-offset-4 decoration-1">
                  French breakfast
                </span>
                .
              </p>
            }
            bgIcon={<DinnerBackground />}
            color="pink"
          />
        </div>
      </div>
    </section>
  )
}
