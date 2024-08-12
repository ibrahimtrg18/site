"use client";

import { CSSProperties, useState } from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Project, ProjectComponent } from "@/generated/graphql";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type ProjectComponentContent = Extract<
  Project["content"][number]["component"],
  ProjectComponent
>;

type ProjectDetailImageProps = {
  title: ProjectComponentContent["title"];
  media: ProjectComponentContent["media"];
};

export const ProjectDetailImage = ({
  title = "",
  media = [],
}: ProjectDetailImageProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [slide, setSlide] = useState<number | null>(null);

  return (
    <Flex direction="column" gap={2} userSelect="none">
      <Flex
        flex={1}
        position="relative"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        alignSelf="center"
        width={["full", null, "xl"]}
        borderRadius="md"
        boxShadow="0 0 4px 0 rgba(0, 0, 0, 0.12)"
        overflow="hidden"
      >
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#1A202C",
              "--swiper-pagination-color": "#1A202C",
              "--swiper-navigation-size": "25px",
            } as CSSProperties
          }
          loop={true}
          spaceBetween={10}
          navigation={true}
          onSlideChange={(slide) => setSlide(slide.realIndex)}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {media.map((media) => (
            <SwiperSlide key={media.id}>
              <Box height="xs">
                <Image
                  placeholder="blur"
                  width={800}
                  height={0}
                  blurDataURL={media.url}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  src={media.url}
                  alt={String(title)}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>

      <Flex
        flex={1}
        position="relative"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {media.map((media, index) => (
            <SwiperSlide key={media.id}>
              <Box
                borderRadius="md"
                overflow="hidden"
                opacity={0.33}
                height={[20, null, 40]}
                {...(slide === index && {
                  opacity: 1,
                  boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.12)",
                })}
              >
                <Image
                  placeholder="blur"
                  width={400}
                  height={0}
                  blurDataURL={media.url}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    cursor: "pointer",
                  }}
                  src={media.url}
                  alt={String(title)}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};
