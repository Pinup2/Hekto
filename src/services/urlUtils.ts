import { useNavigate } from "react-router-dom";

export const useUrlUpdater = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //  navigate(`${newQuery}`, { replace: true });
  //  call of utility functions stirng-> object , object, object-> string 

  // }
  const updateUrl = (newQuery: string) => {


    navigate(`${newQuery}`, { replace: true });
  };

  return { updateUrl };
};
