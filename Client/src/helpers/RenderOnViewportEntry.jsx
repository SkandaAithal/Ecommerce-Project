import React, { Suspense, useRef } from "react";
import useFirstViewPortEntry from "../customHooks/useFirstViewPortEntry";
import Loader from "../Components/Loader";
function RenderOnViewportEntry({
  children,
  threshold = 0,
  root = null,
  rootMargin = "0px 0px 0px 0px",
  ...wrapperProps
}) {
  const ref = useRef();
  const entered = useFirstViewPortEntry(ref, { threshold, root, rootMargin });

  return (
    <div {...wrapperProps} ref={ref}>
      {entered && <Suspense fallback={<Loader />}>{children}</Suspense>}
    </div>
  );
}

export default RenderOnViewportEntry;
