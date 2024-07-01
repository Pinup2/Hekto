import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";

const OldPrice = styled(Typography)({
  textDecoration: "line-through",
  color: "gray",
  marginLeft: "8px",
});

const ProductCard = ({ product, viewType }) => {
  console.log(product);

  const price =
    product.price && !isNaN(product.price) ? Number(product.price) : null;
  const discountPercentage =
    product.discountPercentage && !isNaN(product.discountPercentage)
      ? Number(product.discountPercentage)
      : 0;
  const discountPrice =
    price !== null ? price * (1 - discountPercentage / 100) : null;

  return (
    <Card style={{ marginBottom: viewType === "grid" ? "0" : "20px" }}>
      {product.images && product.images.length > 0 ? (
        <CardMedia
          component="img"
          image={product.images[0]} // Ensure product.images[0] is a valid URL
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
        {product.description && (
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        )}
        {discountPrice !== null && (
          <Typography variant="body1" color="text.primary">
            ${discountPrice.toFixed(2)}
            {discountPercentage > 0 && (
              <OldPrice variant="body2">${price.toFixed(2)}</OldPrice>
            )}
          </Typography>
        )}
        <div>
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
              key={index}
              style={{
                color:
                  index < Math.round(product.rating) ? "#FFD700" : "#DDDDDD",
              }}
            />
          ))}
        </div>
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
