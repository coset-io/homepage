import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Antalpha Labs",
    titleTemplate: "%s · Antalpha Labs", // 添加这一行
    description: "Antalpha Labs is a web3 developer community",
    url: "https://labs.antalpha.com/",
    image:
      "https://labs.antalpha.com//static/mainlogo-eabcf082112087699216b13369d1413c.svg",
    twitterUsername: "Antalpha_Labs",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"],
}

export default config
