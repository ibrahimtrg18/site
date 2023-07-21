import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    paragraphs: [
      "Software Engineer with over 1 year of experience development applications also giving solutions for best development solution. I have a serious passion for Web and Mobile Development UI/UX, Animations, and creating intuitive.",
      "Have good understanding Web and Mobile Design, have ability to write clean code, debugging, and technical feasibilty. I am also seeking hands-on technical expertise in a role as a Good Software Engineer.",
      "Interested in the entire fullstack spectrum and working on ambitious projects with positive people.",
      "Loves animal, old music, and games.",
    ],
    technologies: [
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
  });
}
