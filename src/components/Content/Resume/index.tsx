import React from "react";

import { Container } from "../../Base/Container";
import { Section } from "../../Base/Section";
import CardResume from "../../Core/CardResume";
import { Content } from "./styled";

const Resume = (_: any, ref: React.ForwardedRef<HTMLElement>) => {
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
          {Array.from(Array(4), (v, k) => (
            <CardResume
              key={k}
              title="Prixa.ai"
              subTitle="Frontend Engineer"
              contents={contents}
            />
          ))}
        </Content>
      </Container>
    </Section>
  );
};

export default React.forwardRef(Resume);
