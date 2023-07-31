"use client";

import { Text } from "@chakra-ui/react";

import { ResponseDataGetAboutType } from "../../api/about/route";

type AboutProps = ResponseDataGetAboutType;

const About = ({ paragraph }: AboutProps) => {
  return (
    <Text fontSize="1.25rem" textAlign="justify">
      {paragraph}
    </Text>
  );
};

export default About;
