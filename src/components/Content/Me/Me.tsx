import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";

import { getInitial } from "../../../helpers/common";
import { Button } from "../../Base/Button";
import { Container } from "../../Base/Container";
import { Section } from "../../Base/Section";
import {
  Content,
  Introduction,
  LeftContent,
  Name,
  Picture,
  Profession,
} from "./Me.styles";

const Me = (_: any, ref: React.ForwardedRef<HTMLElement>) => {
  const data = useStaticQuery(query);
  const { title, profession } = data.site.siteMetadata;

  const shortName = useMemo(
    () =>
      getInitial(title, {
        uppercase: false,
        exclude: ["Ibrahim"],
        combiner: " ",
      }),
    [data]
  );

  return (
    <Section ref={ref}>
      <Container>
        <Content>
          <LeftContent>
            <Introduction>
              Hi there 👋
              <br />
              I’m <Name>{shortName}.</Name>
            </Introduction>
            <Profession color="primary">{profession}</Profession>
            <Button as="a" variant="text" pl={0} pr={0} href="https://drive.google.com/file/d/15GTSSQf17bgpT9f9ApMoHXyPvtXgG6h0/view?usp=sharing" target="_blank">Download CV</Button>
          </LeftContent>
          <Picture src={data.file.childImageSharp.original.src} alt={title} />
        </Content>
      </Container>
    </Section>
  );
};

export default React.forwardRef(Me);

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        profession
      }
    }
    file(relativePath: { eq: "picture.png" }) {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
`;
