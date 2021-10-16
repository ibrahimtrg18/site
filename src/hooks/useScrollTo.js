import { useEffect } from "react";

export const useScrollTo = id => {
  useEffect(() => {
    if (id) {
      const el = document.getElementById(id);
      const top = window.scrollY + el.getBoundingClientRect().top;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [id]);
};
