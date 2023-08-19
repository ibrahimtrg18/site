"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { evaluateSync } from "@mdx-js/mdx";
import * as providers from "@mdx-js/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as runtime from "react/jsx-runtime";

import { IProject } from "../../../gql/project";

type ProjectItemProps = IProject;

export const ProjectItem = ({
  title,
  description,
  url,
  media,
}: ProjectItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { default: MDXContent } = evaluateSync(description.markdown, {
    Fragment: Box,
    ...providers,
    ...runtime,
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MDXContent />
          </ModalBody>
          <ModalFooter>
            <Button
              as={Link}
              variant="ghost"
              href={url}
              passHref
              target="_blank"
            >
              Visit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <GridItem
        as={motion.div}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => onOpen()}
      >
        <Card backgroundColor="gray.50" cursor="pointer">
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
              <Text noOfLines={3} textAlign="justify">
                {description?.text}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
    </>
  );
};
