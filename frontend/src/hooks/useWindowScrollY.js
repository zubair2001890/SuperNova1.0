import { useState, useEffect } from "react";

export default () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const updateScrollY = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollY);
    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);

  return scrollY;
};
