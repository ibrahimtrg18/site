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
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as runtime from "react/jsx-runtime";
import { MdArrowForward } from "react-icons/md";

import { IProject } from "../../../gql/project";

type ProjectDetailModalProps = Partial<ModalProps> & IProject;

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
            <Flex height="inherit" direction="row" gap="2rem">
              {/* Left content */}
              <Box flex={1}>
                {media.map((media) => (
                  <Image
                    key={media.id}
                    placeholder="blur"
                    width={300}
                    height={300}
                    blurDataURL={media.url}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    src={media.url}
                    alt={title}
                  />
                ))}
              </Box>

              <Divider
                height="inherit"
                alignSelf="stretch"
                orientation="vertical"
              />

              {/* Right content */}
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
