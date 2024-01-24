import React from "react";
import styled from "styled-components";
import ProductList from "../Components/ProductList";
import Sort from "../Components/Sort";
import FilterSection from "../Components/FilterSection";

import { useProductContext } from "../context/productcontext";
import Loader from "../Components/Loader";

const Products = () => {
  const {
    products,
    isLoading,
    totalItems,
    loadMoreProducts,
    setGridView,
    setListView,
    gridView,
  } = useProductContext();

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort
              setGridView={setGridView}
              setListView={setListView}
              gridView={gridView}
              totalItems={totalItems}
              filterProducts={products}
            />
          </div>
          <div>
            {isLoading ? (
              <Loader />
            ) : (
              <ProductList
                gridView={gridView}
                filterProducts={products}
                totalItems={totalItems}
                loadMoreItems={loadMoreProducts}
              />
            )}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-inline: 2rem;
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
