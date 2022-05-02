import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";

import { getInitial } from "../../../helpers/common";
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
  const name = data.site.siteMetadata.title;

  const shortName = useMemo(
    () =>
      getInitial(name, {
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
              I’m <Name>{shortName}.</Name>,
            </Introduction>
            <Profession color="primary">
              Enthusiast Frontend Developer, especially using React.
            </Profession>
          </LeftContent>
          <Picture src={data.file.childImageSharp.original.src} alt={name} />
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
