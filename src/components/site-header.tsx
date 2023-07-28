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
          <div className="container mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between w-full">
              <div className="flex px-2 lg:px-0 justify-between w-full">
                <div className="flex gap-2 flex-shrink-0 items-center">
                  <img className="h-6 w-auto" src={logo} alt="Antalpha Logo" />
                  <img
                    className="h-3 w-auto"
                    src={logoHeading}
                    alt="Antalpha Logo Heading"
                  />
                </div>
                <div className="hidden lg:flex lg:space-x-8">
                  <Link
                    to="/hackerhouse"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black"
                    activeClassName="underline-offset-2 underline"
                  >
                    Hackerhouse
                  </Link>
                  <Link
                    to="/blog"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black"
                    activeClassName="underline-offset-2 underline"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/showcases"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black"
                    activeClassName="underline-offset-2 underline"
                  >
                    Showcases
                  </Link>
                  <Link
                    to="/contact"
                    className="uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black"
                    activeClassName="underline-offset-2 underline"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-primary-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
