import React from "react";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard.jsx";

const ListProductList = ({ products }) => {
  return (
    <Box style={{ padding: "40px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} viewType="list" />
      ))}
    </Box>
  );
};

export default ListProductList;
