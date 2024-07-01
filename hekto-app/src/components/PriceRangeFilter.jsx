import React from "react";

const PriceRangeFilter = ({ onChange }) => {
  const priceRanges = [
    "0 - 150",
    "150 - 350",
    "350 - 500",
    "550 - 800",
    "800+",
  ];
  return (
    <div>
      <h3>Price</h3>
      {priceRanges.map((range) => (
        <div key={range}>
          <label>
            <input
              type="radio"
              name="priceRange"
              value={range}
              onChange={() => onChange(range)}
            />
            {range}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PriceRangeFilter;
