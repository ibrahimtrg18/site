"use client";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import { STRAPI_URL } from "../../../contants";
import { ITechnologies } from "../../api/technologies/route";

type TechnologyProps = {
  technologies: ITechnologies;
};

const Technology = (props: TechnologyProps) => {
  const { technologies } = props;

  return (
    <Flex direction="column" gap="1rem" justifyItems="baseline">
      <Text as="h1" fontSize="1.5rem" fontWeight="bold">
        Technologies and Tools
      </Text>
      <Grid
        templateColumns={[
          "repeat(6, minmax(auto, max-content))",
          null,
          "repeat(12, minmax(auto, max-content))",
        ]}
        gap={6}
      >
        {technologies.map(
          ({
            id,
            attributes: {
              label,
              logo: {
                data: {
                  attributes: { url = "", alternativeText = "" },
                },
              },
            },
          }) => {
            return (
              <GridItem
                key={id}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  width={50}
                  height={50}
                  src={`${STRAPI_URL}${url}`}
                  alt={alternativeText}
                />
                <Text fontSize="0.875rem" fontWeight="light">
                  {label}
                </Text>
              </GridItem>
            );
          }
        )}
      </Grid>
    </Flex>
  );
};

export default Technology;
