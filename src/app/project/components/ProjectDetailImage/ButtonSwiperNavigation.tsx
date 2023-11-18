import { Flex, IconButton } from "@chakra-ui/react";
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
    <Flex
      height="full"
      zIndex={1}
      position="absolute"
      top="0"
      width="fit-content"
      {...(isPrev ? { left: 0 } : { right: 0 })}
      align="center"
      cursor="pointer"
      onClick={onButtonClick}
      _hover={{
        background: `linear-gradient(to ${
          isPrev ? "left" : "right"
        }, transparent 0%, rgba(0, 0, 0, 0.12) 50%)`,
      }}
    >
      <IconButton
        icon={isPrev ? <IoChevronBack /> : <IoChevronForward />}
        aria-label={type}
        rounded="full"
        variant="unstyled"
        display="flex"
        alignItems="center"
        justifyContent="center"
      />
    </Flex>
  );
};
