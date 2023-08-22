"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

import { useFollowPointer } from "../hooks/useFollowPointer";

export const FollowPointer = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      animate={{ x, y }}
      transition={{
        type: "spring",
      }}
      style={{
        zIndex: 100,
        position: "absolute",
        width: "20px",
        height: "20px",
        margin: "-10px",
        backgroundColor: "black",
        borderRadius: 10,
      }}
    />
  );
};
