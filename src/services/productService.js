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

// services/productService.js
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
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const totalCount = response.headers.get("X-Total-Count");

    let data = await response.json();

    console.log("Filters:", filters);

    // Manual Filtering
    if (filters.brand && filters.brand.length > 0) {
      data = data.filter((product) => filters.brand.includes(product.brand));
    }

    if (filters.priceRange && filters.priceRange.length > 0) {
      data = data.filter((product) => {
        return filters.priceRange.some((range) => {
          if (range === "800+") {
            return product.price >= 800;
          } else {
            const [minPrice, maxPrice] = range.split("-").map(Number);
            return product.price >= minPrice && product.price <= maxPrice;
          }
        });
      });
    }

    if (filters.discount && filters.discount.length > 0) {
      data = data.filter((product) => {
        const discountString = `${product.discountPercentage}% Cashback`;
        return filters.discount.includes(discountString);
      });
    }

    if (filters.rating && filters.rating.length > 0) {
      data = data.filter((product) =>
        filters.rating.includes(String(Math.floor(product.rating)))
      );
    }

    if (filters.categories && filters.categories.length > 0) {
      data = data.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Manual Sorting
    if (sortBy && order) {
      data = data.sort((a, b) =>
        order === "asc" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
      );
    }

    return { products: data, total: data.length };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [], total: 0 };
  }
};
