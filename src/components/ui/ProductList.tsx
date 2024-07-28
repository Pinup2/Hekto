import { useListerContext } from "../../context/lister.js";
import { Box, Grid } from "@mui/material";
import ProductCard from "../ui/ProductCard.js";
import { Product } from "../../types/types";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { viewType } = useListerContext();

  return (
    <Box>
      {viewType === "grid" ? (
        <Grid container spacing={2}>
          {products?.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <ProductCard product={product} viewType="grid" />
            </Grid>
          ))}
        </Grid>
      ) : (
        products?.map((product) => (
          <Box key={product.id} mb={2}>
            <ProductCard product={product} viewType="list" />
          </Box>
        ))
      )}
    </Box>
  );
};

export default ProductList;
