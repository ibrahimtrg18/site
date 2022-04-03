/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Ibrahim Tarigan",
    titleTemplate: "%s · Enthusiast Frontend Developer",
    siteUrl: "https://www.yourdomain.tld",
    description:
      "Ibrahim Tarigan, a dude love and passion in frontend development, and want to be great frontend developer",
    url: "https://www.ibrahimtarigan.me",
    image: "/",
    instagram: {
      username: "@ibrahimtrg18",
      link: "",
    },
    twitter: {
      username: "@ibrahimtrg18",
      link: "",
    },
    socialMedias: [
      {
        iconName: "Twitter",
        username: "ibrahimtrg18",
        link: "https://twitter.com/ibrahimtrg18",
      },
      {
        iconName: "Instagram",
        username: "ibrahimtrg18",
        link: "https://instagram.com/ibrahimtrg18",
      },
      {
        iconName: "GitHub",
        username: "ibrahimtrg18",
        link: "https://github.com/ibrahimtrg18",
      },
      {
        iconName: "Linkedin",
        username: "ibrahimtrg18",
        link: "https://www.linkedin.com/in/ibrahimtrg18/",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/icon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/icon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ], // Add or remove icon sizes as desired
      },
    },
  ],
};
