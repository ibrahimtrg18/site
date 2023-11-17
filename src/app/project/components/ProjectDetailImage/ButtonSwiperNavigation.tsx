import { IconButton } from "@chakra-ui/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useSwiper } from "swiper/react";

type ButtonNavigationProps = {
  type: "prev" | "next";
};

export const ButtonSwiperNavigation = ({ type }: ButtonNavigationProps) => {
  const swiper = useSwiper();

  const isPrev = type === "prev";

  const onButtonClick = () => {
    if (isPrev) {
      swiper.slidePrev();
      return;
    }
    swiper.slideNext();
  };

  return (
    <IconButton
      width="fit-content"
      icon={isPrev ? <IoChevronBack /> : <IoChevronForward />}
      aria-label={type}
      rounded="full"
      zIndex={1}
      position="absolute"
      top="50%"
      {...(isPrev ? { left: 4 } : { right: 4 })}
      translateY="-50%"
      onClick={onButtonClick}
    />
  );
};
