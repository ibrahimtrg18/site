import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Project } from "../../../../types/Project";
import { ButtonSwiperNavigation } from "./ButtonSwiperNavigation";

export const ProjectDetailImage = ({
  title = "",
  media = [],
}: Partial<Project>) => {
  return (
    <Box flex={1} position="relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        autoplay
        loop
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        <ButtonSwiperNavigation type="prev" />
        {media.map((media) => (
          <SwiperSlide key={media.id}>
            <Image
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
          </SwiperSlide>
        ))}
        <ButtonSwiperNavigation type="next" />
      </Swiper>
    </Box>
  );
};
