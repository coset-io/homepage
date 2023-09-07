import { Client } from "@notionhq/client"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

interface ContactBody {
  message: string
}

export default async function handler(
  req: GatsbyFunctionRequest<ContactBody>,
  res: GatsbyFunctionResponse,
) {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  const databaseId = process.env.NOTION_DB_ID || "f25a0ef665eb4defb144a726e01de640"
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ timestamp: "created_time", direction: "descending" }],
  })
  res.send({ data: response.results })
}
