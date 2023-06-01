import React from "react"
import { ComponentProps } from "react"
import cx from "clsx"

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "ghost"
}

export default function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cx(
        "px-7 py-5 rounded-full inline-flex justify-center items-center hover:scale-95 hover:shadow-button transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-1",
        "text-secondary-black font-ps font-medium text-xl",
        {
          "bg-white": variant === "primary",
          "bg-transparent hover:bg-white": variant === "ghost",
        },
        props.className,
      )}
    >
      {children}
    </button>
  )
}
