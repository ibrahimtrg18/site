"use client";

import { RefObject, useEffect, useState } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x =
        clientX - element.offsetLeft - element.offsetWidth / 2 + window.scrollX;
      const y =
        clientY - element.offsetTop - element.offsetHeight / 2 + window.scrollY;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.scrollX, window.scrollY]);

  return point;
}
