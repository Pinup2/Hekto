import { useNavigate } from "react-router-dom";

const useUrlParams = () => {
  const navigate = useNavigate();

  const updateUrl = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (newFilters[key].length > 0) {
        newFilters[key].forEach((value) => {
          params.append(key, value);
        });
      }
    });

    navigate(`?${params.toString()}`);
  };

  return { updateUrl };
};

export default useUrlParams;
