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
export const fetchProducts = async ({
  skip = 0,
  limit = 10,
  sortBy = "id",
  order = "asc",
  fields = "title,price,images,description,discountPercentage,rating",
  filters = {},
}) => {
  try {
    const filterParams = new URLSearchParams({
      limit,
      skip,
      sortBy,
      order,
      select: fields,
    });
    for (const key in filters) {
      if (filters[key].length) filterParams.append(key, filters[key].join(","));
    }

    const response = await fetch(
      `https://dummyjson.com/products?${filterParams.toString()}`
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "An error occurred while fetching data");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [], total: 0 };
  }
};
