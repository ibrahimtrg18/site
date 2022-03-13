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
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};
