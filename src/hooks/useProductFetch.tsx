import { useCallback, useState } from "react";
import { useListerContext } from "../context/lister";

const useProductFetch = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { query } = useListerContext();

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3000/products?${query}`);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();

      console.log("Products received:", data);

      setProducts(data);
      setTotalProducts(data.total);
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }, [query]);

  return { products, totalProducts, loading, error, fetchProducts };
};

export default useProductFetch;
