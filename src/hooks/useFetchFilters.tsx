import { useEffect, useState } from "react";

type FilterType = {
  values: string[];
  name: string;
  isRange: boolean;
};

type RangeType = {
  values: Array<{ from: string; to: string }>;
  name: string;
  isRange: boolean;
};

interface Filters {
  brand: FilterType;
  category: FilterType;
  price: RangeType;
  rating: RangeType;
}

export const useFetchFilters = () => {
  const [filters, setFilters] = useState<Filters>();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchFilters = async () => {
      const url = `http://localhost:3000/productFilters`;
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setFilters(data);
      } catch (error: any) {
        setError(error.toString());
      } finally {
      }
    };

    fetchFilters();
  }, []);

  return { filters };
};
