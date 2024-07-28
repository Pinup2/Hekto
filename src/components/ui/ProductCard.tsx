import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { styled } from "@mui/system";
import { useListerContext } from "../../context/lister";
import { Product } from "../../types/types";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  viewType: "grid" | "list";
}

const StyledCard = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: "200px",
  width: "100%",
  objectFit: "contain",
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "left",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: "space-around",
  padding: theme.spacing(1),
}));

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
  const { viewType } = useListerContext();

  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
      <StyledCard>
        {product.images && product.images.length > 0 ? (
          <StyledCardMedia
            component="img"
            image={product.images[0]}
            alt={product.title}
          />
        ) : (
          <StyledCardMedia
            component="img"
            image="https://via.placeholder.com/150"
            alt="Placeholder"
          />
        )}
        <StyledCardContent>
          <Box>
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
              display="flex"
              justifyContent="left"
              alignItems="left"
              sx={{ marginBottom: 1 }}
            >
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  sx={{ color: index < product.rating ? "gold" : "lightgray" }}
                />
              ))}
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
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
                  marginBottom: 1,
                  marginLeft: "8px",
                }}
              >
                ${product.price.toFixed(2)}
              </Typography>
            </Box>
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
        </StyledCardContent>
        <StyledCardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon sx={{ color: "#7E33E0" }} />
          </IconButton>
          <IconButton aria-label="add to cart">
            <ShoppingCartIcon sx={{ color: "#7E33E0" }} />
          </IconButton>
          <IconButton aria-label="compare">
            <ZoomInOutlinedIcon sx={{ color: "#7E33E0" }} />
          </IconButton>
        </StyledCardActions>
      </StyledCard>
    </Link>
  );
};

export default ProductCard;
