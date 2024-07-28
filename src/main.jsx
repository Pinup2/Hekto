import React from "react";
import ReactDOM from "react-dom/client";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import HomePage from "./components/ui/HomePage";
import CartPage from "./pages/CartPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/themes.ts";
import { ListerProvider } from "./context/lister";
import { CartProvider } from "./context/cardContext.tsx";

import "/Users/anghelina/Desktop/hekto-app/src/styles/ProductPage.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <ListerProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </ListerProvider>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
