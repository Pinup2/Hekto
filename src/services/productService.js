// // import axios from "axios";

// const baseUrl = "https://dummyjson.com/products";

// // Fetch all products
// export const fetchAllProducts = async () => {
//   try {
//     const response = await axios.get(baseUrl);
//     return response.data.products;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// };

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${baseUrl}/category/${category}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};

// services/productService.js
// export const fetchProducts = async ({
//   page = 1,
//   limit = 10,
//   sortBy = "id",
//   order = "asc",
//   filters = {},
// }) => {
//   try {
//     const baseURL = `http://localhost:3000/products`;
//     const totalURL = `http://localhost:3000/total`;
//     const totalResponse = await fetch(totalURL);
//     if (!totalResponse.ok) {
//       throw new Error(`HTTP error! status: ${totalResponse.status}`);
//     }
//     const totalProducts = await totalResponse.json();
//     console.log("Fetched Total Products:", totalProducts); // Adjust based on actual response structure

//     const total = totalProducts.total; // Assuming the endpoint returns an object with a total key
//     console.log("Total Response Status:", totalResponse.status);
//     console.log("Total Products Data:", totalProducts);
//     console.log("Total Products Count:", totalProducts.total); // Adjust key based on your actual data structure

//     const skip = (page - 1) * limit;

//     const response = await fetch(`${baseURL}?_start=${skip}&_limit=${limit}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     let data = await response.json();

//     // console.log;

//     // Manual Filtering
//     if (filters.brand && filters.brand.length > 0) {
//       data = data.filter((product) => filters.brand.includes(product.brand));
//     }

//     if (filters.priceRange && filters.priceRange.length > 0) {
//       data = data.filter((product) => {
//         return filters.priceRange.some((range) => {
//           if (range === "800+") {
//             return product.price >= 800;
//           } else {
//             const [minPrice, maxPrice] = range.split("-").map(Number);
//             return product.price >= minPrice && product.price <= maxPrice;
//           }
//         });
//       });
//     }

//     if (filters.discount && filters.discount.length > 0) {
//       data = data.filter((product) => {
//         const discountString = `${product.discountPercentage}% Cashback`;
//         return filters.discount.includes(discountString);
//       });
//     }

//     if (filters.rating && filters.rating.length > 0) {
//       data = data.filter((product) =>
//         filters.rating.includes(String(Math.floor(product.rating)))
//       );
//     }

//     if (filters.categories && filters.categories.length > 0) {
//       data = data.filter((product) =>
//         filters.categories.includes(product.category)
//       );
//     }

//     // Manual Sorting
//     if (sortBy && order) {
//       data = data.sort((a, b) =>
//         order === "asc" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
//       );
//     }

//     return { products: data, total: data.length };
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return { products: [], total: 0 };
//   }
// };

//works
// export const fetchProducts = async ({
//   page = 1,
//   limit = 10,
//   sortBy = "id",
//   order = "asc",
//   filters = {},
// }) => {
//   try {
//     const params = new URLSearchParams({
//       _page: page,
//       _limit: limit,
//       _sort: sortBy,
//       _order: order,
//     });

//     // Adding filters to the query parameters
//     if (filters.brand) {
//       params.append("brand", filters.brand);
//     }
//     if (filters.priceRange) {
//       if (filters.priceRange.min !== undefined) {
//         params.append("price_gte", filters.priceRange.min);
//       }
//       if (filters.priceRange.max !== undefined) {
//         params.append("price_lte", filters.priceRange.max);
//       }
//     }
//     if (filters.discount) {
//       params.append("discountPercentage", filters.discount);
//     }
//     if (filters.rating) {
//       params.append("rating_gte", filters.rating); // Assuming you want products with rating >= selected rating
//     }
//     if (filters.categories) {
//       filters.categories.forEach((category) => {
//         params.append("category", category);
//       });
//     }

//     const baseURL = `http://localhost:3000/products`;
//     const response = await fetch(`${baseURL}?${params.toString()}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();

//     // Assuming JSON Server handles total count as well
//     const totalResponse = await fetch("http://localhost:3000/total");
//     const total = await totalResponse.json();

//     return { products: data, total: total.total };
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return { products: [], total: 0 };
//   }
// };
//function that will return filters (as endpoint)

const defaultQuery = "_page=1&_limit=10";
export const fetchProducts = async ({ query }) => {
  const currentPage = 1;
  const productsPerPage = 10;
  try {
    const response = await fetch(
      `http://localhost:3000/products?${defaultQuery}${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
  }
};
