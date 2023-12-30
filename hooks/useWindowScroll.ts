import { useEffect, useState } from "react";

export function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState<number>(0);

  useEffect(() => {
    function handleScrolling() {
      setWindowScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScrolling);
    handleScrolling();
    return () => window.removeEventListener("scroll", handleScrolling);
  }, []);

  return windowScroll;
}
