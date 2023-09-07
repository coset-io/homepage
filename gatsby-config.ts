import type { GatsbyConfig } from "gatsby"
import { createProxyMiddleware } from "http-proxy-middleware"
import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Antalpha Labs",
    titleTemplate: "%s · Antalpha Labs", // 添加这一行
    description: "Antalpha Labs is a web3 developer community",
    url: "https://labs.antalpha.com",
    image:
      "https://labs.antalpha.com/static/mainlogo-eabcf082112087699216b13369d1413c.svg",
    twitterUsername: "Antalpha_Labs",
  },
  developMiddleware: (app) => {
    app.use(
      "/api/substack", // 代理的路径
      createProxyMiddleware({
        target: "https://woshizhengqiuwan.substack.com", // 目标 API 的 URL
        changeOrigin: true, // 是否更改源（允许跨域）
      }),
    )
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antalpha Labs`,
        short_name: `AL`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        // Generate PWA icons and a favicon
        icon: `static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap`,
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-source-notion',
    //   options: {
    //     token: process.env.NOTION_TOKEN,
    //     databaseId: ['639176c5c36547b6a81fbc0d97a21762'],
    //   },
    // },
  ],
}

export default config
