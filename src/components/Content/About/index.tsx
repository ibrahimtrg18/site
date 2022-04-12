import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { theme } from "../../../styles";
import { DeviceEnum } from "../../../utils";
import { Container } from "../../Base/Container";
import { Divider } from "../../Base/Divider";
import { Section } from "../../Base/Section";
import {
  Content,
  GridStackTechnology,
  IMeMyself,
  StackTechnology,
} from "./styled";

interface StackTechonology {
  icon: string;
  name: string;
}

const About = (_: any, ref: React.ForwardedRef<HTMLElement>) => {
  const data = useStaticQuery(query);
  const paragraphs: Array<string> = data.site.siteMetadata.about.paragraphs;
  const stackTechnologies: Array<StackTechonology> =
    data.site.siteMetadata.stackTechnologies;
  const files: Array<any> = data.allFile.edges;

  const renderAboutParagraph = () =>
    paragraphs.map((paragraph, i) => (
      <React.Fragment key={i}>
        <br />
        <p>{paragraph}</p>
      </React.Fragment>
    ));

  const renderStackTechnology = () =>
    stackTechnologies.map((tech, i) => {
      const file = files.find(
        (file) => `${file.node.name}.${file.node.extension}` === tech.icon
      );

      if (file) {
        return <img key={i} src={file.node.publicURL} alt={tech.name} />;
      }
    });

  return (
    <Section backgroundColor={theme.color.secondary + "5F"} ref={ref}>
      <Container>
        <Content>
          <IMeMyself>
            <h1>
              I,
              <br />
              Me,
              <br />& Myself
            </h1>
            {renderAboutParagraph()}
          </IMeMyself>
          <Divider direction="vertical" breakpoints={DeviceEnum.TABLET} />
          <StackTechnology>
            <h6>Stack Techonologies, I have been used: </h6>
            <GridStackTechnology>{renderStackTechnology()}</GridStackTechnology>
          </StackTechnology>
        </Content>
      </Container>
    </Section>
  );
};

export default React.forwardRef(About);

const query = graphql`
  query {
    site {
      siteMetadata {
        about {
          paragraphs
        }
        stackTechnologies {
          icon
          name
        }
      }
    }
    allFile {
      edges {
        node {
          name
          extension
          publicURL
        }
      }
    }
  }
`;
