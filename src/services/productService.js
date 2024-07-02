import axios from "axios";

const baseUrl = "https://dummyjson.com/products";

// Fetch all products
export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${baseUrl}/category/${category}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};
// Fetch a single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};
// Fetch products based on filters
// export const fetchProducts = async ({
//   skip = 0,
//   limit = 10,
//   sortBy = "id", // default sort, note: might need manual sorting if JSON Server doesn't support
//   order = "asc", // default order, note: might need manual sorting if JSON Server doesn't support
//   fields = "title,price,images", // fields selection not supported by JSON Server, handled in code if necessary
// }) => {
//   try {
//     // Base URL for JSON Server
//     const baseURL = `http://localhost:3000/products`;

//     const response = await fetch(`${baseURL}?_start=${skip}&_limit=${limit}`);
//     let data = await response.json();

//     // If JSON Server doesn't support sorting, you would need to implement it manually:
//     if (sortBy && order) {
//       data = data.sort((a, b) => {
//         if (order === "asc") {
//           return a[sortBy] > b[sortBy] ? 1 : -1;
//         } else {
//           return a[sortBy] < b[sortBy] ? 1 : -1;
//         }
//       });
//     }

//     // If fields filtering is necessary, filter the fields manually:
//     if (fields) {
//       const fieldsArray = fields.split(",");
//       data = data.map((item) => {
//         const filteredItem = {};
//         fieldsArray.forEach((field) => {
//           filteredItem[field] = item[field];
//         });
//         return filteredItem;
//       });
//     }

//     if (response.ok) {
//       return { products: data, total: data.length }; // Adjust according to your total count handling
//     } else {
//       throw new Error(data.message || "Failed to fetch data");
//     }
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return { products: [], total: 0 }; // Safe fallback
//   }
// };
export const fetchProducts = async ({
  skip = 0,
  limit = 10,
  sortBy = "id",
  order = "asc",
  filters = {},
}) => {
  try {
    const baseURL = `http://localhost:3000/products`;
    const response = await fetch(`${baseURL}?_start=${skip}&_limit=${limit}`);
    let data = await response.json();

    // Manual Sorting
    if (sortBy && order) {
      data = data.sort((a, b) =>
        order === "asc" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
      );
    }

    // Manual Filtering
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split("-").map(Number);
      console.log("Filtering with price range:", minPrice, maxPrice);
      if (!isNaN(minPrice) && !isNaN(maxPrice)) {
        data = data.filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
      } else {
        console.error("Invalid price range:", filters.priceRange);
      }
    }

    if (response.ok) {
      return { products: data, total: data.length };
    } else {
      throw new Error(data.message || "Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [], total: 0 };
  }
};
