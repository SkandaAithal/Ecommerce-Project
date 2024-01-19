import React, { useEffect, useRef, useState } from "react";

export default function useFirstViewPortEntry(ref, observerOptions) {
  const [entered, setEntered] = useState(false);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => setEntered(entry.isIntersecting),
      observerOptions
    )
  );

  useEffect(() => {
    const element = ref.current;
    const ob = observer.current;

    if (entered) {
      ob.disconnect();
      return;
    }

    if (element && !entered) {
      ob.observe(element);
    }
    return () => ob.disconnect();
  }, [entered, ref]);

  return entered;
}
