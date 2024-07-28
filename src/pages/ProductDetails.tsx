import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Grid,
  Button,
  Tab,
  Tabs,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Product } from "../types/types";
import ProductCard from "../components/ui/ProductCard";
import Layout from "../Layout/layout";

const StyledImage = styled("img")({
  width: "528px",
  height: "438px",
  objectFit: "cover",
  borderRadius: "8px",
});

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
        fetchRelatedProducts(data.tags);
      } catch (error: any) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedProducts = async (tags: string[]) => {
      try {
        const tagQuery = tags.map((tag) => `tags_like=${tag}`).join("&");
        console.log("tagQuery:", tagQuery);

        const response = await fetch(
          `http://localhost:3000/products?${tagQuery}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Related products data:", data);

        // Filter and sort related products based on tags
        const filteredProducts = data
          .filter((relatedProduct: Product) => relatedProduct.id !== id)
          .sort((a: Product, b: Product) => {
            const aTagCount = a.tags.filter((tag) => tags.includes(tag)).length;
            const bTagCount = b.tags.filter((tag) => tags.includes(tag)).length;
            return bTagCount - aTagCount;
          })
          .slice(0, 4);

        setRelatedProducts(filteredProducts);
      } catch (error: any) {
        console.error("Failed to fetch related products", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!product) {
    return <Typography>No product found</Typography>;
  }

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.title, href: `/product/${product.id}` },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledImage src={product.images[0]} alt={product.title} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {product.title}
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{
                  textDecoration: product.discountPercentage
                    ? "line-through"
                    : "none",
                }}
              >
                ${product.price.toFixed(2)}
              </Typography>
              {product.discountPercentage && (
                <Typography variant="h6" color="primary" sx={{ ml: 2 }}>
                  $
                  {(
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </Typography>
              )}
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{ color: index < product.rating ? "gold" : "lightgray" }}
                />
              ))}
            </Box>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              {product.description}
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Add to Cart
              </Button>
              <IconButton aria-label="add to wishlist">
                <FavoriteBorderIcon sx={{ color: "#FB2E86" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            aria-label="product details tabs"
          >
            <Tab label="Description" />
            <Tab label="Additional Info" />
            <Tab label="Reviews" />
            <Tab label="Video" />
          </Tabs>
          {tabIndex === 0 && (
            <Box p={2}>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
              <Typography variant="body1" paragraph>
                More details...
              </Typography>
            </Box>
          )}
          {tabIndex === 1 && (
            <Box p={2}>
              <Typography variant="body1" paragraph>
                {product.warrantyInformation}
              </Typography>
            </Box>
          )}
          {tabIndex === 2 && (
            <Box p={2}>
              {product.reviews.map((review, index) => (
                <Box key={index} mb={2}>
                  <Typography variant="subtitle1">
                    {review.reviewerName}
                  </Typography>
                  <Typography variant="body2">{review.comment}</Typography>
                </Box>
              ))}
            </Box>
          )}
          {tabIndex === 3 && (
            <Box p={2}>
              <Typography variant="body1" paragraph>
                Video content goes here.
              </Typography>
            </Box>
          )}
        </Box>
        <Box mt={4}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Related Products
          </Typography>
          <Grid container spacing={2}>
            {relatedProducts.map((relatedProduct) => (
              <Grid item key={relatedProduct.id} xs={12} sm={6} md={3}>
                <ProductCard product={relatedProduct} viewType="grid" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductDetailPage;
