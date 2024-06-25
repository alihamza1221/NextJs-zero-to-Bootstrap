import { useCallback, useEffect, useRef } from "react";

const useElementInView = (isLTR: boolean, v: number) => {
  const containerRef = useRef<HTMLElement | null>(null);

  const intersectionCallback = (entries: any) => {
    const [entry] = entries;
    const isIntersecting = entry.isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const scrollHandler = () => {
    const initialTranslateXLTR = -36 * 4;
    const initialTranslateXRTL = -36 * 4;
    if (!containerRef.current) return;
    const translateX =
      (window.innerHeight - containerRef.current.getBoundingClientRect().top) *
      v;
    let totTranslateX = 0;
    if (isLTR) totTranslateX = translateX + initialTranslateXLTR;
    else totTranslateX = -(translateX + initialTranslateXRTL);

    containerRef.current.style.transform = `translateX(${totTranslateX}px)`;
  };

  const setRef = useCallback((node: HTMLElement | null) => {
    if (!node) {
      return;
    }

    containerRef.current = node;
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    containerRef.current && intersectionObserver.observe(containerRef.current);
    return () => {
      containerRef.current &&
        intersectionObserver.unobserve(containerRef.current);
    };
  }, [containerRef.current]);
  return [setRef];
};

export default useElementInView;
