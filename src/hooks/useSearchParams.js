import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useUrlParams(defaultParams) {
  const location = useLocation();
  const history = useNavigate();
  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newParams = { ...defaultParams };

    for (const key of Object.keys(defaultParams)) {
      const value = searchParams.get(key);
      if (value) {
        newParams[key] = value.includes(",") ? value.split(",") : value;
      }
    }

    setParams(newParams);
  }, [location.search, defaultParams]);

  const updateParams = (newParams) => {
    const searchParams = new URLSearchParams(location.search);

    Object.keys(newParams).forEach((key) => {
      if (newParams[key]) {
        searchParams.set(
          key,
          Array.isArray(newParams[key])
            ? newParams[key].join(",")
            : newParams[key]
        );
      } else {
        searchParams.delete(key);
      }
    });

    history.push({ search: searchParams.toString() });
  };

  return [params, updateParams];
}

export default useUrlParams;
