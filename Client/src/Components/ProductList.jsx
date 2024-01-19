import React, { Suspense, lazy } from "react";

import GridViewList from "./GridViewList ";
import Loader from "./Loader";

const ListView = lazy(() => import("./ListView"));

export default function ProductList({
  gridView,
  filterProducts,
  totalItems,
  loadMoreItems,
}) {
  if (gridView === true) {
    return (
      <GridViewList
        products={filterProducts}
        loadMoreItems={loadMoreItems}
        totalItems={totalItems}
      />
    );
  }
  if (gridView === false) {
    return (
      <Suspense fallback={<Loader />}>
        <ListView
          products={filterProducts}
          loadMoreItems={loadMoreItems}
          totalItems={totalItems}
        />
      </Suspense>
    );
  }
}
