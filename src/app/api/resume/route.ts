import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: {
      works: [
        {
          company: "Delman Data Lab",
          title: "Software Engineer, Frontend",
          from: { start: "Sep 2022", end: "Present" },
          contents: [
            {
              bodies: [
                "Delman Data Lab is Company Startup that manage your data, and process according to your needs seamlessly through automation.",
              ],
            },
            {
              title: "Job Description",
              bodies: [
                "- Develop and Maintain a Data Management web app with Next.js",
                "- UI/UX Feasibility, pairing and helping college workers frontend",
              ],
            },
            {
              title: "Stack Technologies",
              bodies: [
                "HTML, CSS, Javascript, Next.js, React-Hook, Chakra-UI, Jest, Docker, Figma",
              ],
            },
          ],
        },
        {
          company: "Prixa.ai",
          title: "Frontend Engineer",
          from: { start: "Jan 2022", end: "Sep 2022" },
          contents: [
            {
              bodies: [
                "Prixa.ai is a Health Technology Startup management of corporate health benefits accessible on a single platform and use AI for know the health diagnosis",
              ],
            },
            {
              title: "Job Description",
              bodies: [
                "- Develop and Maintain a Scheck Symptoms, Teleconsultation, Internal Dashboard web apps with Vue",
                "- Create UI library components with Storybook/Vue, and doing documentation about the library components",
                "- UI/UX Feasibility, pairing and helping college workers frontend",
              ],
            },
            {
              title: "Stack Technologies",
              bodies: [
                "HTML, CSS, SASS, Typescript, Ant Design, Tailwind, Vue, Figma",
              ],
            },
          ],
        },
        {
          company: "Cititex",
          title: "Frontend Developer",
          from: { start: "Dec 2020", end: "Dec 2021" },
          contents: [
            {
              bodies: [
                "Cititex is a company selling apparel shirt, jacket, and clothing design having 30+ branch stores in indonesian",
              ],
            },
            {
              title: "Job Description",
              bodies: [
                "- Develop, Maintain, and Deploy an E-Commerce, 2 Dashboard (Local and Master) web apps with React",
                "- Also Supporting development Backend with Nest.js",
              ],
            },
            {
              title: "Stack Technologies",
              bodies: [
                "HTML, CSS, SASS, Bootstrap, Javascript, Typescript, React, Next.js, Redux, Nest.js, MySQL, Moqups, Figma",
              ],
            },
            {
              title: "Links",
              bodies: ["https://www.cititex.com"],
            },
          ],
        },
      ],
    },
  });
}
