import React from "react";
import ReactDOM from "react-dom/client";
import ProductPage from "./ProductPage";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductPage />
    </BrowserRouter>
  </React.StrictMode>
);
