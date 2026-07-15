"use client";

import { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

import { Skeleton } from "./ui";

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
    <div className="relative" style={{ width, height }}>
      {isLoading && <Skeleton className="absolute h-full w-full rounded-md" />}

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
    </div>
  );
};
