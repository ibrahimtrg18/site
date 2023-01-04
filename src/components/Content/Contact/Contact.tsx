import { send } from "@emailjs/browser";
import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";

import { theme } from "../../../styles";
import { DeviceEnum } from "../../../utils";
import { Button } from "../../Base/Button";
import { Container } from "../../Base/Container";
import { Divider } from "../../Base/Divider";
import { Input } from "../../Base/Input";
import { Section } from "../../Base/Section";
import { Textarea } from "../../Base/Textarea";
import GoogleMaps from "../../Core/GoogleMaps/GoogleMaps";
import { Content, Detail, Form, Maps } from "./Contact.styles";

const defaultState = { name: "", email: "", message: "" };

const GATSBY_EMAILJS_SERVICE_ID = process.env.GATSBY_EMAILJS_SERVICE_ID || "";
const GATSBY_EMAILJS_TEMPLATE_ID = process.env.GATSBY_EMAILJS_TEMPLATE_ID || "";
const GATSBY_EMAILJS_PUBLIC_KEY = process.env.GATSBY_EMAILJS_PUBLIC_KEY || "";

const Contact = (_: any, ref: React.ForwardedRef<HTMLElement>) => {
  const data = useStaticQuery(query);
  const [state, setState] = useState(defaultState);

  const { contact } = data.site.siteMetadata;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // emailjs
    send(
      GATSBY_EMAILJS_SERVICE_ID,
      GATSBY_EMAILJS_TEMPLATE_ID,
      {
        from_name: state.email,
        to_name: state.name,
        message: state.message,
        reply_to: state.email,
      },
      GATSBY_EMAILJS_PUBLIC_KEY
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );

    setState(defaultState);
  };

  return (
    <Section ref={ref} backgroundColor={theme.color.secondary + "5F"}>
      <Container>
        <Content>
          <Form onSubmit={(e) => onFormSubmit(e)}>
            <h3>Contact</h3>
            <Input
              type="text"
              name="name"
              value={state.name}
              required
              placeholder="name"
              variant="border"
              my={16}
              onChange={(e) => onChange(e)}
            />
            <Input
              type="email"
              name="email"
              value={state.email}
              required
              placeholder="email"
              variant="border"
              my={16}
              onChange={(e) => onChange(e)}
            />
            <Textarea
              name="message"
              rows={4}
              value={state.message}
              required
              placeholder="message"
              variant="border"
              my={16}
              onChange={(e) => onChange(e)}
            />
            <Button
              type="submit"
              px={8}
              py={16}
              variant="outlined"
              aria-label="Send Email"
            >
              Send
            </Button>
          </Form>
          <Divider direction="vertical" breakpoints={DeviceEnum.TABLET} />
          <Maps>
            <GoogleMaps lat={contact.location.lat} lng={contact.location.lng} />
            <Detail>
              <table>
                <tbody>
                  <tr>
                    <td>Location</td>
                    <td>
                      <p>{contact.location.name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      <p>{contact.email}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>
                      <p>{contact.phoneNumber}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Detail>
          </Maps>
        </Content>
      </Container>
    </Section>
  );
};

export default React.forwardRef(Contact);

const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          location {
            name
            lat
            lng
          }
          email
          phoneNumber
        }
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
