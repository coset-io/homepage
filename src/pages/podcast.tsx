import { useEffect } from "react"

export default function Podcast() {
  useEffect(() => {
    if (self.location) {
      self.location.replace(
        "https://wenbuilding.simplecast.com",
      )
    }
  }, [])

  return null
}
