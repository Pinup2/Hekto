
import {useState, useEffect, useMemo} from "react";

export default function useFetchProducts({ productsPerPage=10, currentPage=1, filters = {} }) {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [error, setError] = useState(null);
  const filtersString = useMemo(()=> (JSON.stringify(filters)), [filters]);

  useEffect(() => {
    async function fetchProducts() {

      const params = new URLSearchParams();
      params.set('_page', currentPage);
      params.set('_limit', productsPerPage);

      Object.keys(filters).forEach((key) => {
        if (key === 'priceRange') {
          filters[key].forEach((range) => {
            const [min, max] = range.split('-').map(Number);
            if (min !== undefined) params.set('price_gte', min);
            if (max !== undefined && max !== Infinity) params.set('price_lte', max);
          });
        } else if (key === 'rating') {


          console.log( "Filterkeys", filters[key]);


            filters[key].forEach((rating) => {
              const minRating = Number(rating) - 0.5 ;
              const maxRating = Number(rating) + 0.5 ;

              console.log("minRating",minRating);
              params.append('rating_gte', minRating);
              params.append('rating_lte', maxRating);
              console.log("maxRating",maxRating);

            });
          } else if (key === 'discount') {
            filters[key].forEach((discount) => {
              params.append('discount_gte', Number(discount));
            });
        } else {
          filters[key].forEach((value) => {
            params.append(key, value);
          });
        }
      });

      try {
        const response = await fetch(`http://localhost:3000/products?${params.toString()}`);

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
  }, [productsPerPage, currentPage, filtersString]);

  return { products, totalProducts,  error };
}

