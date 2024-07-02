import React from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard.jsx";

const GridProductList = ({ products }) => {
  console.log("Products in GridProductList:", products);
  if (!products || !Array.isArray(products) || products.length === 0) {
    return <Box style={{ padding: "40px" }}>No products available.</Box>;
  }
  return (
    <Box style={{ padding: "40px" }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} viewType="grid" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridProductList;
