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
        description: "Talky Chat app using React-Native and Nest",
        stacks: ["react-native", "nest"],
        link: "http://talky.ibrahimtarigan.me",
        repo: "",
        repoPrivate: false,
      },
      {
        image: "",
        title: "My Route",
        description: "Talky Chat app using React-Native and Nest",
        stacks: ["react-native", "nest"],
        link: "http://myroute.ibrahimtarigan.me",
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
      avatar: "",
      profile: "",
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
