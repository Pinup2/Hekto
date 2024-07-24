import { useNavigate, useLocation } from "react-router-dom";
import { useCallback, useEffect, useRef } from "react";
import { useListerContext } from "../context/lister"; // Adjust the path as needed

type Filters = {
  [key: string]: string;
};

const useUrlParams = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { query, setQuery } = useListerContext();
  const initialRender = useRef(true); // Track initial render

  // Updating the URL query params without reloading the page
  const updateUrl = useCallback(
    (newQuery: string) => {
      console.log("useUrlParams - Updating URL with query:", newQuery); // Log the URL update

      navigate(`${newQuery}`, { replace: true });
    },
    [navigate]
  );

  console.log("text");
  const getFiltersFromUrl = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const filtersFromUrl: Filters = {};
    params.forEach((value, key) => {
      console.log("key", key, "value:", value);
      if (
        key !== "_page" &&
        key !== "_per_page" &&
        key !== "_sort" &&
        key !== "_order"
      ) {
        filtersFromUrl[key] = value;
      }
    });
    const newPage = params.get("_page") || "1";
    const newPerPage = params.get("_per_page") || "10";
    const newSort = params.get("_sort") || "price";
    const newOrder = params.get("_order") || "asc";

    return {
      filters: filtersFromUrl,
      page: newPage,
      perPage: newPerPage,
      sort: newSort,
      order: newOrder,
    };
  }, [location.search]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      const { filters, page, perPage, sort, order } = getFiltersFromUrl();
      const queryString = new URLSearchParams(filters).toString();
      const newQuery = `_page=${page}&_per_page=${perPage}&_sort=${sort}&_order=${order}&${queryString}`;
      console.log("useUrlParams - Initial setting query:", newQuery); // Log the initial query setting
      setQuery(newQuery);
      updateUrl(newQuery);
    }
  }, [location.search, getFiltersFromUrl, setQuery, updateUrl]);

  const handleFilterChange = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(query);

      // Ensure _per_page or is handled correctly
      if (key === "_per_page") {
        params.delete("_per_page");
      }

      if (params.get(key) === value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      const newQuery = params.toString();

      setQuery(newQuery);
      updateUrl(newQuery);
    },
    [query, setQuery, updateUrl]
  );

  return { handleFilterChange, query, getFiltersFromUrl, updateUrl };
};

export default useUrlParams;
