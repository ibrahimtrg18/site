/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`],
  siteMetadata: {
    title: "Ibrahim Tarigan",
    description: "Ibrahim Tarigan Portofolio Front end developer",
    copyright: "Copyright (c) 2021 by Ibrahim Tarigan",
    projects: [
      {
        image: "",
        title: "Talky",
        description: "Talky Social media and Chat App",
        stacks: ["React-Native", "Nest", "Socket.IO"],
        link: "http://talky.ibrahimtarigan.me",
        repo: "",
        repoPrivate: false,
      },
      {
        image: "",
        title: "Landing page example",
        description: "Landing page indonesia",
        stacks: ["ReactJS", "Styled-Components", "Google ReCaptcha"],
        link: "https://landing-page-indonesia.vercel.app/",
        repo: "",
        repoPrivate: false,
      },
      {
        image: "",
        title: "Todo",
        description: "To Do List",
        stacks: ["SCSS", "ReactJS", "Redux"],
        link: "https://ibrahim-todo.vercel.app/",
        repo: "",
        repoPrivate: false,
      },
      {
        image: "",
        title: "Dinner Journey",
        description: "Static Web, Track your favorite dinners",
        stacks: ["HTML", "CSS", "Materialize", "PWA", "IndexDB"],
        link: "https://dinner-jurney.vercel.app/",
        repo: "",
        repoPrivate: false,
      },
      {
        image: "",
        title: "My Route",
        description: "Make Route of destination distribution delivery",
        stacks: ["ReactJS", "Styled-Components", "Google Map API"],
        link: "http://myroute.ibrahimtarigan.me",
        repo: "",
        repoPrivate: false,
      },
      {
        image: "",
        title: "Dota 2 PWA",
        description: "Dota 2 News, Heroes, and Teams",
        stacks: ["HTML", "CSS", "Materialize", "PWA"],
        link: "https://pwa-dota2.vercel.app/",
        repo: "",
        repoPrivate: false,
      },
      {
        image: "",
        title: "Wak Print",
        description:
          "Printing service app make user easy for send file to print shop",
        stacks: ["ReactJS", "Tailwind", "ExpressJS", "MySQL", "JWT"],
        link: "",
        repo: "",
        repoPrivate: false,
      },
    ],
    technologies: [
      {
        icon: "",
        name: "",
        level: "",
      },
    ],
    about: {
      avatar: "/images/avatar.png",
      profile:
        "Front End Developer with 1+ year of experience designing, developing, implementing applications and also solutions using a range of technologies. Have good understanding Web Design and Responsive Design across devices. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Front End Developer.",
    },
    contacts: [
      {
        icon: "",
        name: "Email",
        value: "ibrahimtarigan@gmail.com",
      },
    ],
  },
};
