import { Notion } from "#/types/notion"
import useSWR from "swr"

export function useNotionArticles() {
  return useSWR('/api/notions', async (url) => {
    const res = await fetch(url)
    const result = await res.json() as { data: Notion[] }
    return result?.data
  })
}
