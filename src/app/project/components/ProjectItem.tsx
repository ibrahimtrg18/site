"use client";

import {
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  Stack,
  Text,
  useChakra,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { IProject } from "../../../gql/project";
import { ProjectDetailModal } from "./ProjectDetailModal";

type ProjectItemProps = IProject;

export const ProjectItem = (props: ProjectItemProps) => {
  const { title, description, media } = props;

  // disclosure modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const chakra = useChakra();

  return (
    <>
      <ProjectDetailModal {...props} isOpen={isOpen} onClose={onClose} />

      <GridItem>
        <Card
          as={motion.div}
          initial={{
            scale: 1,
            backgroundColor: chakra.theme.colors.gray[50],
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: chakra.theme.colors.gray[100],
          }}
          whileTap={{ scale: 0.9 }}
          backgroundColor="transparent"
          height="100%"
          cursor="pointer"
          onClick={() => onOpen()}
        >
          <CardHeader>
            <Image
              placeholder="blur"
              width={300}
              height={300}
              blurDataURL={media[0].small}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                objectPosition: "top",
              }}
              src={media[0].url}
              alt={title}
            />
          </CardHeader>
          <CardBody>
            <Stack spacing="3">
              <Heading size="md">{title}</Heading>
              <Text noOfLines={3} textAlign="justify" color="inherit">
                {description?.text}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
    </>
  );
};
