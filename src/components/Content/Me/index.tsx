import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Container } from "../../base/Container";
import { Section } from "../../base/Section";
import { Content, Introduction, Name, Picture } from "./styled";

const Me = () => {
  const data = useStaticQuery(query);

  console.log(data);

  return (
    <Section>
      <Container>
        <Content>
          <Introduction>
            Hi,
            <br />
            I’m <Name>Ibrahim</Name>,
            <br />
            Frontend Developer
          </Introduction>
          <Picture src={data.file.childImageSharp.original.src}></Picture>
        </Content>
      </Container>
    </Section>
  );
};

export default Me;

const query = graphql`
  query {
    file(relativePath: { eq: "picture.png" }) {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
`;
