import NextImage, { ImageProps as NextImageProps } from "next/image";
import { Box } from "@chakra-ui/react";

type ImageProps = NextImageProps;

export const Image = (props: ImageProps) => {
  const {
    fill = true,
    width = "100%",
    height = "100%",
    src = "/assets/images/no-image.png",
    ...restProps
  } = props;

  return (
    <Box position="relative" width={width} height={height}>
      <NextImage
        fill={fill}
        placeholder="blur"
        style={{ objectFit: "contain" }}
        src={src}
        {...(src && { blurDataURL: src as string })}
        {...restProps}
      />
    </Box>
  );
};
