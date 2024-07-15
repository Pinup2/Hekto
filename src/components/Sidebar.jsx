// import React from "react";
// import {
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Typography,
// } from "@mui/material";

// const Sidebar = ({ filters, setFilters }) => {
//   // const handleCheckboxChange = (event, category) => {
//   //   setFilters((prevFilters) => ({
//   //     ...prevFilters,
//   //     [category]: event.target.checked
//   //       ? [...prevFilters[category], event.target.name]
//   //       : prevFilters[category].filter((item) => item !== event.target.name),
//   //   }));
//   // };
//   const handleCheckboxChange = (event, category) => {
//     setFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters }; // Create a shallow copy of the filters
//       const currentCategoryValues = updatedFilters[category] || []; // Get current category or initialize if not present
//       console.log(
//         "Before setting filters:",
//         prevFilters,
//         "New Value:",
//         event.target.name
//       );
//       if (event.target.checked) {
//         // Add the new value if checked
//         if (!currentCategoryValues.includes(event.target.name)) {
//           updatedFilters[category] = [
//             ...currentCategoryValues,
//             event.target.name,
//           ];
//         }
//       } else {
//         // Remove the value if unchecked
//         updatedFilters[category] = currentCategoryValues.filter(
//           (item) => item !== event.target.name
//         );
//       }

//       // console.log("Updated Filters:", updatedFilters); // Log to see the updated structure
//       return updatedFilters; // Return the updated filters object
//     });
//   };

//   const handleRadioChange = (event) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       priceRange: event.target.value.replace("$", "").replace(" ", ""),
//     }));
//   };

//   // console.log("Updated Filters:", filters);

//   const categories = [
//     "beauty",
//     "fragrances",
//     "furniture",
//     "groceries",
//     "home-decoration",
//     "kitchen-accessories",
//   ];

//   return (
//     <div className="sidebar">
//       <div className="filter-section">
//         <Typography variant="h6">Product Brand</Typography>
//         <FormGroup>
//           {[
//             "Essence",
//             "Glamour Beauty",
//             "Velvet Touch",
//             "Chic Cosmetics",
//             "Nail Couture",
//             "Calvin Klein",
//             "Chanel",
//             "Dior",
//             "Dolce & Gabbana",
//             "Gucci",
//             "Annibale Colombo",
//             "Furniture Co.",
//             "Knoll",
//             "Bath Trends",
//           ].map((brand) => (
//             <FormControlLabel
//               key={brand}
//               control={
//                 <Checkbox
//                   name={brand}
//                   onChange={(e) => handleCheckboxChange(e, "brand")}
//                 />
//               }
//               label={brand}
//             />
//           ))}
//         </FormGroup>
//       </div>

//       <div className="filter-section">
//         <Typography variant="h6">Discount Offer</Typography>
//         <FormGroup>
//           {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
//             (discount) => (
//               <FormControlLabel
//                 key={discount}
//                 control={
//                   <Checkbox
//                     name={discount}
//                     onChange={(e) => handleCheckboxChange(e, "discount")}
//                   />
//                 }
//                 label={discount}
//               />
//             )
//           )}
//         </FormGroup>
//       </div>

//       <div className="filter-section">
//         <Typography variant="h6">Rating</Typography>
//         <FormGroup>
//           {["5", "4", "3", "2", "1"].map((rating) => (
//             <FormControlLabel
//               key={rating}
//               control={
//                 <Checkbox
//                   name={rating}
//                   onChange={(e) => handleCheckboxChange(e, "rating")}
//                 />
//               }
//               label={`${"★".repeat(rating)}${"☆".repeat(5 - rating)}`}
//             />
//           ))}
//         </FormGroup>
//       </div>

//       <div className="filter-section">
//         <Typography variant="h6">Categories</Typography>
//         <FormGroup>
//           {categories.map((category) => (
//             <FormControlLabel
//               key={category}
//               control={
//                 <Checkbox
//                   name={category}
//                   onChange={(e) => handleCheckboxChange(e, "categories")}
//                 />
//               }
//               label={category}
//             />
//           ))}
//         </FormGroup>
//       </div>

//       <div className="filter-section">
//         <Typography variant="h6">Price</Typography>
//         <FormGroup>
//           {["0-150", "150-350", "350-500", "550-800", "800+"].map((range) => (
//             <FormControlLabel
//               key={range}
//               control={
//                 <Checkbox
//                   name={range}
//                   onChange={(e) => handleCheckboxChange(e, "priceRange")}
//                 />
//               }
//               label={`$${range.replace("-", " - $")}`}
//             />
//           ))}
//         </FormGroup>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// // const categoryQuery = `category=${category}`

// // const priceQuery = `proice={}`

// // `${}`
import React, { useState, useEffect } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const Sidebar = ({ setFilters }) => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch filter data from the server
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        const brands = [...new Set(data.map((product) => product.brand))]; // Assuming brand is a direct string
        setBrands(brands.map((brand) => ({ name: brand })));
        const categories = [
          ...new Set(data.flatMap((product) => product.category)),
        ]; // If multiple categories per product
        setCategories(categories.map((category) => ({ name: category })));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchProducts();
  }, []);

  const handleCheckboxChange = (event, category) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: event.target.checked
        ? [...(prevFilters[category] || []), event.target.name]
        : (prevFilters[category] || []).filter(
            (item) => item !== event.target.name
          ),
    }));
  };

  return (
    <div className="sidebar">
      <div className="filter-section">
        <Typography variant="h6">Product Brand</Typography>
        <FormGroup>
          {brands.map((brand) => (
            <FormControlLabel
              key={brand.id}
              control={
                <Checkbox
                  name={brand.id}
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
              key={category.id}
              control={
                <Checkbox
                  name={category.id}
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

export default Sidebar;
