

// // const categoryQuery = `category=${category}`

// // const priceQuery = `proice={}`

//   // TODO: remove with new endpoint /productFilters

//   // TODO: create function which combines all queries: brand, price, category...

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import useUrlParams from "../hooks/useUrlParams.js";

const definedPriceRanges = [
  { label: "$0 - $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200+", min: 200, max: Infinity },
];
const definedRatings = [5, 4, 3, 2, 1];
//define {}{}{}{min;max}

const definedDiscounts = [
  { label: "10%+", min: 10 },
  { label: "20%+", min: 20 },
  { label: "30%+", min: 30 },
  { label: "50%+", min: 50 },
];
const Sidebar = ({ setFilters }) => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const { updateUrl } = useUrlParams();
  //component filter that will get everything
  useEffect(() => {
    async function fetchFilters() {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        const brands = [...new Set(data.map((product) => product.brand))];
        setBrands(brands.map((brand) => ({ name: brand })));
        const categories = [...new Set(data.map((product) => product.category))];
        setCategories(categories.map((category) => ({ name: category })));
        const prices = definedPriceRanges.map((range) => ({
          ...range,
          count: data.filter(
              (product) => product.price >= range.min && product.price <= range.max
          ).length,
        }));
        setPriceRanges(prices);
        const ratings = definedRatings.map((rating) => ({
          rating,
          count: data.filter((product) => Math.round(product.rating) === rating).length,
        }));
        setRatings(ratings);
        console.log("data", data)

        const discounts = definedDiscounts.map((discount) => ({
          ...discount,
          count: data.filter((product) => product.discountPercentage >= discount.min).length,
        }));
        setDiscounts(discounts);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchFilters();
  }, []);


  //separate hook for creating URL
  //redundant, get logic of forming string with filters to transport to link url - into function , filterTostring
  // and separate hook that will give me naming for filters depending on filters name, it iwll create an object
  //simplify
  const handleCheckboxChange = (event, category) => {
    setFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [category]: event.target.checked
            ? [...(prevFilters[category] || []), event.target.name]
            : (prevFilters[category] || []).filter((item) => item !== event.target.name),
      };

      //helps deleting filters
      if (newFilters[category].length === 0) {
        delete newFilters[category];
      }


      updateUrl(newFilters);


      return newFilters;
    });
  };
  //function that need to change just STATE!!!

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
                          onChange={(e) => handleCheckboxChange(e, "category")}
                      />
                    }
                    label={category.name}
                />
            ))}
          </FormGroup>
        </div>
        <div className="filter-section">
          <Typography variant="h6">Price Range</Typography>
          <FormGroup>
            {priceRanges.map((range) => (
                <FormControlLabel
                    key={range.label}
                    control={
                      <Checkbox
                          name={`${range.min}-${range.max}`}
                          onChange={(e) => handleCheckboxChange(e, "priceRange")}
                      />
                    }
                    label={`${range.label}`}
                />
            ))}
          </FormGroup>
        </div>

        <div className="filter-section">
          <Typography variant="h6">Rating</Typography>
          <FormGroup>
            {ratings.map((rating) => (
                <FormControlLabel
                    key={rating.rating}
                    control={
                      <Checkbox
                          name={rating.rating.toString()}
                          onChange={(e) => handleCheckboxChange(e, "rating")}
                      />
                    }
                    label={`${rating.rating} Stars (${rating.count})`}
                />
            ))}
          </FormGroup>
        </div>

        <div className="filter-section">
          <Typography variant="h6">Discount</Typography>
          <FormGroup>
            {discounts.map((discount) => (
                <FormControlLabel
                    key={discount.label}
                    control={
                      <Checkbox
                          name={discount.min.toString()}
                          onChange={(e) => handleCheckboxChange(e, "discount")}
                      />
                    }
                    label={`${discount.label} (${discount.count})`}
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

