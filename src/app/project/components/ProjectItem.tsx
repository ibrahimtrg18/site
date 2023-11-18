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
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { Project } from "../../../types/Project";
import { ProjectDetailModal } from "./ProjectDetailModal";

type ProjectItemProps = Project;

export const ProjectItem = (props: ProjectItemProps) => {
  const { title, description, media } = props;

  // disclosure modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const chakra = useChakra();

  const { colorMode } = useColorMode();

  return (
    <>
      <ProjectDetailModal {...props} isOpen={isOpen} onClose={onClose} />

      <GridItem>
        <Card
          key={colorMode}
          as={motion.div}
          initial={{
            scale: 1,
            backgroundColor: useColorModeValue(
              chakra.theme.colors.gray[50],
              chakra.theme.colors.gray[800]
            ),
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: useColorModeValue(
              chakra.theme.colors.gray[100],
              chakra.theme.colors.gray[700]
            ),
          }}
          whileTap={{ scale: 0.95 }}
          backgroundColor="transparent"
          height="100%"
          cursor="pointer"
          onClick={() => onOpen()}
        >
          <CardHeader>
            <Image
              placeholder="blur"
              width={250}
              height={250}
              blurDataURL={media[0].small}
              style={{
                width: "100%",
                height: "250px",
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
