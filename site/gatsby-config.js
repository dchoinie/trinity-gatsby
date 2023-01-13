/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Trinity Evangelical Lutheran Church`,
    siteUrl: `https://www.trinitywaterville.org`,
    description: `A traditional, liturgical congregation of the Lutheran Church Missouri Synod`,
    address: `415 Lake Street West Waterville, MN, 56096`,
    phone: `507.362.4454`,
    email: `tlchurch@frontiernet.net`,
    image: `./favicon.ico`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "vj9e7bzh",
        dataset: "production",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: "vj9e7bzh",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`],
        web: [
          {
            name: `Noto Sans`,
            file: `https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-32953CWSN4",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/LCMS_logo.png",
        name: "Trinity Evangelical Lutheran Church",
        short_name: "Trinity Waterville",
        background_color: "#005DA6",
        theme_color: "#005DA6",
        display: "standalone",
        description: `A traditional, liturgical congregation of the Lutheran Church Missouri Synod`,
        icons: [
          {
            "src": "./android-chrome-512x512.png",
            "type": "image/png",
            "sizes": "512x512",
          },
          {
            "src": "./android-chrome-192x192.png",
            "type": "image/png",
            "sizes": "192x192",
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/bulletins/`, `/catechesis/`, `/contact/`, `/contact/`, `/events/`, `/index/`, `/links/`, `/privacy-policy/`, `/sacred-art/`, `/sermons/`, `/sermons/`, `/staff/`, `/terms-and-conditions/`, `/what-to-expect/`, `/what-we-believe/`, `/who-we-are/`, `/worship-schedule/`],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
