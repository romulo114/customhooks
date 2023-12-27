import { useEffect, useRef, useState } from "react";

export default function useIsOnScreen() {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsOnScreen(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return [isOnScreen, elementRef];
}
