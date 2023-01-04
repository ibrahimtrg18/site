import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Container } from "../../Base/Container";
import { Section } from "../../Base/Section";
import CardResume from "../../Core/CardResume/CardResume";
import { Content } from "./Resume.styles";

interface Resume {
  company?: string;
  title?: string;
  from?: {
    start?: string;
    end?: string;
  };
  contents?: Array<{ title: string; bodies: [string] }>;
}

const Resume = (_: any, ref: React.ForwardedRef<HTMLElement>) => {
  const data = useStaticQuery(query);
  const resumes: Array<Resume> = data.site.siteMetadata.resume;

  return (
    <Section ref={ref}>
      <Container>
        <Content>
          <h3 className={classNames("title")}>Work Experience</h3>
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
            bodies
          }
        }
      }
    }
  }
`;

export default React.forwardRef(Resume);
