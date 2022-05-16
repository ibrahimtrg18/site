/* eslint-disable no-useless-escape */
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
    titleTemplate: "%s · Enthusiast Fullstack Developer",
    siteUrl: "https://www.ibrahimtarigan.me",
    description:
      "Ibrahim Tarigan, a dude love and passion in development web and mobile application, and want to be a Good Software Engineer",
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
        "Software Engineer with over 1 year of experience development applications also giving solutions for best development solution. I have a serious passion for Web and Mobile Development UI/UX, Animations, and creating intuitive.",
        "Have good understanding Web and Mobile Design, have ability to write clean code, debugging, and technical feasibilty. I am also seeking hands-on technical expertise in a role as a Good Software Engineer.",
        "Interested in the entire fullstack spectrum and working on ambitious projects with positive people.",
        "Loves animal, old music, and games.",
      ],
    },
    stackTechnologies: [
      {
        icon: "html-64.svg",
        name: "HTML",
      },
      {
        icon: "css-64.svg",
        name: "CSS",
      },
      {
        icon: "sass-64.svg",
        name: "SASS",
      },
      {
        icon: "javascript-64.svg",
        name: "Javascript",
      },
      {
        icon: "typescript-64.svg",
        name: "Typescript",
      },
      {
        icon: "nodejs-64.svg",
        name: "NodeJS",
      },
      {
        icon: "react-64.svg",
        name: "React",
      },
      {
        icon: "nextjs-64.svg",
        name: "React",
      },
      {
        icon: "vue-64.svg",
        name: "Vue",
      },
      {
        icon: "redux-64.svg",
        name: "Redux",
      },
      {
        icon: "nestjs-64.svg",
        name: "NestJS",
      },
      {
        icon: "graphql-64.svg",
        name: "GraphQL",
      },
      {
        icon: "git-64.svg",
        name: "Git",
      },
      {
        icon: "postman-64.svg",
        name: "Postman",
      },
      {
        icon: "figma-64.svg",
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
            body: "HTML, CSS, SASS, Javascript, Typescript, Ant Design, Tailwind, Vue, Storybook, Figma.",
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
            body: "HTML, CSS, SASS, Bootstrap, Javascript, Typescript, React, Redux, Nest, MySQL, Moqups, Figma.",
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
        name: "Ibrahim Tarigan",
        short_name: "Ibrahim T.",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#5C8F6A",
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
          `Assistant\:200,300,400,500,600,700,800`,
          `Radio Canada\:300,400,500,600,700`,
        ],
        display: "swap",
      },
    },
  ],
};
