"use client";

import { CSSProperties, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Image } from "@/components";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type ProjectImageProps = {
  title?: string;
  images?: Array<Record<string, string>>;
};

export const ProjectSliderImages = ({
  title = "",
  images: media = [],
}: ProjectImageProps) => {
  const [thumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <Flex direction="column" gap={2} userSelect="none">
      <Flex
        flex={1}
        position="relative"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        alignSelf="center"
        width="100%"
        borderRadius="md"
        boxShadow="0 0 4px 0 rgba(0, 0, 0, 0.12)"
        overflow="hidden"
      >
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#1A202C",
              "--swiper-pagination-color": "#1A202C",
              "--swiper-navigation-size": "20px",
              width: "100%",
            } as CSSProperties
          }
          loop={true}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {media.map((media) => (
            <SwiperSlide key={media.url}>
              <Box
                position="relative"
                flex={1}
                width="100%"
                aspectRatio={16 / 9}
              >
                <Image
                  fill
                  placeholder="blur"
                  blurDataURL={media.url}
                  style={{ objectFit: "contain" }}
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
