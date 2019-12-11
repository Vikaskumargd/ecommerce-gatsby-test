require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: '28e154a22f68eeb0cb804ad28bf4bd' },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'ZWNiZWM3NzctY2EzYS00ZGU0LTk5YzgtYTU5Zjc1M2E3MTdjNjM3MDI4MzYzNjY4NjkxMjk5',
        autopop: true
      }
    },
  ],
}
