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
  const handlePriceRangeChange = (e) => {
    const newRange = e.target.value.replace("$", "").replace(" ", "");
    setFilters((prevFilters) => ({ ...prevFilters, priceRange: newRange }));
  };

  // Example function that updates the price range
  const updatePriceRange = (newRange) => {
    console.log("Attempting to update priceRange to:", newRange);

    setFilters((prevFilters) => ({ ...prevFilters, priceRange: newRange }));
  };

  // Add this in your function that handles the update
  console.log("Updated Filters:", filters);

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
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Casio"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Apple"
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Apple"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Sony"
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Sony"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Nike"
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Nike"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Vke"
                onChange={(e) => handleCheckboxChange(e, "brand")}
              />
            }
            label="Vke"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Glossiness"
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
                onChange={(e) => handleCheckboxChange(e, "discount")}
              />
            }
            label="20% Cashback"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="5% Cashback Offer"
                onChange={(e) => handleCheckboxChange(e, "discount")}
              />
            }
            label="5% Cashback Offer"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="25% Discount Offer"
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
                onChange={(e) => handleCheckboxChange(e, "rating")}
              />
            }
            label="★★★★★"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="4"
                onChange={(e) => handleCheckboxChange(e, "rating")}
              />
            }
            label="★★★★☆"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="3"
                onChange={(e) => handleCheckboxChange(e, "rating")}
              />
            }
            label="★★★☆☆"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="2"
                onChange={(e) => handleCheckboxChange(e, "rating")}
              />
            }
            label="★★☆☆☆"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="1"
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
        <RadioGroup name="priceRange" onChange={handleRadioChange}>
          <FormControlLabel
            value="$0 - $150"
            control={<Radio />}
            label="$0 - $150"
          />
          <FormControlLabel
            value="$150 - $350"
            control={<Radio />}
            label="$150 - $350"
          />
          <FormControlLabel
            value="$350 - $500"
            control={<Radio />}
            label="$350 - $500"
          />
          <FormControlLabel
            value="$550 - $800"
            control={<Radio />}
            label="$550 - $800"
          />
          <FormControlLabel value="$800+" control={<Radio />} label="$800+" />
        </RadioGroup>
      </div>
    </div>
  );
};

export default Sidebar;
