import React, { PropsWithChildren } from "react"
import { motion } from "framer-motion"
import cx from "clsx"

import { useActiveAnchor } from "./providers/active-anchor"
import { useElementInViewportProgress } from "../hooks/use-element-in-viewport-progress"

type ActiveHeadingLinkProps = { id: string }

const ActiveHeadingLink = ({
  id,
  children,
}: PropsWithChildren<ActiveHeadingLinkProps>) => {
  const activeAnchor = useActiveAnchor()
  return (
    <a
      className={cx(
        "inline-flex py-4 capitalize hover:font-normal hover:text-web-black font-light text-web-gray",
        activeAnchor[id]?.isActive && "font-normal text-web-black",
        activeAnchor[id]?.isActive
          ? "text-web-black font-normal subpixel-antialiased"
          : "text-web-gray/70 hover:text-gray-900",
      )}
      href={`#${id}`}
      rel="same"
    >
      {children}
    </a>
  )
}

export const Subheader = () => {
  const { ref, elementInViewportProgress } = useElementInViewportProgress()
  const activeAnchor = useActiveAnchor()
  const ids = Object.keys(activeAnchor ?? {})

  if (!ids.length) {
    return null
  }

  return (
    <motion.div
      ref={ref}
      className={cx(
        "sticky top-0 z-20 overflow-x-auto transition-colors duration-300 ease-in-out",
        elementInViewportProgress.get() === 1
          ? "bg-web-paper/90 backdrop-blur-lg border-b border-web-gray"
          : "bg-transparent backdrop-blur-0 border-b border-transparent",
      )}
    >
      <div className="max-w-7xl lg:container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex space-x-6 py-3 px-2 lg:px-0">
          {ids.map((x) => (
            <ActiveHeadingLink id={x} key={x}>
              {x}
            </ActiveHeadingLink>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
