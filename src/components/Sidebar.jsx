import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
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
      priceRange: event.target.value.replace("$", "").replace(" ", ""),
    }));
  };

  console.log("Updated Filters:", filters);

  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
  ];

  return (
    <div className="sidebar">
      <div className="filter-section">
        <Typography variant="h6">Product Brand</Typography>
        <FormGroup>
          {[
            "Essence",
            "Glamour Beauty",
            "Velvet Touch",
            "Chic Cosmetics",
            "Nail Couture",
            "Calvin Klein",
            "Chanel",
            "Dior",
            "Dolce & Gabbana",
            "Gucci",
            "Annibale Colombo",
            "Furniture Co.",
            "Knoll",
            "Bath Trends",
          ].map((brand) => (
            <FormControlLabel
              key={brand}
              control={
                <Checkbox
                  name={brand}
                  onChange={(e) => handleCheckboxChange(e, "brand")}
                />
              }
              label={brand}
            />
          ))}
        </FormGroup>
      </div>

      <div className="filter-section">
        <Typography variant="h6">Discount Offer</Typography>
        <FormGroup>
          {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
            (discount) => (
              <FormControlLabel
                key={discount}
                control={
                  <Checkbox
                    name={discount}
                    onChange={(e) => handleCheckboxChange(e, "discount")}
                  />
                }
                label={discount}
              />
            )
          )}
        </FormGroup>
      </div>

      <div className="filter-section">
        <Typography variant="h6">Rating</Typography>
        <FormGroup>
          {["5", "4", "3", "2", "1"].map((rating) => (
            <FormControlLabel
              key={rating}
              control={
                <Checkbox
                  name={rating}
                  onChange={(e) => handleCheckboxChange(e, "rating")}
                />
              }
              label={`${"★".repeat(rating)}${"☆".repeat(5 - rating)}`}
            />
          ))}
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
        <FormGroup>
          {["0-150", "150-350", "350-500", "550-800", "800+"].map((range) => (
            <FormControlLabel
              key={range}
              control={
                <Checkbox
                  name={range}
                  onChange={(e) => handleCheckboxChange(e, "priceRange")}
                />
              }
              label={`$${range.replace("-", " - $")}`}
            />
          ))}
        </FormGroup>
      </div>
    </div>
  );
};

export default Sidebar;
