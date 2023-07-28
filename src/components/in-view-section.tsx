import React, { PropsWithChildren } from "react"
import { useActiveInView } from "./providers/active-anchor"

export const InViewSection = ({
  id,
  context,
  children,
}: PropsWithChildren<{
  id: string
  context: { index: number }
}>) => {
  const { observeElement } = useActiveInView({ id, context })

  return (
    <section className="relative">
      {observeElement}
      {children}
    </section>
  )
}
