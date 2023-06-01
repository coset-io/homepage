"use client"

import React from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/20/solid"
import cx from "clsx"
import Tips from "./icon/Tips"
import CoolOff from "./icon/CoolOff"

export default function Questions() {
  return (
    <section className="px-8 md:px-14 lg:px-48 py-24 lg:py-40 bg-white relative z-10">
      <h1 className="text-6xl lg:text-8xl font-bold flex-1">Good to know~</h1>

      <div className="w-full px-0 lg:px-4 mt-32 lg:mt-48 text-primary-black relative">
        <div className="absolute -top-[8.25rem] transform -rotate-[30deg] scale-[65%] hover:rotate-0 transition-transform duration-300">
          <Tips />
        </div>

        <div className="absolute right-24 bottom-48 transform -rotate-[30deg] scale-[65%] hover:rotate-0 transition-transform duration-300">
          <CoolOff />
        </div>

        <div className="mx-auto w-full rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-8 text-left text-sm font-medium border-t focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                  <h1 className="text-4xl lg:text-6xl font-bold mr-auto flex-1">
                    Who can participate?
                  </h1>
                  <XMarkIcon
                    className={cx(
                      `transition-transform duration-300 delay-0 transform h-12 w-12`,
                      open ? "rotate-0" : "rotate-45",
                    )}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-full"
                  leave="transition-all duration-300 ease-out"
                  leaveFrom="transform opacity-100 max-h-full"
                  leaveTo="transform opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="max-w-2xl px-4 pb-8 py-2 text-lg xl:text-xl font-ps font-medium leading-7 text-stone-black">
                    <p>
                      We welcome participants who meet one or more of the
                      following criteria:
                    </p>
                    <ul className="list-disc py-2">
                      <li>
                        Have programming skills, and preferably have
                        participated in the development of AI or ZKML-related
                        open-source projects.
                      </li>
                      <li>
                        Are ZKML/AI engineers or enthusiasts, with a strong
                        mathematical background and published ZKML/AI-related
                        research results.
                      </li>
                    </ul>
                    <p>
                      If you are interested in participating, please submit your
                      application outlining your experience, qualifications, and
                      interest in ZKML/AI technology.
                    </p>
                    <p>We look forward to reviewing your application.</p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-8 text-left text-sm font-medium border-t focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                  <h1 className="text-4xl lg:text-6xl font-bold mr-auto flex-1">
                    Location & Dates
                  </h1>
                  <XMarkIcon
                    className={cx(
                      `transition-transform duration-300 delay-0 transform h-12 w-12`,
                      open ? "rotate-0" : "rotate-45",
                    )}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-full"
                  leave="transition-all duration-300 ease-out"
                  leaveFrom="transform opacity-100 max-h-full"
                  leaveTo="transform opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="max-w-2xl px-4 pb-8 py-2 text-lg xl:text-xl font-ps font-medium leading-7 text-stone-black">
                    <p>Location： Paris, France</p>
                    <p>Date: 13th July 2023 - 20th July 2023 (1 week)</p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-8 text-left text-sm font-medium border-t focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                  <h1 className="text-4xl lg:text-6xl font-bold mr-auto flex-1">
                    Who are WE?
                  </h1>
                  <XMarkIcon
                    className={cx(
                      `transition-transform duration-300 delay-0 transform h-12 w-12`,
                      open ? "rotate-0" : "rotate-45",
                    )}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-full"
                  leave="transition-all duration-300 ease-out"
                  leaveFrom="transform opacity-100 max-h-full"
                  leaveTo="transform opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="max-w-2xl px-4 pb-8 py-2 text-lg xl:text-xl font-ps font-medium leading-7 text-stone-black">
                    Antalpha Labs is a Web3 developer community dedicated to
                    push the boundaries of crypto space by supporting the
                    innovation and success of open-source projects.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-8 text-left text-sm font-medium border-t focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                  <h1 className="text-4xl lg:text-6xl font-bold mr-auto flex-1">
                    What events will happen?
                  </h1>
                  <XMarkIcon
                    className={cx(
                      `transition-transform duration-300 delay-0 transform h-12 w-12`,
                      open ? "rotate-0" : "rotate-45",
                    )}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-full"
                  leave="transition-all duration-300 ease-out"
                  leaveFrom="transform opacity-100 max-h-full"
                  leaveTo="transform opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="max-w-2xl px-4 pb-8 py-2 text-lg xl:text-xl font-ps font-medium leading-7 text-stone-black">
                    Hacker House Community event On-stage presentations
                    Exclusive secret guest And much more!
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-8 text-left text-sm font-medium border-t focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                  <h1 className="text-4xl lg:text-6xl font-bold mr-auto flex-1">
                    What is Hacker State?
                  </h1>
                  <XMarkIcon
                    className={cx(
                      `transition-transform duration-300 delay-0 transform h-12 w-12`,
                      open ? "rotate-0" : "rotate-45",
                    )}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-full"
                  leave="transition-all duration-300 ease-out"
                  leaveFrom="transform opacity-100 max-h-full"
                  leaveTo="transform opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="max-w-2xl px-4 pb-8 py-2 text-lg xl:text-xl font-ps font-medium leading-7 text-stone-black">
                    Hacker state: An innovative experiment of the Network state,
                    for more please visit{" "}
                    <a
                      href="https://antalpha.notion.site/AHH-ZKML-Paris-July-2023-5df765cda32140d5accd9f96963cc48a"
                      target="_blank"
                      rel="next"
                      className="underline underline-offset-4 decoration-1"
                    >
                      Here💡
                    </a>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  )
}
