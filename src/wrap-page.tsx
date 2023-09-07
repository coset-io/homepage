import React from "react"
import { WrapPageElementBrowserArgs } from "gatsby"

export const Page = (props: WrapPageElementBrowserArgs["props"]) => {
  return <>{props.children}</>
}
