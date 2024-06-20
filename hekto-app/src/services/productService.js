import axios from "axios";

const baseUrl = "https://dummyjson.com/products";

// Fetch all products
export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw to handle it in the calling component
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${baseUrl}/category/${category}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error; // Re-throw to handle it in the calling component
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
