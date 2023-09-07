import React from "react"
import { siteConfig } from "../../config"

export function Feature() {
  return (
    <section className="text-white bg-primary-blue">
      <div className="container mx-auto flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between items-center gap-y-12 py-12 sm:py-20 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between flex-1 gap-y-12 xl:mr-48">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="font-semibold text-[116px]">60+</h1>
              <p className="uppercase font-light text-xs">Project created</p>
            </div>
            <div className="flex flex-col items-center lg:items-start w-[380px]">
              <h1 className="font-semibold text-[116px] relative">
                200+
                <svg
                  width="374"
                  height="164"
                  viewBox="0 0 374 164"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 -translate-x-10"
                >
                  <path
                    d="M86.0615 23.1793C145.161 -9.39045 258.802 -3.88027 317.135 24.6199C343.701 37.5999 392.688 75.2097 362.879 110.718C357.622 116.981 351.231 122.069 344.619 126.472C271.851 174.924 170.358 169.99 92.2614 140.998C80.614 136.674 69.1529 131.541 58.6083 124.565C50.7218 119.348 43.0974 112.88 36.9559 105.333C18.9781 83.2396 23.6742 61.005 43.0169 42.2742C65.4431 20.5572 96.1108 13.8272 125.047 10.1415C150.351 6.91869 175.623 6.29982 201.046 7.61515C248.725 10.0816 303.672 14.0062 343.66 43.6973C361.126 56.6659 379.891 84.3777 364.92 106.806C348.696 131.11 310.443 138.98 284.713 144.109C215.303 157.945 105.477 151.084 42.2535 114.777C35.4358 110.861 28.5288 107.212 22.4298 102.064C17.6108 97.9955 12.9968 93.3567 8.99371 88.3364C-19.3727 52.7582 43.9253 30.3883 66.2487 26.5467C136.475 14.4615 240.414 -2.97862 305.088 29.1702"
                    stroke="#FFD25F"
                    strokeWidth="2"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h1>
              <p className="uppercase font-light text-xs">Hackers onboarded</p>
            </div>
        </div>

        <div className="flex flex-col text-center lg:text-left items-center lg:items-start max-w-sm lg:max-w-md">
          <p className="font-normal text-xs leading-[2]">
            Starting in the summer of 2022, we grow our community by hosting
            hackerhouses worldwide.
          </p>
          <p className="font-light text-xs leading-[2]">
            helping developers build open source software to promote innovation
            and application of web3 technology.
          </p>
          <a
            href={siteConfig.hackerHouseNotion}
            className="mt-12 border-2 border-web-paper py-4 px-10 w-full lg:max-w-fit hover:bg-white hover:text-web-black uppercase font-semibold text-xs transition-colors"
          >
            discover all
          </a>
        </div>
      </div>
    </section>
  )
}
