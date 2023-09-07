import React from "react"
import Picture from "./images/hero-pic.svg"
import { siteConfig } from "../../config"

export const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden lg:pt-14">
      <div className="mx-auto container lg:pl-8 py-6 pb-12 md:pb-16 lg:pt-20 lg:pb-32">
        <div className="mx-auto max-w-2xl grid grid-cols-1 gap-x-16 lg:mx-0 lg:max-w-none lg:gap-y-6 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-8">
          <div className="max-w-2xl text-4xl mt-8 flex flex-col items-center px-4 sm:px-0 sm:text-5xl lg:items-start lg:text-left font-bold tracking-wide leading-[1.15] text-gray-900 sm:text-[64px] lg:mt-0 lg:col-auto">
            <div className="">
              <h1 className="relative inline-block">
                Fostering
                <svg
                  width="129"
                  height="83"
                  viewBox="0 0 129 83"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -right-10 -top-5 w-[80px] h-[50px] sm:-right-[3.4rem] sm:-top-[1.8rem] sm:w-[120px] sm:h-[80px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.8509 19.2367C21.6824 18.5537 21.4934 17.7875 21.1947 16.9351C19.9925 12.6421 18.7544 9.13327 17.8081 6.45143L17.8081 6.45138L17.808 6.45126L17.808 6.45123L17.808 6.45117C16.3658 2.36391 15.6013 0.197598 16.675 0.103705C18.53 -0.00996891 22.4329 8.19327 25.494 18.6144C27.1478 24.2389 26.9088 24.3731 23.8604 22.7139C22.5301 21.9899 22.2473 20.8436 21.8509 19.2367ZM42.4452 1.80669C41.8679 2.3184 41.6859 6.67943 41.9705 13.1115C42.4137 22.733 42.3921 28.0357 42.3799 31.04V31.04C42.3642 34.9029 42.364 34.9655 43.3871 35.5223C45.334 36.582 45.4406 35.715 45.4625 21.5206C45.479 6.29916 44.537 0.0378385 42.4452 1.80669ZM25.317 29.1889C24.8037 29.339 24.8302 29.7172 25.315 31.633C26.056 34.4811 28.5719 36.8746 29.3349 35.4728C29.9335 34.3119 26.4622 28.8541 25.317 29.1889ZM0.905777 21.0234C2.8376 20.9515 6.56071 24.2994 16.6885 35.0978C20.8077 39.4872 21.4226 40.6148 19.4619 40.3736C18.0477 40.1655 17.1575 39.4828 13.7194 35.7944C9.52544 31.2982 5.15964 26.8737 2.66509 24.624C-0.23294 21.9564 -0.672768 21.0562 0.905777 21.0234ZM66.0258 6.67888C65.4623 7.1651 63.6061 13.6871 62.8028 17.9082C62.613 18.9282 61.928 21.5288 61.2975 23.6634C60.0407 27.8029 60.0576 28.0768 61.5178 28.8715L61.5511 28.8896C61.9268 29.0942 62.1968 29.2413 62.4278 29.1947C63.0184 29.0754 63.353 27.6888 64.5436 22.7557L64.5932 22.5499C67.5942 10.1422 68.0642 4.94706 66.0258 6.67888ZM117.003 61.8791C119.838 61.3075 122.034 60.3224 122.534 59.4049C123.227 58.1305 121.847 56.8835 119.949 57.1386C107.341 58.7671 92.9795 63.3729 93.7834 65.4954C94.5756 67.5784 96.6142 67.4325 106.733 64.5814C111.193 63.3417 115.809 62.1211 117.003 61.8791ZM88.5407 26.3359C90.3093 24.2281 91.5005 22.8083 92.3815 21.9486C94.8872 19.4801 97.3221 22.7546 95.6595 24.9552C91.2916 30.54 77.303 46.0528 76.5847 46.0914C75.7223 46.1506 74.5665 45.2238 74.2334 44.2496C73.8298 43.0388 73.8574 42.9881 75.8851 40.7879C81.9795 34.1561 85.9025 29.4804 88.5407 26.3359ZM122.8 78.7445C113.833 76.6724 96.5477 74.6316 95.0461 75.4993C93.997 76.0846 95.8052 78.1921 97.6336 78.4934L104.456 79.5636C114.949 81.211 128.256 82.507 128.575 81.9208C129.202 80.7089 127.639 79.8587 122.8 78.7445ZM98.8302 42.3739C105.73 39.0923 108.132 37.7898 108.97 37.2877C110.539 36.3575 112.295 38.8661 110.232 39.362C109.786 39.4496 107.576 40.4601 105.296 41.5981C94.7472 46.8253 88.9605 49.16 89.6264 47.9366C89.9593 47.3249 95.7053 43.8447 98.8302 42.3739Z"
                    fill="#FFD25F"
                  />
                </svg>
              </h1>
            </div>
            <div className="inline-flex gap-4">
              <div className="text-primary-blue relative inline">
                Hacker
                <svg
                  width="231"
                  height="22"
                  viewBox="0 0 231 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 -z-20 w-full"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M225.544 4.11992C220.652 5.41191 207.794 5.47652 172.889 5.60572C118.385 5.79952 75.1275 7.2207 63.1049 9.28788C62.1502 9.48168 138.552 10.9029 146.398 9.86927C158.629 8.18968 217.042 9.61088 228.796 11.5489C232.137 12.0657 230.885 13.8745 228.707 14.262C225.306 14.908 216.177 14.8434 191.147 14.7142C173.546 14.6496 33.5108 16.1354 18.2066 18.784C9.61472 20.2698 4.39398 21.6264 2.00735 21.3034C0.00856018 21.045 -0.0212708 20.2698 1.70903 18.138C2.87251 16.7168 1.55988 15.877 0.724564 15.4894C-0.558258 14.8434 -0.0212555 12.6471 1.58971 10.9029C3.7675 8.51269 7.52643 8.57729 5.73645 10.9675C5.34863 11.4843 5.25914 12.7763 6.63144 12.5179C10.629 11.7427 38.8807 6.44551 46.5477 5.54112C128.409 -4.278 208.301 2.89253 225.216 0.502346C231.213 -0.402047 228.468 3.34473 225.544 4.11992Z"
                    fill="#FFD25F"
                  />
                </svg>
              </div>
              <h1>culture</h1>
            </div>
            <h1>and cooperation</h1>
          </div>
          <div className="mt-6 mx-auto flex flex-col items-center max-w-md px-6 sm:px-0 lg:mx-0 lg:block lg:mt-10 lg:col-end-2 lg:row-start-1 text-center lg:text-left">
            <p className="font-light leading-8 text-neutral-600/70">
              Non-Profit Web3 dev community advocates spreading Hacker culture
              and promoting global Hacker collaboration. We LOVE Open-source.
            </p>
            <div className="mt-4 flex items-center gap-x-6 w-full sm:max-w-fit">
              <a
                href={siteConfig.telegram}
                target="_blank"
                className="uppercase w-full bg-primary-blue px-10 py-5 text-xs font-semibold text-white shadow-sm hover:bg-transparent hover:border-web-black border-2 hover:text-web-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-web-gray transition-colors"
              >
                Join us now
              </a>
            </div>
          </div>
          <img
            src={Picture}
            alt="Hero background"
            className="mt-0 px-6 sm:px-0 aspect-[6/5] w-full rounded-2xl object-cover row-start-1 row-span-2 lg:max-w-none lg:row-span-2 lg:row-end-2"
          />
        </div>
      </div>
    </div>
  )
}
