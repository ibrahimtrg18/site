"use client";

import { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { Box, Skeleton } from "@chakra-ui/react";

type ImageProps = NextImageProps;

export const Image = (props: ImageProps) => {
  const {
    fill = true,
    width = "100%",
    height = "100%",
    src = "/assets/images/no-image.png",
    ...restProps
  } = props;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box position="relative" width={width} height={height}>
      {isLoading && (
        <Skeleton
          position="absolute"
          width="100%"
          height="100%"
          borderRadius="md"
        />
      )}

      <NextImage
        fill={fill}
        placeholder="blur"
        style={{ objectFit: "contain" }}
        src={src}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        {...(src && { blurDataURL: src as string })}
        {...restProps}
      />
    </Box>
  );
};
