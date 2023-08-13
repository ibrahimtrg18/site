import styled from "@emotion/styled";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const CELL_SIZE = 32;

const Container = styled.div`
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  border: 1px dashed #aaa;
  color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

type CellProps = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

const Cell = ({ mouseX, mouseY }: CellProps) => {
  const [position, setPosition] = useState([0, 0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // center x coordinate
    const x = rect.left + CELL_SIZE / 2;
    // center y coordinate
    const y = rect.top + CELL_SIZE / 2;
    setPosition([x, y]);
  }, [ref.current]);

  const direction = useTransform<MotionValue<number>, number>(
    [mouseX, mouseY],
    (XY) => {
      const [x, y] = XY as unknown as Array<number>;

      const diffY = y - position[1];
      const diffX = x - position[0];
      const angleRadians = Math.atan2(diffY, diffX);
      const angleDegrees = Math.floor(angleRadians * (180 / Math.PI));
      return angleDegrees;
    }
  );

  return (
    <Container ref={ref}>
      <motion.div style={{ rotate: direction }}>→</motion.div>
    </Container>
  );
};

export default Cell;
