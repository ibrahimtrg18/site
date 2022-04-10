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
    about: {
      paragraphs: [
        "I’m a Enthusiast Frontend Developer with 2+ years of professional experience design, development, implement, and maintaining applications. I have a serious passion for UI effects, dynamic user experiences, animations, and creating intuitive.",
        "Have good understanding Web Design and Responsive on across devices, have ability to write clean code, high attention to detail and problem solver. Also seeking to leverage broad development experience and hands-on technical expertise in role as a Frontend Developer.",
        "Interested in the entire frontend spectrum and working on ambitious projects with positive people.",
        "Loves animal, old music, anime and pc games.",
      ],
    },
    stackTechnologies: [
      {
        icon: "icons8-html-5-64.svg",
        name: "HTML",
      },
      {
        icon: "icons8-css3-64.svg",
        name: "CSS3",
      },
      {
        icon: "icons8-javascript-64.svg",
        name: "Javascript",
      },
      {
        icon: "icons8-typescript-64.svg",
        name: "Typescript",
      },
      {
        icon: "icons8-nodejs-64.svg",
        name: "Node",
      },
      {
        icon: "icons8-react-64.svg",
        name: "React",
      },
      {
        icon: "icons8-vue-64.svg",
        name: "Vue",
      },
      {
        icon: "icons8-graphql-64.svg",
        name: "GraphQL",
      },
      {
        icon: "icons8-redux-64.svg",
        name: "Redux",
      },
      {
        icon: "icons8-git-64.svg",
        name: "Git",
      },
      {
        icon: "icons8-figma-64.svg",
        name: "Figma",
      },
    ],
    project: {
      work: [
        {
          name: "Cititex",
          url: "https://www.cititex.com",
          image: "cititex.png",
        },
        {
          name: "Cititex Dashboard Master",
          url: "http://18.136.190.112/testing/master/dashboard",
          image: "cititex-dashboard-master.png",
        },
        {
          name: "Cititex Dashboard Local",
          url: "http://18.136.190.112/testing/cititex/dashboard-local",
          image: "cititex-dashboard-local.png",
        },
      ],
      personal: [
        {
          name: "Talky",
          url: "http://talky.ibrahimtarigan.me",
          image: "cititex.png",
        },
        {
          name: "Movie DB",
          url: "https://movie-ibrahim.vercel.app",
          image: "cititex.png",
        },
        {
          name: "Landing page example",
          url: "https://landing-page-indonesia.vercel.app",
          image: "cititex.png",
        },
        {
          name: "Todo",
          url: "https://ibrahim-todo.vercel.app",
          image: "cititex.png",
        },
        {
          name: "Dinner Journey",
          url: "https://dinner-jurney.vercel.app",
          image: "cititex.png",
        },
        {
          name: "My Route",
          url: "https://www.google.com",
          image: "cititex.png",
        },
        {
          name: "Dota 2 PWA",
          url: "https://pwa-dota2.vercel.app",
          image: "cititex.png",
        },
        {
          name: "Wak Print",
          url: "",
          image: "cititex.png",
        },
      ],
    },
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
