import { NextResponse } from "next/server";

type ResponseType<T> = {
  data: T;
};

export type ResponseDataGetAboutType = {
  paragraph: string;
  technologies: Array<Record<string, string>>;
};

export type ResponseGetAbout = ResponseType<ResponseDataGetAboutType>;

export async function GET() {
  const response: ResponseGetAbout = {
    data: {
      paragraph:
        "Software Engineer with over 2 years of experience in hands-on applications and giving solutions for software development. Have a good understanding of developing applications, writing clean code, debugging, and other technical feasibility. I also love to learn more about technical expertise as a software engineer.",
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
    },
  };

  return NextResponse.json(response);
}
