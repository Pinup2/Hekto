import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// export default function useFetchProducts({ productsPerPage, currentPage, query =  }) {
export default function useFetchProducts({
  productsPerPage,
  currentPage,
  filters = {},
}) {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching new page data for:", currentPage);

    async function fetchProducts() {
      setLoading(true);
      setError(null);
      // убрать этто отсюда и перенести in query
      const params = {
        _page: currentPage + 1,
        _limit: productsPerPage,
        ...filters,
      };
      const queryparams = new URLSearchParams(params).toString();
      // URL search params
      try {
        const response = await fetch(
          `http://localhost:3000/products?${queryparams}`
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProducts(data);
        //data.products
        const total = response.headers.get("X-Total-Count");
        setTotalProducts(Number(total));
        //data.total
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [productsPerPage, currentPage, filters]);
  console.log("Fetched products:", products); // Check the fetched products
  console.log("Total products:", totalProducts);
  return { products, totalProducts, loading, error };
}
