import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsComponentVisible(false);
      }
      // console.log("event.target: " + event.target);
      console.log("ref: " + ref);
      console.log("ref.current: " + ref.current);
      console.log("isComponentVisible: " + isComponentVisible);
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isComponentVisible]);

  return { ref, isComponentVisible, setIsComponentVisible };
}