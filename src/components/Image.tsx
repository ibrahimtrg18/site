import NextImage, { ImageProps as NextImageProps } from "next/image";

type ImageProps = Omit<NextImageProps, "src"> & {
  src?: string;
};

export const Image = (props: ImageProps) => {
  const { src = "/images/no-image.png", ...restProps } = props;

  return <NextImage src={src} {...restProps} />;
};
