import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = ({ product, viewType }) => {
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <Card style={{ marginBottom: viewType === "grid" ? "0" : "20px" }}>
      {product.images && product.images.length > 0 ? (
        <CardMedia
          component="img"
          image={product.images[0]}
          alt={product.title}
          style={{
            height: viewType === "grid" ? "345px" : "200px",
            width: "100%",
            objectFit: "contain", // Adjust objectFit as needed
          }}
        />
      ) : (
        <CardMedia
          component="img"
          image="https://via.placeholder.com/150" // Placeholder image URL
          alt="Placeholder"
          style={{
            height: viewType === "grid" ? "345px" : "200px",
            width: "100%",
            objectFit: "contain", // Adjust objectFit as needed
          }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {product.title}
        </Typography>
        <Box display="flex" alignItems="center">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              style={{
                color: index < product.rating ? "gold" : "lightgray",
              }}
            />
          ))}
        </Box>
        <Typography variant="h6" color="textPrimary">
          ${discountedPrice}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ textDecoration: "line-through" }}
        >
          ${product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="add to cart">
          <ShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="compare">
          <CompareArrowsIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
