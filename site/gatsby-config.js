/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Trinity Evangelical Lutheran Church`,
    siteUrl: `https://www.trinitywaterville.org`,
    description: `Serving the Waterville, MN Community`,
    address: `2101 Lor Ray Drive, North Mankato, MN 56003`,
    phone: `507.388.4336`,
    email: `info@ccamankato.org`,
    image: `./src/images/LCMS_logo.png`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "1wnoxla9",
        dataset: "production",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    // `gatsby-plugin-fontawesome-css`,
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
