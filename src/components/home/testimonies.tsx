import React, { useEffect, useMemo, useReducer } from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import firstBg from "./images/card/1.png"
import secondBg from "./images/card/2.png"
import thirdBg from "./images/card/3.png"
import avatarKostas from "./images/testimony-avatar-kostas.png"
import avatarSteve from "./images/testimony-avatar-steve.jpg"

const ANIMATION_TIME = 300

const variants = {
  left: { opacity: 0.3, x: "-150%", rotate: -50 },
  right: { opacity: 0.3, x: "150%", rotate: 50 },
  stop: {
    x: 0,
  },
}

const BACKGROUND_IMAGES = [firstBg, secondBg, thirdBg]

type CardProps = Testimony & {
  image: string
  index: number
  length: number
  onAnimationEnd: () => void
}

const Card = ({
  testimony,
  image,
  name,
  title,
  index,
  length,
  activeLeft,
  activeRight,
  onAnimationEnd,
}: CardProps) => {
  useEffect(() => {
    if (activeRight || activeLeft) {
      setTimeout(() => {
        onAnimationEnd()
      }, ANIMATION_TIME)
    }
  }, [activeRight, activeLeft])
  const { rotate, offset } = useMemo(
    () => ({
      rotate: index === 0 ? "0" : Math.random() * 5 - 2.5,
      offset: index === 0 ? "0" : Math.random() * 40 - 20,
    }),
    [index],
  )
  const bg = useMemo(
    () =>
      BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)],
    [testimony],
  )

  return (
    <div
      className="card text-center w-[298px] h-[298px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] absolute left-1/2 transform transition-all select-none"
      style={{
        zIndex: length - index,
        rotate: `${rotate}deg`,
        transform: `translateX(calc(-50% + ${offset}px))`,
      }}
    >
      <motion.div
        animate={activeLeft ? "left" : activeRight ? "right" : "stop"}
        variants={variants}
        transition={{ duration: ANIMATION_TIME / 1000 }}
        className="text-white pt-8 lg:pt-16 pb-24 px-2 md:px-4 lg:px-8 relative transition-all"
      >
        <div className="absolute inset-0 -z-10 w-full h-full">
          <img
            src={bg}
            alt="Card background"
            className="w-full h-full"
            style={{ opacity: (100 - index * 25) / 100 }}
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="px-4 max-h-[120px] md:max-h-[200px] lg:max-h-[240px] text-ellipsis">
            <p className="text-xs md:text-base lg:text-[20px] leading-tight">{testimony}</p>
          </div>
          <div className="flex flex-col items-center mt-8 px-4">
            <div className="flex gap-2 items-center">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 rounded-full" src={image} alt={`Avatar of ${name}`} />
              </div>
              <div className="min-w-0 flex-1 text-left space-y-2">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-xs md:text-[22px] font-normal">{name}</p>
                <p className="text-[8px] md:text-sm leading-tight">{title}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

type Testimony = {
  image: string
  testimony: string
  name: string
  title: string
  activeLeft?: boolean
  activeRight?: boolean
}

let testimonies: Testimony[] = [
  {
    image: avatarKostas,
    name: "Kostas",
    title: "Cofounder & Cryptographer @SuiNetwork",
    testimony:
      "Honest and unbiased comment from my first experience after engaging a bit yesterday with the hackerhouse team: the whole experience rocks, great culture, passion and awesome ideas, everyone is super friendly and dedicated. I’m so happy we met with every single individual",
  },
  {
    image: avatarSteve,
    testimony:
      "AHH, especially the long duration hacker house, was a one of its kind experience that forges unforgettable camaraderie during the in person interactions. The relationship and network that you build during the house goes way beyond the experience itself. Whether you are looking to dabble into the industry, build something serious, or just experience the digital nomad life, AHH is the way to go!",
    name: "Steve",
    title:
      "Full Stack Developer, Ethereum Foundation Grantee",
  },
]

export const Testimonies = () => {
  const [, rerender] = useReducer((x) => x + 1, 0)
  const handleAnimationEnd = () => {
    const card = testimonies[0]
    card.activeLeft = card.activeRight = false
    testimonies = [...testimonies.slice(1), card]
    rerender()
  }

  const handleSwipe = (dir: "left" | "right") => {
    const card = testimonies[0]
    card.activeRight = dir === "right"
    card.activeLeft = dir === "left"
    rerender()
  }

  return (
    <section className="pt-20 pb-24 bg-web-tile relative overflow-hidden">
      {/* Absolute bg */}
      <StaticImage
        alt="Testimony cover background"
        src="./images/testimony-bg-left.svg"
        width={380}
        height={200}
        objectFit="contain"
        className="hidden md:block !absolute left-10 top-1/2 select-none"
      />
      <StaticImage
        alt="Testimony cover background"
        src="./images/testimony-human-bg.svg"
        width={380}
        objectFit="contain"
        className="hidden md:block !absolute -right-10 top-80 select-none"
      />
      <StaticImage
        alt="Testimony cover background"
        src="./images/testimony-number-bg.svg"
        width={90}
        objectFit="contain"
        className="hidden md:block !absolute right-48 bottom-80 select-none"
      />

      <div className="flex flex-col md:flex-row items-center lg:items-start justify-center gap-2 max-w-3xl mx-auto text-center md:text-left relative text-3xl lg:text-6xl">
        <div className="inline-flex items-center gap-2">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.4438 12.1596C39.2657 5.72334 27.4673 6.47746 19.5898 11.2868C6.01347 19.5758 4.25232 40.2676 13.9496 49.583C24.6423 59.8538 39.2367 57.3784 46.5096 50.8073C55.936 42.2906 59.9654 28.2679 51.8512 17.8229"
              stroke="#2222FF"
              strokeWidth="3.49463"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.788 25.5907C25.576 26.8972 25.4883 28.2426 25.4546 29.5663"
              stroke="#2222FF"
              strokeWidth="3.49463"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37.4851 25.2234C37.4943 26.8014 37.5924 28.4487 37.4349 30.0249"
              stroke="#2222FF"
              strokeWidth="3.49463"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.5768 36.6669C19.9684 38.1358 20.8432 39.4213 21.9134 40.4786C27.162 45.6647 36.9632 44.0443 40.7042 37.7848"
              stroke="#2222FF"
              strokeWidth="3.49463"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1 className="text-web-black font-semibold">
            See
          </h1>
        </div>
        <h1 className="text-web-black font-semibold">
          what hackers are saying...
        </h1>
      </div>

      <div className="container mx-auto relative h-[40vh] lg:h-[60vh] flex justify-center items-center">
        {testimonies.map((testimony, index) => (
          <Card
            index={index}
            key={testimony.testimony}
            length={testimonies.length}
            onAnimationEnd={handleAnimationEnd}
            {...testimony}
          />
        ))}
      </div>

      <div className="flex justify-center md:mt-12 space-x-14">
        <button onClick={() => handleSwipe("left")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1261 27.5651C11.6831 26.5013 20.7564 20.3518 21.5962 19.7615C23.7992 18.1987 24.1652 18.4109 23.4151 20.7622C22.0174 25.1802 21.9299 26.3388 21.9171 26.3744C29.7891 25.4374 35.4864 24.8673 47.3851 24.6725C51.2277 24.6086 51.454 24.6499 51.0893 25.395C50.7629 26.0334 50.0653 26.1843 46.7367 26.2724C38.1159 26.4975 22.7812 27.7711 20.4674 28.4577C19.407 28.7675 19.423 28.0978 20.5769 23.8655C20.8523 22.855 21.0402 21.9979 21.0052 21.9611C20.8418 21.7897 7.95728 30.7081 7.95614 30.756C7.95557 30.7799 8.75623 31.3255 9.73428 31.9591C13.6582 34.5056 16.3418 36.8791 19.6062 39.9843C19.0187 33.5087 18.4919 33.52 27.0114 33.5318C33.4966 33.5429 45.6339 33.3777 48.587 33.4841C52.1619 33.6052 51.1766 35.7835 44.4661 35.6832C42.002 35.6484 25.4408 35.6603 24.1137 35.6167C21.3876 35.5278 21.3993 35.54 21.5299 36.5841C21.742 38.2285 21.676 39.9978 21.4194 41.2241C20.9882 43.2481 20.3435 43.1848 18.8803 41.8217C16.8083 39.8937 16.4763 39.7661 8.43263 33.8545C4.73967 31.1579 5.07896 30.9746 10.1261 27.5651Z"
              fill="#121212"
            />
          </svg>
        </button>
        <button onClick={() => handleSwipe("right")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50.8182 27.5648C49.2612 26.5011 40.1879 20.3515 39.3482 19.7613C37.1451 18.1985 36.7792 18.4106 37.5293 20.762C38.927 25.1799 39.0144 26.3385 39.0273 26.3741C31.1553 25.4371 25.4579 24.8671 13.5592 24.6722C9.71665 24.6083 9.49029 24.6496 9.85507 25.3948C10.1814 26.0332 10.879 26.184 14.2076 26.2721C22.8284 26.4973 38.1631 27.7708 40.477 28.4575C41.5373 28.7673 41.5213 28.0976 40.3674 23.8653C40.092 22.8547 39.9041 21.9976 39.9391 21.9609C40.1025 21.7895 52.9871 30.7079 52.9882 30.7557C52.9888 30.7796 52.1881 31.3252 51.2101 31.9588C47.2862 34.5054 44.6026 36.8788 41.3381 39.9841C41.9256 33.5085 42.4524 33.5198 33.9329 33.5316C27.4477 33.5427 15.3104 33.3775 12.3574 33.4838C8.78247 33.605 9.76778 35.7832 16.4782 35.683C18.9424 35.6482 35.5035 35.6601 36.8307 35.6165C39.5568 35.5275 39.5451 35.5398 39.4144 36.5839C39.2024 38.2283 39.2684 39.9975 39.525 41.2239C39.9562 43.2478 40.6008 43.1846 42.064 41.8215C44.136 39.8934 44.468 39.7658 52.5117 33.8542C56.2047 31.1576 55.8654 30.9744 50.8182 27.5648Z"
              fill="#121212"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}
