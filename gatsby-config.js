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
        image: "/images/project.jpg",
        title: "Talky",
        description: "Talky Chat app using React-Native and Nest",
        stacks: ["react-native", "nest"],
        link: "http://talky.ibrahimtarigan.me",
        repo: "",
        repoPrivate: false,
      },
      {
        image: "/images/project.jpg",
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
