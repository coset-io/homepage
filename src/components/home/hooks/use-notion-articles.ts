import useSWR from "swr"

export function useNotionArticles() {
  return useSWR('/api/notions', fetch)
}
