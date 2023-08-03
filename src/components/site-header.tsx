import React from "react"
import { Disclosure, DisclosureProps } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import logo from "../../content/images/antalpha/antalphalogo.svg"
import logoHeading from "../../content/images/antalpha/antalphalogo2.svg"
import { Link } from "gatsby-link"

export default function Header(props: DisclosureProps<"header">) {
  return (
    <Disclosure as="header" className="bg-web-paper" {...props}>
      {({ open }) => (
        <>
          <div className="max-w-7xl lg:container mx-auto px-2 sm:px-4 lg:px-8 py-2 lg:py-0">
            <div className="flex h-16 justify-between w-full">
              <div className="flex px-2 lg:px-0 justify-between w-full">
                <Link
                  to="/"
                  className="inline-flex gap-2 flex-shrink-0 items-center"
                >
                  <img
                    className="h-8 lg:h-6 w-auto transition-all"
                    src={logo}
                    alt="Antalpha Logo"
                  />
                  <img
                    className="h-4 lg:h-3 w-auto transition-all"
                    src={logoHeading}
                    alt="Antalpha Logo Heading"
                  />
                </Link>
                <div className="hidden lg:flex lg:space-x-8">
                  <Link
                    to="/hackerhouse"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black hover:opacity-60"
                    activeClassName="underline-offset-2 underline"
                  >
                    Hackerhouse
                  </Link>
                  {/* <Link
                    to="/blog"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black hover:opacity-60"
                    activeClassName="underline-offset-2 underline"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/showcases"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black hover:opacity-60"
                    activeClassName="underline-offset-2 underline"
                  >
                    Showcases
                  </Link> */}
                  <a
                    href="mailto:hello.labs@antalpha.com"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black hover:opacity-60"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-primary-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3">
              <Disclosure.Button
                as={Link}
                to="/hackerhouse"
                className="uppercase block py-3 px-6 text-sm font-medium text-web-black hover:border-web-gray hover:bg-web-tile"
                activeClassName="border-web-gray bg-web-tile"
              >
                Hackerhouse
              </Disclosure.Button>
              {/* <Disclosure.Button
                as={Link}
                to="/blog"
                className="uppercase block py-3 px-6 text-sm font-medium text-web-black hover:border-web-gray hover:bg-web-tile"
                activeClassName="border-web-gray bg-web-tile"
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/showcases"
                className="uppercase block py-3 px-6 text-sm font-medium text-web-black hover:border-web-gray hover:bg-web-tile"
                activeClassName="border-web-gray bg-web-tile"
              >
                Showcases
              </Disclosure.Button> */}
              <Disclosure.Button
                as="a"
                href="mailto:hello.labs@antalpha.com"
                className="uppercase block py-3 px-6 text-sm font-medium text-web-black hover:border-web-gray hover:bg-web-tile"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
