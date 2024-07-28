import { useNavigate } from "react-router-dom";

export const useUrlUpdater = () => {
  const navigate = useNavigate();

  const updateUrl = (newQuery: string) => {


    navigate(`${newQuery}`, { replace: true });
  };

  return { updateUrl };
};
