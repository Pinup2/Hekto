import { useCallback, useState } from "react";
import { useListerContext } from "../context/lister";

const useProductFetch = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { query } = useListerContext();
  //states that i can return in this hooks response

  const [first, setFirst] = useState(1);
  const [last, setLast] = useState(0);
  const [next, setNext] = useState(0);
  const [pages, setPages] = useState(0);
  const [prev, setPrev] = useState(0);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3000/products?${query}`);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const { data, items, first, last, next, pages, prev } =
        await response.json();

      console.log("Products received:", data);

      setProducts(data);
      setTotalProducts(items);
      setFirst(first);
      setLast(last);
      setNext(next);
      setPages(pages);
      setPrev(prev);
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }, [query]);

  return {
    products,
    totalProducts,
    loading,
    error,
    fetchProducts,
    first,
    last,
    next,
    pages,
    prev,
  };
};

export default useProductFetch;
