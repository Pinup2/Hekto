import React from "react";
import GridProductList from "./GridProductListComponent";
import ListProductList from "./ListProductList";

const ProductList = ({ products, viewType }) => {
  console.log("Products in ProductList:", products);
  return (
    <>
      {viewType === "grid" ? (
        <GridProductList products={products} />
      ) : (
        <ListProductList products={products} />
      )}
    </>
  );
};

export default ProductList;
