import React, { useEffect } from "react";
import { Box, Typography, Button,  IconButton, Paper } from "@mui/material";
import { useCart } from "../context/cardContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";


const CartItemContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const CartItemDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const CartItemImage = styled('img')({
  width: 100,
  height: 100,
  marginRight: 20,
});

const CartSummary = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      const timer = setTimeout(() => {
        navigate("/products");
      }, 3000); 
      return () => clearTimeout(timer); 
    }
  }, [cartItems, navigate]);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 100; // Example shipping cost
  const total = subtotal + shipping;

  return (
    <Box sx={{ padding: "20px", display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ flex: 3 }}>
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
        {cartItems.map((item) => (
          <CartItemContainer key={item.id} elevation={3}>
            <CartItemDetails>
              <CartItemImage src={item.image} alt={item.title} />
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1">${item.price.toFixed(2)}</Typography>
              </Box>
            </CartItemDetails>
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
              <Typography variant="body1" sx={{ ml: 4 }}>
                ${(item.price * item.quantity).toFixed(2)}
              </Typography>
              <IconButton onClick={() => handleRemoveFromCart(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </CartItemContainer>
        ))}
        <Button variant="contained" color="secondary" onClick={clearCart} sx={{ mt: 2 }}>
          Clear Cart
        </Button>
      </Box>
      <CartSummary elevation={3} sx={{ flex: 1, marginLeft: 4 }}>
        <Typography variant="h5" gutterBottom>
          Summary
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1">Subtotal:</Typography>
          <Typography variant="body1">${subtotal.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography variant="body1">Shipping:</Typography>
          <Typography variant="body1">${shipping.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6">${total.toFixed(2)}</Typography>
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Proceed to Checkout
        </Button>
      </CartSummary>
    </Box>
  );
};

export default CartPage;
