import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Container } from "../../Base/Container";
import { Section } from "../../Base/Section";
import CardResume from "../../Core/CardResume/CardResume";
import { Content } from "./Resume.styles";

interface Content {
  title?: string;
  body?: string;
}
interface Resume {
  company?: string;
  title?: string;
  from?: {
    start?: string;
    end?: string;
  };
  contents?: Array<Content>;
}

const Resume = (_: any, ref: React.ForwardedRef<HTMLElement>) => {
  const data = useStaticQuery(query);
  const resumes: Array<Resume> = data.site.siteMetadata.resume;

  const contents: Array<{ title: string; body: string }> = [
    {
      title: "Doing",
      body: "Web Development | SCRUM | UI Components | Documentation Components",
    },
    {
      title: "Stack",
      body: "HTML, SASS, Javascript, Typescript, Vue, GraphQL, Storybook",
    },
  ];

  return (
    <Section ref={ref}>
      <Container>
        <Content>
          <h3 style={{ marginBottom: "32px" }}>Work Experience</h3>
          {resumes.map((resume, i) => (
            <CardResume
              key={i}
              company={resume.company}
              title={resume.title}
              from={resume.from}
              contents={resume.contents}
            />
          ))}
        </Content>
      </Container>
    </Section>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        resume {
          company
          title
          from {
            start
            end
          }
          contents {
            title
            body
          }
        }
      }
    }
  }
`;

export default React.forwardRef(Resume);
