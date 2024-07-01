import React from "react";

const BrandFilter = ({ onChange }) => {
  const brands = ["Casio", "Apple", "Sony", "Nike", "Vke", "Glossiness"]; // Example brands
  return (
    <div>
      <h3>Product Brand</h3>
      {brands.map((brand) => (
        <div key={brand}>
          <label>
            <input
              type="checkbox"
              value={brand}
              onChange={(e) => onChange(e.target.value)}
            />
            {brand}
          </label>
        </div>
      ))}
    </div>
  );
};

export default BrandFilter;
