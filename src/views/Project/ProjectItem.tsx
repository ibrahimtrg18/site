"use client";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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

import { useQuery } from "../../hooks/useQuery";
import { Project } from "../../types/Project";

import { ProjectDetailModal } from "./ProjectDetailModal";

type ProjectItemProps = Project;

export const ProjectItem = (props: ProjectItemProps) => {
  const { id, title, description, media } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const chakra = useChakra();
  const { colorMode } = useColorMode();
  const { updateQuery, removeQuery } = useQuery();
  const projectId = searchParams.get("projectId");

  /**
   * Disclosure Modal
   * will open when the page has query projectId /project?projectId=
   */
  const { isOpen } = useDisclosure({
    isOpen: projectId === id,
  });

  return (
    <>
      <ProjectDetailModal
        {...props}
        isOpen={isOpen}
        onClose={() => router.push(pathname + "?" + removeQuery("projectId"))}
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
          onClick={() =>
            router.push(pathname + "?" + updateQuery("projectId", id))
          }
        >
          <CardHeader padding={0}>
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
