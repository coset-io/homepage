import { useEffect } from "react"

const NOTION_PAGE = 'https://www.notion.so/antalpha/Qiming-AHH-ZKonnect-Istanbul-Oct-22nd-Nov-20th-2023-Event-b2d33bb40ab34a67a004de5f2f9bfa42'

export default function Istanbul() {
  useEffect(() => {
    if (self.location) {
      self.location.replace(NOTION_PAGE)
    }
  }, [])
  
  return null
}
