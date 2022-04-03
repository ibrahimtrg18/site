import React from "react";

import { theme } from "../../../styles";
import { Container } from "../../base/Container";
import { Section } from "../../base/Section";
import { Content, IMeMyself, StackTechnology } from "./styled";

const About = () => {
  return (
    <Section backgroundColor={theme.color.secondary + "5F"}>
      <Container>
        <Content>
          <IMeMyself>
            <h1>
              I,
              <br />
              Me,
              <br />& Myself
            </h1>
            <br />
            <p>
              I’m a Enthusiast Frontend Developer with 2+ years of professional
              experience design, development, implement, and maintaining
              applications. I have a serious passion for UI effects, dynamic
              user experiences, animations, and creating intuitive.
            </p>
            <br />
            <p>
              Have good understanding Web Design and Responsive on across
              devices, have ability to write clean code, high attention to
              detail and problem solver. Also seeking to leverage broad
              development experience and hands-on technical expertise in role as
              a Frontend Developer.
            </p>
            <br />
            <p>
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </p>
            <br />
            <p>Loves animal, old music, anime and pc games.</p>
          </IMeMyself>
          <StackTechnology></StackTechnology>
        </Content>
      </Container>
    </Section>
  );
};

export default About;
