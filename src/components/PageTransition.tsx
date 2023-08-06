"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

type PageTransitionProps = HTMLMotionProps<"div">;

function PageTransition(props: PageTransitionProps) {
  const { children, ...restProps } = props;

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 50,
  };

  return (
    <motion.div transition={spring} {...restProps}>
      {children}
    </motion.div>
  );
}

export default PageTransition;
