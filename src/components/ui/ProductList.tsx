import { useListerContext } from "../../context/lister.js";
import { Box, Grid } from "@mui/material";
import ProductCard from "../ui/ProductCard.js";

const ProductList = ({ products }) => {
  console.log("Products in ProductList:", products);
  const { viewType } = useListerContext();

  return (
    <Box style={{ padding: "40px" }}>
      {viewType === "grid" ? (
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} viewType="grid" />
            </Grid>
          ))}
        </Grid>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} viewType="list" />
        ))
      )}
    </Box>
  );
};

export default ProductList;
