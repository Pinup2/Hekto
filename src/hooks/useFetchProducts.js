
import { useState, useEffect } from "react";

export default function useFetchProducts({ productsPerPage=10, currentPage=1, filters = {} }) {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setError(null);

      const params = {
        _page: currentPage,
        _limit: productsPerPage,
        ...filters,
      };

      const queryparams = new URLSearchParams(params).toString();

      try {
        const response = await fetch(`http://localhost:3000/products?${queryparams}`);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setProducts(data);

        const total = response.headers.get("X-Total-Count");
        setTotalProducts(Number(total));
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError(error);
      }
    }

    fetchProducts();
  }, [productsPerPage, currentPage, JSON.stringify(filters)]);

  return { products, totalProducts,  error };
}

