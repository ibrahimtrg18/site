"use client";
import React, { Fragment } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type PageTransitionProps = HTMLMotionProps<"div">;

export function PageTransition(props: PageTransitionProps) {
  const { children, ...restProps } = props;

  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        {...restProps}
      >
        {children}
      </motion.div>
    </Fragment>
  );
}
