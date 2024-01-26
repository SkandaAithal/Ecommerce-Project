import React, { useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";

function LazyImage({ src, blurhash }) {
  const [isLoading, setIsLoading] = useState(true);
  const placeholderRef = useRef(null);
  const [view, setView] = useState("");

  useEffect(() => {
    const options = {
      rootMargin: "0px 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setView(src);
        observer.disconnect();
      }
    }, options);

    if (placeholderRef && placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      {isLoading && (
        <div
          ref={placeholderRef}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Blurhash
            hash={blurhash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <img
        src={`https://ecommerce-server.uk.to/uploads/${view}`}
        alt=""
        style={{
          display: isLoading ? "none" : "block",
          width: "100%",
        }}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </>
  );
}

export default LazyImage;
