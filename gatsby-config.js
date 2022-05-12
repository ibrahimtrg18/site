/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require("path");

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Ibrahim Tarigan",
    titleTemplate: "%s · Enthusiast Frontend Developer",
    siteUrl: "https://www.ibrahimtarigan.me",
    description:
      "Ibrahim Tarigan, a dude love and passion in frontend development, and want to be great frontend developer",
    image: "/",
    profession: "Fullstack Developer, especially using React/Node.",
    twitter: {
      username: "@ibrahimtrg18",
    },
    socialMedias: [
      {
        icon: ["fab", "twitter"],
        username: "ibrahimtrg18",
        link: "https://twitter.com/ibrahimtrg18",
      },
      {
        icon: ["fab", "instagram"],
        username: "ibrahimtrg18",
        link: "https://instagram.com/ibrahimtrg18",
      },
      {
        icon: ["fab", "github"],
        username: "ibrahimtrg18",
        link: "https://github.com/ibrahimtrg18",
      },
      {
        icon: ["fab", "linkedin"],
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
          image: "talkyu.png",
        },
        {
          name: "Daily News",
          url: "http://daily-news.ibrahimtarigan.me",
          image: "daily-news.png",
        },
        {
          name: "Movie DB",
          url: "https://movie-ibrahim.vercel.app",
          image: "movie-db.png",
        },
        {
          name: "Landing page example",
          url: "https://landing-page-indonesia.vercel.app",
          image: "landing-page-example.png",
        },
        {
          name: "Todo",
          url: "https://ibrahim-todo.vercel.app",
          image: "todo.png",
        },
        {
          name: "Dinner Journey",
          url: "https://dinner-jurney.vercel.app",
          image: "dinner-journey.png",
        },
        {
          name: "My Route",
          url: "http://myroute.ibrahimtarigan.me/",
          image: "my-route.png",
        },
        {
          name: "Dota 2 PWA",
          url: "https://pwa-dota2.vercel.app",
          image: "pwa-dota2.png",
        },
      ],
    },
    resume: [
      {
        company: "Prixa.ai",
        title: "Frontend Engineer",
        from: { start: "03/01/2022", end: "Present" },
        contents: [
          {
            title: "Doing",
            body: "Web development, SCRUM, Follow UI/UX, Documentation components, Fix bugs, Maintainings Applications, Completed all tasks",
          },
          {
            title: "Stack",
            body: "HTML, SASS, Javascript, Typescript, Vue, GraphQL, Storybook",
          },
        ],
      },
      {
        company: "Cititex",
        title: "Frontend Developer",
        from: { start: "14/03/2021", end: "03/01/2022" },
        contents: [
          {
            title: "Doing",
            body: "Web development, Redesign Existing Applications, Documentation flow diagram, Implement new logic business, Fix bugs, Maintaining applications",
          },
          {
            title: "Stack",
            body: "HTML, SASS, Javascript, React, React Native, Redux, REST",
          },
        ],
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.ibrahimtarigan.me",
        sitemap: "https://www.ibrahimtarigan.me/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Assistant:200,300,400,500,600,700,800",
          `Radio Canada\:300,400,500,600,700`,
        ],
        display: "swap",
      },
    },
  ],
};
