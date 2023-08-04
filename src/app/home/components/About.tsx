"use client";

import { Text } from "@chakra-ui/react";

import { IAbout } from "../../api/about/route";

type AboutProps = {
  about: IAbout;
};

const About = (props: AboutProps) => {
  const {
    about: {
      attributes: { description },
    },
  } = props;

  return (
    <Text fontSize="1.25rem" textAlign="justify">
      {description}
    </Text>
  );
};

export default About;
