import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";

const Sidebar = ({ filters, setFilters }) => {
  const handleCheckboxChange = (event, category) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: event.target.checked
        ? [...prevFilters[category], event.target.name]
        : prevFilters[category].filter((item) => item !== event.target.name),
    }));
  };

  const handleRadioChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: event.target.value,
    }));
  };

  const categories = [
    "Watches",
    "Headphones",
    "Laptop",
    "Game Console",
    "Clothe",
    "Jewellery",
    "Perfume",
  ];

  return (
    <div className="sidebar">
      <div className="filter-section">
        <Typography variant="h6">Product Brand</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="Casio"
                checked={filters.brand.includes("Casio")}
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Casio"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Apple"
                checked={filters.brand.includes("Apple")}
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Apple"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Sony"
                checked={filters.brand.includes("Sony")}
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Sony"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Nike"
                checked={filters.brand.includes("Nike")}
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Nike"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Vke"
                checked={filters.brand.includes("Vke")}
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Vke"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Glossiness"
                checked={filters.brand.includes("Glossiness")}
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Glossiness"
          />
        </FormGroup>
      </div>

      <div className="filter-section">
        <Typography variant="h6">Discount Offer</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="20% Cashback"
                checked={filters.discount.includes("20% Cashback")}
                onChange={(e) => handleCheckboxChange(e, "discount")}
              />
            }
            label="20% Cashback"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="5% Cashback Offer"
                checked={filters.discount.includes("5% Cashback Offer")}
                onChange={(e) => handleCheckboxChange(e, "discount")}
              />
            }
            label="5% Cashback Offer"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="25% Discount Offer"
                checked={filters.discount.includes("25% Discount Offer")}
                onChange={(e) => handleCheckboxChange(e, "discount")}
              />
            }
            label="25% Discount Offer"
          />
        </FormGroup>
      </div>

      <div className="filter-section">
        <Typography variant="h6">Rating</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="5"
                checked={filters.rating.includes("5")}
                onChange={(e) => handleCheckboxChange(e, "rating")}
              />
            }
            label="★★★★★"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="4"
                checked={filters.rating.includes("4")}
                onChange={(e) => handleCheckboxChange(e, "rating")}
              />
            }
            label="★★★★☆"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="3"
                checked={filters.rating.includes("3")}
                onChange={(e) => handleCheckboxChange(e, "rating")}
              />
            }
            label="★★★☆☆"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="2"
                checked={filters.rating.includes("2")}
                onChange={(e) => handleCheckboxChange(e, "rating")}
              />
            }
            label="★★☆☆☆"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="1"
                checked={filters.rating.includes("1")}
                onChange={(e) => handleCheckboxChange(e, "rating")}
              />
            }
            label="★☆☆☆☆"
          />
        </FormGroup>
      </div>

      <div className="filter-section">
        <Typography variant="h6">Categories</Typography>
        <FormGroup>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  name={category}
                  checked={filters.categories.includes(category)}
                  onChange={(e) => handleCheckboxChange(e, "categories")}
                />
              }
              label={category}
            />
          ))}
        </FormGroup>
      </div>

      <div className="filter-section">
        <Typography variant="h6">Price</Typography>
        <RadioGroup
          name="priceRange"
          value={filters.priceRange}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="0-150"
            control={<Radio />}
            label="$0 - $150"
          />
          <FormControlLabel
            value="150-350"
            control={<Radio />}
            label="$150 - $350"
          />
          <FormControlLabel
            value="350-500"
            control={<Radio />}
            label="$350 - $500"
          />
          <FormControlLabel
            value="550-800"
            control={<Radio />}
            label="$550 - $800"
          />
          <FormControlLabel value="800+" control={<Radio />} label="$800+" />
        </RadioGroup>
      </div>
    </div>
  );
};

export default Sidebar;
