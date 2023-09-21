import React from "react"
import { Disclosure, DisclosureProps, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import logo from "../../content/images/antalpha/antalphalogo.svg"
import logoHeading from "../../content/images/antalpha/antalphalogo2.svg"
import { Link } from "gatsby-link"
import clsx from "clsx"

export default function Header(props: DisclosureProps<"header">) {
  return (
    <Disclosure
      as="header"
      {...props}
      className={clsx("bg-web-paper", props.className)}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl md:container mx-auto px-2 md:px-4 py-2 md:py-0 sticky z-40">
            <div className="flex h-16 justify-between w-full">
              <div className="flex px-2 md:px-0 justify-between w-full">
                <Link
                  to="/"
                  className="inline-flex gap-2 flex-shrink-0 items-center"
                >
                  <img
                    className="h-8 md:h-6 w-auto transition-all"
                    src={logo}
                    alt="Antalpha Logo"
                  />
                  <img
                    className="h-4 md:h-3 w-auto transition-all"
                    src={logoHeading}
                    alt="Antalpha Logo Heading"
                  />
                </Link>
                <div className="hidden md:flex md:space-x-8">
                  <Link
                    to="/hackerhouse"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black hover:underline underline-offset-2"
                    activeClassName="underline-offset-2 underline"
                  >
                    Hackerhouse
                  </Link>
                  <Link
                    to="https://mirror.xyz/antalpha-labs.eth/"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black hover:underline underline-offset-2"
                    activeClassName="underline-offset-2 underline"
                  >
                    Blog
                  </Link>
                  <Link
                    to="https://www.notion.so/antalpha/230cbd296a164261a0648a383da08060?v=5373cd12ac1d4dd09e8337c4a6a5ea48"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black hover:underline underline-offset-2"
                    activeClassName="underline-offset-2 underline"
                  >
                    Showcases
                  </Link>
                  <a
                    href="mailto:hello.labs@antalpha.com"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black hover:underline underline-offset-2"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-primary-black focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open nav menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            leave="transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as="nav"
            className="md:hidden flex w-full relative bg-inherit"
          >
            <Disclosure.Panel className="flex fixed z-30 inset-0 w-full bg-inherit px-6 pt-[80px]">
              <div className="pb-3 w-full">
                <Disclosure.Button
                  as={Link}
                  to="/hackerhouse"
                  className="uppercase block py-5 font-medium text-web-black border-b border-web-black"
                  activeClassName="border-web-gray bg-web-tile"
                >
                  Hackerhouse
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  to="https://mirror.xyz/antalpha-labs.eth/"
                  className="uppercase block py-5 font-medium text-web-black border-b border-web-black"
                  activeClassName="border-web-gray bg-web-tile"
                >
                  Blog
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  to="https://www.notion.so/antalpha/230cbd296a164261a0648a383da08060?v=5373cd12ac1d4dd09e8337c4a6a5ea48"
                  className="uppercase block py-5 font-medium text-web-black border-b border-web-black"
                  activeClassName="border-web-gray bg-web-tile"
                >
                  Showcases
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="mailto:hello.labs@antalpha.com"
                  className="uppercase block py-5 font-medium text-web-black border-b border-web-black"
                >
                  Contact
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
