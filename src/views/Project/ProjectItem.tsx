"use client";

import React, { useCallback } from "react";
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

import { Project, ProjectComponent } from "@/generated/graphql";
import { useNavigation } from "@/hooks/useNavigation";

import { ProjectDetailModal } from "./ProjectDetailModal";

type ProjectItemProps = Project;

export const ProjectItem = (props: ProjectItemProps) => {
  const { id, title = "", content, enabled } = props;
  const searchParams = useSearchParams();
  const chakra = useChakra();
  const { colorMode } = useColorMode();
  const { updateQuery, removeQuery } = useNavigation();
  const projectId = searchParams.get("projectId");
  const component = content[content.length - 1].component as ProjectComponent;
  const { description, media } = component;

  /**
   * Disclosure Modal
   * will open when the page has query projectId /projects?projectId=
   */
  const { isOpen } = useDisclosure({
    isOpen: projectId === id,
  });

  const MediaImage = useCallback(
    ({ src = "/images/no-image.png", blurDataURL }: Partial<ImageProps>) => {
      return (
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
          alt={String(title)}
        />
      );
    },
    [title]
  );

  const [firstMedia] = media;

  const initialBackgroundColor = useColorModeValue(
    chakra.theme.colors.gray[50],
    chakra.theme.colors.gray[800]
  );

  const whileHoverBackgroundColor = useColorModeValue(
    chakra.theme.colors.gray[100],
    chakra.theme.colors.gray[700]
  );

  // Only render enabled projects
  if (!enabled) {
    return null;
  }

  return (
    <GridItem>
      {component?.__typename === "ProjectComponent" && (
        <ProjectDetailModal
          {...props}
          content={component}
          isOpen={isOpen}
          onClose={() => removeQuery("projectId")}
        />
      )}
      <Card
        key={colorMode}
        as={motion.div}
        initial={{
          top: 0,
          backgroundColor: initialBackgroundColor,
        }}
        whileHover={{
          top: -10,
          backgroundColor: whileHoverBackgroundColor,
        }}
        whileTap={{ top: 10 }}
        backgroundColor="transparent"
        height="100%"
        cursor="pointer"
        onClick={() => updateQuery("projectId", id)}
      >
        <CardHeader padding={0}>
          {firstMedia ? (
            <MediaImage blurDataURL={firstMedia.url} src={firstMedia.url} />
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
  );
};
