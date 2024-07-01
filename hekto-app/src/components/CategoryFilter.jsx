import React from "react";

const CategoryFilter = ({ onChange }) => {
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
    <div>
      <h3>Categories</h3>
      {categories.map((category) => (
        <div key={category}>
          <label>
            <input
              type="checkbox"
              value={category}
              onChange={(e) => onChange(e.target.value)}
            />
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
