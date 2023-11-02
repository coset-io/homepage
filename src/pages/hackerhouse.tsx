import React, { useState } from "react"
import dayjs from "dayjs"
import CustomParseFormat from "dayjs/plugin/customParseFormat"
import clsx from "clsx"

import Header from "../components/site-header"
import Footer from "../components/footer"
import { TailwindIndicator } from "../components/tailwind-indicator"
import MoveHouseImage from "../components/hackerhouse/images/move-account-abstraction.png"
import ZkpImage from "../components/hackerhouse/images/zkp.png"
import TokyoImage from "../components/hackerhouse/images/tokyo.png"
import ChiangmaiImage from "../components/hackerhouse/images/chiangmai.png"
import ParisImage from "../components/hackerhouse/images/paris.png"
import SuiDaliImage from "../components/hackerhouse/images/sui-dali.png"
import IstanbulImage from "../components/istanbul/images/poster.png"
import SeoulImage from "../../content/images/og/seoul.png"
import MontenegroImage from "../../content/images/og/montenegro.png"

type House = {
  link: string
  theme: string
  name: string
  startDate: string
  endDate: string
  location: string
  coverUrl?: string
}

const HOUSES: House[] = [
  {
    link: "/hackerhouse/istanbul",
    theme: "# Istanbul",
    name: "ZKONNECT",
    startDate: "22nd Oct, 2023",
    endDate: "20th Nov, 2023",
    location: "@Istanbul",
    coverUrl: IstanbulImage,
  },
  {
    link: "/hackerhouse/sui",
    theme: "# Move",
    name: "x Sui Move",
    startDate: "3rd Sep, 2023",
    endDate: "24th Sep, 2023",
    location: "@Dali",
    coverUrl: SuiDaliImage,
  },
  {
    link: "/hackerhouse/paris",
    theme: "# ZKML",
    name: "x ETHCC",
    startDate: "15th July, 2023",
    endDate: "24th July, 2023",
    location: "@Paris",
    coverUrl: ParisImage,
  },
  {
    link: "/hackerhouse/montenegro",
    theme: "# Account Abstraction",
    name: "",
    startDate: "19th May, 2023",
    endDate: "24th May, 2023",
    location: "@Podgorica",
    coverUrl: MontenegroImage,
  },
  {
    link: "/hackerhouse/seoul",
    theme: "# AI + Web3",
    name: "",
    startDate: "31th May, 2023",
    endDate: "5th June, 2023",
    location: "@Seoul",
    coverUrl: SeoulImage,
  },
  {
    link: "/hackerhouse/chiangmai",
    theme: "# Zkp",
    name: "",
    startDate: "8th Apr, 2023",
    endDate: "29th Apr, 2023",
    location: "@Chiang Mai",
    coverUrl: ChiangmaiImage,
  },
  {
    link: "/hackerhouse/tokyo",
    theme: "# On-Chain Gaming",
    name: "",
    startDate: "9th Apr, 2023",
    endDate: "17th, Apr 2023",
    location: "@Tokyo",
    coverUrl: TokyoImage,
  },
  {
    link: "/hackerhouse/zkp",
    theme: "# Zkp",
    name: "x ETHDenver",
    startDate: "21st Feb, 2023",
    endDate: "06th, Mar 2023",
    location: "@Denver",
    coverUrl: ZkpImage,
  },
  {
    link: "/hackerhouse/move",
    theme: "# Move",
    name: "x NonceGeek",
    startDate: "13th Feb, 2023",
    endDate: "05th, Mar 2023",
    location: "@Dali",
    coverUrl: MoveHouseImage,
  },
  {
    link: "https://www.notion.so/antalpha/1a7771e12a444d1b96dd8cfc3f72ed4d?v=b373397745164802ad82571141dd5fcc", // 跳转到notion项目页面
    theme: "# Infra and open source tools",
    name: "",
    startDate: "1st Dec, 2022",
    endDate: "21st Dec, 2022",
    location: "@Dali",
  },
]

type Filter = Being | "ALL"
const FILTERS: Filter[] = ["ALL", "UPCOMING", "ONGOING", "PAST"]

export default function HackerHouse() {
  const [currentFilter, setCurrentFilter] = useState<Filter>("ALL")
  const filteredList = HOUSES.filter(
    (x) =>
      currentFilter === "ALL" ||
      getBeing(x.startDate, x.endDate) === currentFilter,
  )

  return (
    <div className="font-inter bg-web-paper">
      <Header />
      <main>
        <div className="flex flex-col pt-14 pb-20 justify-center items-center text-center">
          <div className="relative">
            <div className="absolute -left-16 top-0">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_1377)">
                  <path
                    d="M34.3287 23.66L35.5614 23.6313C49.0634 23.402 44.5627 3.56456 30.1147 8.81056C19.4507 12.6806 21.4287 30.4826 32.838 33.4066C37.8834 34.6966 43.502 33.7792 39.3167 32.3459C35.7334 31.1419 32.838 27.6733 33.0387 24.8353C33.096 24.2047 33.6407 23.66 34.3287 23.66Z"
                    fill="#FFD25F"
                  />
                  <path
                    d="M7.98394 8.09396C-5.00206 13.082 0.272593 34.8687 14.6919 35.8147C18.4472 36.0727 19.4219 35.184 16.5839 34.1234C13.8319 33.0914 10.3633 28.218 9.99061 24.9214C9.90461 24.262 10.4206 23.7173 11.0799 23.7173C14.8639 23.7173 16.4406 23.7174 18.6479 20.6787C24.0659 13.1681 16.8706 4.68263 7.98394 8.09396Z"
                    fill="#FFD25F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1377">
                    <rect
                      width="43"
                      height="43"
                      fill="white"
                      transform="translate(0.581055 0.150391)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="absolute -right-32 top-0">
              <svg
                width="117"
                height="87"
                viewBox="0 0 117 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.86646 1.34577C12.8974 3.69582 14.6812 4.4886 22.5808 8.31097C33.3682 13.5207 43.7878 18.8155 46.5058 20.4577C52.1971 23.9119 51.8289 23.8552 49.9035 21.1939C42.9667 11.5954 46.3926 12.4165 65.0514 24.8746C89.7411 41.3533 106.984 57.2938 114.516 70.6015C119.527 79.4635 114.516 86.1739 102.567 86.6554C95.8569 86.9386 95.2907 85.4095 101.831 84.7582C126.776 82.2949 106.361 53.6131 57.6898 22.7227C49.8187 17.7112 50.0736 17.6545 54.6885 23.6572C55.0002 24.0535 56.4441 27.253 58.4263 26.8C59.2755 26.6017 59.2471 27.2248 58.3695 27.9607C56.8405 29.2348 55.9627 29.0083 51.7441 26.2903C50.47 25.4692 27.9037 11.7936 16.6348 7.80132C16.6066 7.80132 5.70576 3.21447 7.34795 4.60185C9.10326 6.04584 5.96046 3.15783 18.7585 13.6624C26.9977 20.4292 36.3979 29.3764 54.1507 47.3557C73.602 67.0621 72.6679 65.59 81.6151 73.8292C87.5326 79.2655 92.6291 83.2009 94.696 83.9656C95.4322 84.2203 95.2906 84.6169 94.3562 85.0132C91.1002 86.344 82.861 79.6618 57.2938 54.8872C43.3914 41.4382 34.5291 33.0289 31.7259 30.6223C30.5934 29.6596 11.878 12.7562 10.2076 11.1707C6.55505 7.74471 5.25245 6.98022 2.27975 4.85667C-2.13745 1.7988 2.61935 -0.324747 6.86646 1.34577Z"
                  fill="#FF495D"
                />
                <path
                  d="M93.4785 66.8359C92.8556 66.3829 92.7423 66.1564 92.9971 65.8732C93.5634 65.2219 94.611 65.4769 95.8285 66.5527C97.0459 67.657 99.1694 70.6864 99.1694 71.3377C99.1694 72.6403 96.6778 73.3198 95.4886 72.3286C94.6958 71.7058 94.979 71.0545 95.97 71.2246C96.4797 71.3377 96.6212 71.2528 96.508 70.9414C96.1116 70.0069 94.2146 67.402 93.4785 66.8359Z"
                  fill="#FF495D"
                />
                <path
                  d="M89.7694 62.9566C87.7591 63.6925 88.099 62.7016 90.2507 61.5691C91.4965 60.9178 94.3845 60.7762 95.9134 61.3144C101.944 63.466 108.004 72.2434 106.078 76.0657C102.794 82.5781 94.1297 80.4826 87.4192 71.5921C82.9456 65.6464 82.5493 62.2486 86.1736 61.2577C88.3819 60.6631 89.288 61.7956 87.2779 62.6452C84.7012 63.721 86.7964 67.9114 93.0255 74.2537C96.8762 78.1609 100.217 79.5484 102.369 78.1327C108.088 74.3671 96.5364 60.4933 89.7694 62.9566Z"
                  fill="#FF495D"
                />
              </svg>
            </div>

            <h1 className="text-6xl font-semibold leading-tight">
              Antalpha HackerHouses
            </h1>
          </div>
        </div>

        <div className="mx-auto container flex items-center justify-between">
          {FILTERS.map((x) => (
            <button
              className={clsx(
                "w-full capitalize relative py-4 text-2xl",
                currentFilter === x ? "text-primary-black" : "text-gray-500",
              )}
              onClick={() => setCurrentFilter(x)}
            >
              <span className="relative z-10">{x.toLowerCase()}</span>

              {currentFilter === x && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <svg
                    width="91"
                    height="9"
                    viewBox="0 0 91 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M90.6586 2.69106C90.2891 1.72633 87.1147 1.32013 77.5746 0.981632C68.6728 0.660056 58.3098 -0.270827 40.2038 0.236925C26.364 0.626202 9.13148 2.18331 9.13148 3.04649C9.13148 3.67271 9.80331 3.68964 16.2193 3.13111C22.1483 2.62336 25.1883 2.50488 28.9002 2.36948C14.0191 3.68964 10.8447 4.55282 2.91701 5.38215C-2.05457 5.90683 0.851117 7.41315 2.66507 7.26083C2.68187 7.26083 25.8098 5.36522 27.9932 5.46677C28.1948 5.4837 25.9945 5.78835 23.0888 6.14378C14.9764 7.15928 16.5385 8.85161 22.6186 8.07306C43.0759 5.44968 62.324 4.63727 77.1547 5.77125C81.8408 6.12668 82.3615 6.12668 82.3615 5.68663C82.3615 4.90807 81.085 4.31587 79.0863 4.19739C75.9622 3.99429 63.9364 3.41867 58.4945 3.24942C58.0746 3.23249 58.2762 2.91109 58.6457 2.87724C60.8627 2.65721 78.4648 2.82629 85.3847 3.06324C90.4739 3.23249 90.8434 3.21574 90.6586 2.69106Z"
                      fill="#FFD25F"
                    />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mx-auto container py-12 px-6 sm:px-0 mt-12 mb-24 min-h-[40vh]">
          {!!filteredList.length && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredList.map((x) => {
                const being = getBeing(x.startDate, x.endDate)

                return (
                  <a
                    className="flex flex-col space-y-3 w-full md:max-w-xs xl:max-w-sm 2xl:max-w-md group"
                    href={x.link}
                    target="_blank"
                  >
                    <div className="rounded-xl border overflow-hidden bg-white group-hover:border-web-white/70 group-hover:shadow-lg transition-all flex justify-center items-center h-[240px]">
                      {x.coverUrl ? (
                        <img
                          alt={`Cover of ${x.theme}`}
                          src={x.coverUrl}
                          className="object-fill w-full h-full"
                        />
                      ) : (
                        <div className="px-6 h-full w-full flex justify-center items-center">
                          <h3 className="text-xl">{x.theme}</h3>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <div className="inline-flex items-center space-x-1">
                        {x.location ? (
                          <>
                            <p
                              className={clsx("text-xs uppercase", {
                                "text-primary-blue": being === "PAST",
                                "text-pink-500": being === "UPCOMING",
                                "text-green-400": being === "ONGOING",
                              })}
                            >
                              {being}
                            </p>
                          </>
                        ) : null}
                      </div>
                      <p className="text-xs text-gray-600/70 font-light">
                        {x.startDate}{" "}
                        <span className="text-primary-blue">{"->"}</span>{" "}
                        {x.endDate}
                      </p>
                    </div>
                    <h2 className="text-2xl font-normal">
                      Antalpha Hackerhouse {x.location} {x.theme}
                    </h2>
                  </a>
                )
              })}
            </div>
          )}

          {!filteredList.length && (
            <div className="flex w-full justify-center">
              <h1 className="text-4xl leading-tight text-gray-500">
                Oops, There is nothing here!
              </h1>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <TailwindIndicator />
    </div>
  )
}

dayjs.extend(CustomParseFormat)

function getDay(givenDate: string) {
  const day = dayjs(givenDate, "Do MMM, YYYY")
  if (!day.isValid()) {
    return dayjs(givenDate, "Do MMMM, YYYY")
  }
  return day
}

type Being = "UPCOMING" | "PAST" | "ONGOING"

// startDate and endDate is a string of the form "15th July, 2023"
function getBeing(startDate: string, endDate: string): Being {
  const now = dayjs()
  const start = getDay(startDate)
  const end = getDay(endDate)
  if (start.diff(now) > 0) {
    return "UPCOMING"
  }
  if (end.diff(now) < 0) {
    return "PAST"
  }
  return "ONGOING"
}
