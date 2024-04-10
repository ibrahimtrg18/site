"use client";

import React from "react";
import Link from "next/link";
import {
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

import { evaluateSync } from "@/libs/mdx";
import { Project } from "@/types/Hygraph/models/Project";

import { ProjectDetailImage } from "./ProjectDetailImage";

type ProjectDetailModalProps = Partial<ModalProps> & Project;

export const ProjectDetailModal = ({
  isOpen = false,
  onClose = () => {},
  title,
  description,
  url,
  slug,
  media,
}: ProjectDetailModalProps) => {
  const MDXContent = evaluateSync(description.markdown);

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
              {media.length > 0 && (
                <ProjectDetailImage media={media} title={title} />
              )}

              {media.length > 0 && <Divider orientation="horizontal" />}

              <Flex direction="column" flex={1} gap="1rem">
                <MDXContent />
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex flexDirection="row" gap={3}>
            {url && (
              <Button as={Link} href={url} passHref target="_blank">
                Visit
              </Button>
            )}
            {slug && (
              <Button as={Link} href={slug} passHref target="_blank">
                Detail
              </Button>
            )}
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
