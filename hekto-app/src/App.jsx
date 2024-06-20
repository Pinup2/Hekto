import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import ProductsList from "./components/ProductList"; // Adjust the path as necessary

const App = () => {
  return (
    <Router>
      <Routes>
        // Replace Switch with Routes
        <Route path="/products" element={<ProductsList />} /> // Update the
        Route to use element prop
        {/* other routes */}
      </Routes>
    </Router>
  );
};

export default App;
