import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { evaluateSync } from "@mdx-js/mdx";
import * as providers from "@mdx-js/react";
import * as runtime from "react/jsx-runtime";
import { MdArrowForward } from "react-icons/md";

import "swiper/css";

import { Project } from "../../../types/Project";

import { ProjectDetailImage } from "./ProjectDetailImage";

type ProjectDetailModalProps = Partial<ModalProps> & Project;

export const ProjectDetailModal = ({
  isOpen = false,
  onClose = () => {},
  title,
  description,
  url,
  media,
}: ProjectDetailModalProps) => {
  const { default: MDXContent } = evaluateSync(description.markdown, {
    Fragment: Box,
    ...providers,
    ...runtime,
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={["full", null, "6xl"]}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column">
            <Flex height="inherit" direction="column" gap="2rem">
              <ProjectDetailImage media={media} title={title} />

              <Divider orientation="horizontal" />

              <Flex direction="column" flex={1} gap="1rem">
                <MDXContent />
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            rightIcon={<MdArrowForward />}
            as={Link}
            href={url}
            passHref
            target="_blank"
          >
            Visit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
