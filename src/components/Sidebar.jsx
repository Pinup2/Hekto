

// // const categoryQuery = `category=${category}`

// // const priceQuery = `proice={}`

//   // TODO: remove with new endpoint /productFilters

//   // TODO: create function which combines all queries: brand, price, category...

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setFilters }) => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFilters() {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        const brands = [...new Set(data.map((product) => product.brand))];
        setBrands(brands.map((brand) => ({ name: brand })));
        const categories = [...new Set(data.flatMap((product) => product.category))];
        setCategories(categories.map((category) => ({ name: category })));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchFilters();
  }, []);

  const handleCheckboxChange = (event, category) => {
    setFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [category]: event.target.checked
            ? [...(prevFilters[category] || []), event.target.name]
            : (prevFilters[category] || []).filter((item) => item !== event.target.name),
      };

      const params = new URLSearchParams(newFilters).toString();
      navigate(`?${params}`);

      return newFilters;
    });
  };

  return (
      <div className="sidebar">
        <div className="filter-section">
          <Typography variant="h6">Product Brand</Typography>
          <FormGroup>
            {brands.map((brand) => (
                <FormControlLabel
                    key={brand.name}
                    control={
                      <Checkbox
                          name={brand.name}
                          onChange={(e) => handleCheckboxChange(e, "brand")}
                      />
                    }
                    label={brand.name}
                />
            ))}
          </FormGroup>
        </div>

        <div className="filter-section">
          <Typography variant="h6">Categories</Typography>
          <FormGroup>
            {categories.map((category) => (
                <FormControlLabel
                    key={category.name}
                    control={
                      <Checkbox
                          name={category.name}
                          onChange={(e) => handleCheckboxChange(e, "categories")}
                      />
                    }
                    label={category.name}
                />
            ))}
          </FormGroup>
        </div>
      </div>
  );
};

Sidebar.propTypes = {
  setFilters: PropTypes.func.isRequired,
};

export default Sidebar;

