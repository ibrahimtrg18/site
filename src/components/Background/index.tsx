"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

import Cell, { CELL_SIZE } from "./Cell";

type ContainerProps = {
  columns: number;
};

const Container = styled(motion.div)<ContainerProps>`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  mask-image: radial-gradient(
    200px 200px,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.4),
    transparent
  );
  mask-repeat: no-repeat;
`;

export const Background = () => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  // determine rows and columns
  useEffect(() => {
    const calculateGrid = () => {
      const columnCount = Math.ceil(window.innerWidth / CELL_SIZE);
      setColumns(columnCount);
      const rowCount = Math.ceil(window.innerHeight / CELL_SIZE);
      setRows(rowCount);
    };
    // calculate the grid on load
    calculateGrid();
    // recalculate grid on resize
    window.addEventListener("resize", calculateGrid);
    // cleanup
    return () => {
      window.removeEventListener("resize", calculateGrid);
    };
  }, []);

  // mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // animate mouse x and y
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };
    // recalculate grid on resize
    window.addEventListener("mousemove", handleMouseMove);
    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const centerMouseX = useTransform<number, number>(mouseX, (newX) => {
    if (typeof window !== "undefined") return newX - window.innerWidth / 2;

    return 0;
  });
  const centerMouseY = useTransform<number, number>(mouseY, (newY) => {
    if (typeof window !== "undefined") return newY - window.innerHeight / 2;

    return 0;
  });
  const WebkitMaskPosition = useMotionTemplate`${centerMouseX}px ${centerMouseY}px`;

  return (
    <Container columns={columns} style={{ WebkitMaskPosition }}>
      {Array.from({ length: columns * rows }).map((_, i) => (
        <Cell key={i} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </Container>
  );
};
