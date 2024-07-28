import React from "react";
import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import { useCart } from "../context/cardContext";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  if (cartItems.length === 0) {
    return (
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4">Your Cart is Empty</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              border={1}
              borderColor="grey.300"
              borderRadius={4}
            >
              <Box display="flex" alignItems="center">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "20px",
                  }}
                />
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body1">
                    ${item.price.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </Button>
                <Typography variant="body1" sx={{ mx: 2 }}>
                  {item.quantity}
                </Typography>
                <Button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </Button>
                <IconButton onClick={() => handleRemoveFromCart(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={clearCart}>
          Clear Cart
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
