import React, { PropsWithChildren } from "react"
import cx from "clsx"
import { useActiveAnchor } from "./providers/active-anchor"

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
          : "text-web-gray hover:text-gray-900",
      )}
      href={`#${id}`}
    >
      {children}
    </a>
  )
}

type SubheaderProps = {
  items?: string[]
  className?: string
}

export const Subheader = ({ items, className }: SubheaderProps) => {
  if (!items?.length) {
    return null
  }

  return (
    <div className={cx("container mx-auto", className)}>
      <div className="flex space-x-6 py-3 px-4 lg:px-8">
        {items.map((x) => (
          <ActiveHeadingLink id={x}>{x}</ActiveHeadingLink>
        ))}
      </div>
    </div>
  )
}
