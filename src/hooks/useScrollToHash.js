import { useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";
// import { useLocation, useNavigate } from '@remix-run/react';
import { useCallback, useRef } from "react";

export function useScrollToHash() {
  const scrollTimeout = useRef();
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);

      targetElement.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
      });

      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);

        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);

          if (window.location.pathname === router.pathname) {
            onDone?.();
            router.push(`${router.pathname}#${id}`);
          }
        }, 50);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [router, reduceMotion]
  );

  return scrollToHash;
}
