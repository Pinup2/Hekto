import React from "react";

const OfferFilter = ({ onChange }) => {
  const offers = ["20% Cashback", "5% Cashback Offer", "25% Discount Offer"];
  return (
    <div>
      <h3>Discount Offer</h3>
      {offers.map((offer) => (
        <div key={offer}>
          <label>
            <input
              type="checkbox"
              value={offer}
              onChange={(e) => onChange(e.target.value)}
            />
            {offer}
          </label>
        </div>
      ))}
    </div>
  );
};

export default OfferFilter;
