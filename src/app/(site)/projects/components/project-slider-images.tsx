"use client";

import { CSSProperties, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
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
    <div className="flex select-none flex-col gap-2">
      <div className="relative flex w-full flex-1 items-center justify-center self-center overflow-hidden rounded-md text-center shadow-[0_0_4px_0_rgba(0,0,0,0.12)]">
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
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Pagination, Thumbs, Autoplay]}
        >
          {media.map((media) => (
            <SwiperSlide key={media.url}>
              <div className="relative aspect-video w-full flex-1">
                <Image
                  fill
                  placeholder="blur"
                  blurDataURL={media.url}
                  style={{ objectFit: "contain" }}
                  src={media.url}
                  alt={String(title)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
