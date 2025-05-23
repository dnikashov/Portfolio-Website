import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the actual scrolling element
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", 
    });
  }, [pathname]);

  return null;
}
