"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import { useSearchParams } from "next/navigation";
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

import { useNavigation } from "@/hooks/useNavigation";
import { Project } from "@/types/Hygraph/models/Project";

import { ProjectDetailModal } from "./ProjectDetailModal";

type ProjectItemProps = Project;

export const ProjectItem = (props: ProjectItemProps) => {
  const { id, title, description, media } = props;
  const searchParams = useSearchParams();
  const chakra = useChakra();
  const { colorMode } = useColorMode();
  const { updateQuery, removeQuery } = useNavigation();
  const projectId = searchParams.get("projectId");

  /**
   * Disclosure Modal
   * will open when the page has query projectId /project?projectId=
   */
  const { isOpen } = useDisclosure({
    isOpen: projectId === id,
  });

  const MediaImage = ({
    src = "/images/no-image.png",
    blurDataURL,
  }: Partial<ImageProps>) => (
    <Image
      placeholder="blur"
      width={400}
      height={250}
      blurDataURL={blurDataURL}
      style={{
        width: "100%",
        height: "250px",
        objectFit: "cover",
        objectPosition: "top",
      }}
      src={src}
      alt={title}
    />
  );

  return (
    <>
      <ProjectDetailModal
        {...props}
        isOpen={isOpen}
        onClose={() => removeQuery("projectId")}
      />

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
          onClick={() => updateQuery("projectId", id)}
        >
          <CardHeader padding={0}>
            {media.length > 0 ? (
              <MediaImage blurDataURL={media[0].small} src={media[0].url} />
            ) : (
              <MediaImage
                blurDataURL="/images/no-image.png"
                src="/images/no-image.png"
              />
            )}
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
