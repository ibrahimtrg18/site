"use client";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import { STRAPI_URL } from "../../../contants";
import { ITechnologies } from "../../api/technologies/route";

type TechProps = {
  technologies: ITechnologies;
};

const Tech = (props: TechProps) => {
  const { technologies } = props;

  return (
    <Flex w="100%">
      <Grid
        templateColumns={["repeat(6, 1fr)", null, "repeat(12, 1fr)"]}
        gap={6}
      >
        {technologies.map(
          ({
            id,
            attributes: {
              logo: {
                data: {
                  attributes: { url = "", alternativeText = "" },
                },
              },
            },
          }) => {
            return (
              <GridItem key={id}>
                <Image
                  width={300}
                  height={300}
                  src={`${STRAPI_URL}${url}`}
                  alt={alternativeText}
                />
              </GridItem>
            );
          }
        )}
      </Grid>
    </Flex>
  );
};

export default Tech;
