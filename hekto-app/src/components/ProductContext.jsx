import React, { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("priceLowHigh");
  const [viewType, setViewType] = useState("grid");
  console.log("Providing viewType:", viewType);
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        productsPerPage,
        setProductsPerPage,
        sortOrder,
        setSortOrder,
        viewType,
        setViewType,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
