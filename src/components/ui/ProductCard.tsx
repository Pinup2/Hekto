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
import StarIcon from "@mui/icons-material/Star";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { styled } from "@mui/system";
import { Product } from "../../types/types";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  viewType: "grid" | "list";
}

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  overflow: "hidden",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const StyledCardMedia = styled(CardMedia)<{ viewType: "grid" | "list" }>(
  ({ viewType }) => ({
    height: viewType === "grid" ? "200px" : "150px",
    width: viewType === "list" ? "150px" : "100%",
    objectFit: "contain",
    marginRight: viewType === "list" ? "16px" : "0",
  })
);

const StyledCardContent = styled(CardContent)<{ viewType: "grid" | "list" }>(
  ({ viewType, theme }) => ({
    padding: theme.spacing(2),
    textAlign: "left",
    display: "flex",
    flexDirection: viewType === "grid" ? "column" : "row",
    justifyContent: viewType === "grid" ? "space-between" : "space-between",
    alignItems: viewType === "grid" ? "flex-start" : "flex-start",
    position: "relative",
  })
);

const StyledCardActions = styled(CardActions)<{ viewType: "grid" | "list" }>(
  ({ viewType, theme }) => ({
    justifyContent: viewType === "grid" ? "flex-start" : "flex-start",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: viewType === "grid" ? "row" : "row",
    alignItems: "center",
    marginTop: viewType === "list" ? theme.spacing(1) : 0,
    marginLeft: viewType === "list" ? "auto" : 0,
  })
);

const ProductCard: React.FC<ProductCardProps> = ({ product, viewType }) => {
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
      <StyledCard>
        <Box display={viewType === "list" ? "flex" : "block"}>
          {product.images && product.images.length > 0 ? (
            <StyledCardMedia
              component="img"
              image={product.images[0]}
              alt={product.title}
              viewType={viewType}
            />
          ) : (
            <StyledCardMedia
              component="img"
              image="https://via.placeholder.com/150"
              alt="Placeholder"
              viewType={viewType}
            />
          )}
          <StyledCardContent viewType={viewType}>
            <Box flexGrow={1}>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                sx={{
                  fontFamily: "Josefin Sans",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                {product.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    viewType === "grid" ? "flex-start" : "flex-end",
                  position: viewType === "grid" ? "relative" : "absolute",
                  top: viewType === "grid" ? "unset" : "16px",
                  right: viewType === "grid" ? "unset" : "16px",
                }}
              >
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{
                      color: index < product.rating ? "gold" : "lightgray",
                      marginLeft: index > 0 ? 0.5 : 0,
                    }}
                  />
                ))}
              </Box>
              <Box display="flex" alignItems="center" mt={1}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Josefin Sans",
                    fontWeight: 600,
                    color: "#101750",
                    marginBottom: 1,
                  }}
                >
                  ${discountedPrice}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "line-through",
                    fontFamily: "Josefin Sans",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#8A8FB9",
                    marginLeft: "8px",
                  }}
                >
                  ${product.price.toFixed(2)}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Josefin Sans",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#8A8FB9",
                  marginTop: 1,
                }}
              >
                {product.description}
              </Typography>
            </Box>
          </StyledCardContent>
        </Box>
        <StyledCardActions viewType={viewType}>
          <IconButton
            aria-label="add to favorites"
            onClick={(e) => e.stopPropagation()}
          >
            <FavoriteBorderIcon sx={{ color: "#7E33E0" }} />
          </IconButton>
          <Link to="/cart">
            <IconButton
              aria-label="add to cart"
              onClick={(e) => e.stopPropagation()}
            >
              <ShoppingCartIcon sx={{ color: "#7E33E0" }} />
            </IconButton>
          </Link>
          <IconButton aria-label="compare" onClick={(e) => e.stopPropagation()}>
            <ZoomInOutlinedIcon sx={{ color: "#7E33E0" }} />
          </IconButton>
        </StyledCardActions>
      </StyledCard>
    </Link>
  );
};

export default ProductCard;
