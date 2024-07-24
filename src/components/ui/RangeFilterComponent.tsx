import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useListerContext } from "../../context/lister.js";
import Rating from "@mui/material/Rating";
import useUrlParams from "../../hooks/useUrlParams.js";

interface Range {
  from: number | string;
  to: number | string;
  name: string;
}

interface RangeFilterComponentProps {
  title: string;
  values: Range[];
  showStars?: boolean;
}

const RangeFilterComponent = ({
  title,
  values,
  showStars,
}: RangeFilterComponentProps) => {
  const { setQuery, query } = useListerContext();
  const { updateUrl } = useUrlParams();

  // const {fetchProducts} =  useProductFetch();
  const handleCheckboxChange = (to: string, from: string) => {
    const segment = `&${title.toLowerCase()}_gte=${from}&${title.toLowerCase()}_lte=${to}`;
    //   if (query.includes(segment)) {
    //     setQuery((prevValue) => prevValue.replace(segment, ""));
    //   } else setQuery((prevValue) => prevValue + segment);
    // };
    setQuery((prevValue) => {
      let newQuery;
      if (prevValue.includes(segment)) {
        newQuery = prevValue.replace(segment, "");
      } else {
        newQuery = prevValue + segment;
      }
      updateUrl(newQuery);
      return newQuery;
    });
  };
  return (
    <div className="filter-section">
      <Typography variant="h6">{title}</Typography>
      <FormGroup>
        {values.map(({ name, to, from }) => {
          return (
            <FormControlLabel
              key={name}
              control={
                showStars ? (
                  <Checkbox
                    name={name}
                    onChange={() =>
                      handleCheckboxChange(to.toString(), from.toString())
                    }
                    icon={
                      <Rating
                        name="read-only"
                        value={parseInt(name)}
                        readOnly
                      />
                    }
                    checkedIcon={
                      <Rating
                        name="read-only"
                        value={parseInt(name)}
                        readOnly
                      />
                    }
                  />
                ) : (
                  <Checkbox
                    onChange={() =>
                      handleCheckboxChange(to.toString(), from.toString())
                    }
                  />
                )
              }
              label={showStars ? "" : name}
            />
          );
        })}
      </FormGroup>
    </div>
  );
};

export default RangeFilterComponent;
