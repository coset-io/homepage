import React from "react"
import cx from "clsx"

type SubheaderProps = {
  items?: string[]
}

export const Subheader = ({ items }: SubheaderProps) => {
  if (!items?.length) {
    return null
  }

  return (
    <div className="py-3 px-2 sm:px-4 lg:px-8">
      <div className="flex space-x-6">
        {items.map((x) => {
          const isActive = false
          return (
            <a
              className={cx(
                "inline-flex py-4 capitalize hover:font-normal hover:text-web-black",
                isActive
                  ? "font-normal text-web-black"
                  : "font-light text-web-gray",
              )}
              href={`#${x}`}
            >
              {x}
            </a>
          )
        })}
      </div>
    </div>
  )
}
