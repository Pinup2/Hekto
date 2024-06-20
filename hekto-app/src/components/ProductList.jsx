import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/productService"; // Adjust the path as necessary

import { Card, Box, Button } from "@mui/material";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchAllProducts();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <Box key={product.id} marginBottom={2}>
          {" "}
          {/* Adds space below each card */}
          <Card key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <Button>Add to Cart</Button>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default ProductsList;
