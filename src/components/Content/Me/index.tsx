import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";

import { getInitial } from "../../../helpers/common";
import { Container } from "../../Base/Container";
import { Section } from "../../Base/Section";
import { Content, Introduction, Name, Picture } from "./styled";

const Me = (_: any, ref: React.ForwardedRef<HTMLElement>) => {
  const data = useStaticQuery(query);
  const shortName = useMemo(
    () =>
      getInitial(data.site.siteMetadata.title, {
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
          <Introduction>
            Hi,
            <br />
            I’m <Name>{shortName}.</Name>
            ,
            <br />
            Frontend Developer
          </Introduction>
          <Picture src={data.file.childImageSharp.original.src}></Picture>
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
