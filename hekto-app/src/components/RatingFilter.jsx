import React from "react";

const RatingFilter = ({ onChange }) => {
  const ratings = [1, 2, 3, 4, 5]; // Ratings as stars
  return (
    <div>
      <h3>Rating</h3>
      {ratings.map((rating) => (
        <div key={rating}>
          <label>
            {[...Array(rating)].map((_, index) => (
              <span key={index} style={{ color: "gold" }}>
                ★
              </span>
            ))}
            <input
              type="radio"
              name="rating"
              value={rating}
              onChange={() => onChange(rating)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;
