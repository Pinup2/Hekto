// import React from "react";
// import {
//   Box,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Typography,
//   IconButton,
//   Rating,
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
// import { styled } from "@mui/material/styles";

// const StyledCard = styled(CardMedia)({
//   width: "100%",
//   margin: "20px auto",
//   objectFit: "cover",
//   borderRadius: "16px",
//   boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
//   overflow: "visible",
// });

// const ProductList = ({ products, viewType }) => {
//   const renderGridProducts = () => (
//     <Grid
//       container
//       spacing={4}
//       style={{ padding: "40px" }}
//       justifyContent="center"
//     >
//       {products.map((product) => (
//         <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
//           <StyledCard>
//             <CardMedia
//               component="img"
//               image={
//                 product.images && product.images.length > 0
//                   ? product.images[0]
//                   : "https://via.placeholder.com/150"
//               }
//               alt={product.title}
//               style={{ height: "345px", width: "100%", objectFit: "contain" }}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h6" component="h2">
//                 {product.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {product.description}
//               </Typography>
//               <Typography variant="body1" color="text.primary">
//                 ${product.price.toFixed(2)}
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteBorderIcon />
//               </IconButton>
//               <IconButton aria-label="add to cart">
//                 <ShoppingCartIcon />
//               </IconButton>
//               <IconButton aria-label="compare">
//                 <CompareArrowsIcon />
//               </IconButton>
//             </CardActions>
//           </StyledCard>
//         </Grid>
//       ))}
//     </Grid>
//   );

//   const renderListProducts = () => (
//     <Box style={{ padding: "40px" }}>
//       {products.map((product) => (
//         <Card key={product.id} style={{ marginBottom: "20px" }}>
//           <CardMedia
//             component="img"
//             image={
//               product.images && product.images.length > 0
//                 ? product.images[0]
//                 : "https://via.placeholder.com/150"
//             }
//             alt={product.title}
//             style={{ height: "200px", width: "100%", objectFit: "contain" }}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h6" component="h2">
//               {product.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {product.description}
//             </Typography>
//             <Typography variant="body1" color="text.primary">
//               ${product.price.toFixed(2)}
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites">
//               <FavoriteBorderIcon />
//             </IconButton>
//             <IconButton aria-label="add to cart">
//               <ShoppingCartIcon />
//             </IconButton>
//             <IconButton aria-label="compare">
//               <CompareArrowsIcon />
//             </IconButton>
//           </CardActions>
//         </Card>
//       ))}
//     </Box>
//   );

//   return viewType === "grid" ? renderGridProducts() : renderListProducts();
// };

// export default ProductList;
import React from "react";
import GridProductList from "./GridProductListComponent";
import ListProductList from "./ListProductList";

const ProductList = ({ products, viewType }) => {
  return (
    <>
      {viewType === "grid" ? (
        <GridProductList products={products} />
      ) : (
        <ListProductList products={products} />
      )}
    </>
  );
};

export default ProductList;
