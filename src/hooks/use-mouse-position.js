import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseEvent = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseEvent);

    return () => {
      window.removeEventListener("mousemove", handleMouseEvent);
    };
  }, []);

  return position;
}
