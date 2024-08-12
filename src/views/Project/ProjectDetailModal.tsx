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

import { Project, ProjectComponent } from "@/generated/graphql";
import { evaluateSync } from "@/libs/mdx";

import { ProjectDetailImage } from "./ProjectDetailImage";

type ProjectDetailModalProps = Partial<ModalProps> & {
  content: Extract<Project["content"][number]["component"], ProjectComponent>;
};

export const ProjectDetailModal = ({
  isOpen = false,
  onClose = () => {},
  content,
}: ProjectDetailModalProps) => {
  const { title, media, link: links } = content;
  const MDXContent = evaluateSync(String(content?.description?.markdown));

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={["full", null, "6xl"]}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{content.title}</ModalHeader>
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
            {Object.entries(links).map(([key, value]) => (
              <Button
                key={key + value}
                as={Link}
                href={String(value)}
                passHref
                target="_blank"
                textTransform="capitalize"
              >
                {key}
              </Button>
            ))}
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
