import React from "react";
import ReactDOM from "react-dom/client";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/ui/Nav.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/themes.ts";
import Footer from "./components/ui/Footer";
import { ListerProvider } from "./context/lister";
import "/Users/anghelina/Desktop/hekto-app/src/styles/ProductPage.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
      <Route path="product" element={    
}></Route> */}
      <ThemeProvider theme={theme}>
        <Navbar />
        <ListerProvider>
          <ProductPage />
        </ListerProvider>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
