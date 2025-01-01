"use client";

import { useMemo } from "react";
import Link from "next/link";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import * as SocialIcon from "react-icons/io5";

type SocialMediaProps = IconButtonProps & {
  platform?: string;
};

const SocialMedia = (props: SocialMediaProps) => {
  const { id, platform, ...restProps } = props;

  const platforms = useMemo(
    () => [
      {
        label: "Email",
        icon: "IoMail",
        href: "mailto:ibrahimtarigan@gmail.com",
      },
      {
        label: "Phone",
        icon: "IoCall",
        href: "tel:+6281260009709",
      },
      {
        label: "CV",
        icon: "IoDocument",
        href: "https://drive.google.com/file/d/11ZBzlYul7CDTPlfO3Ix1BlD-9X1h4zHG/view?usp=sharing",
      },
      {
        label: "Github",
        icon: "IoLogoGithub",
        href: "https://github.com/ibrahimtrg18",
      },
      {
        label: "LinkedIn",
        icon: "IoLogoLinkedin",
        href: "https://www.linkedin.com/in/ibrahimtrg18",
      },
    ],
    []
  );

  const socialMedia = useMemo(
    () => platforms.find((_platform) => _platform.label === String(platform)),
    [platform, platforms]
  );

  const Icon =
    SocialIcon[socialMedia?.icon as unknown as keyof typeof SocialIcon];

  return (
    <IconButton
      key={id}
      as={Link}
      variant="ghost"
      passHref
      target="_blank"
      rounded="8px"
      {...socialMedia}
      {...restProps}
      icon={<Icon />}
    />
  );
};

export default SocialMedia;
