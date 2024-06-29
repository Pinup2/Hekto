// import React from "react";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <p>${product.price.toFixed(2)}</p>
//     </div>
//   );
// };

// export default ProductCard;
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
import { styled } from "@mui/material/styles";

const ProductCard = ({ product, viewType }) => {
  return (
    <Card style={{ marginBottom: viewType === "grid" ? "0" : "20px" }}>
      <CardMedia
        component="img"
        image={
          product.images && product.images.length > 0
            ? product.images[0]
            : "https://via.placeholder.com/150"
        }
        alt={product.title}
        style={{
          height: viewType === "grid" ? "345px" : "200px",
          width: "100%",
          objectFit: "contain", // Adjust objectFit as needed
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1" color="text.primary">
          ${product.price.toFixed(2)}
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
