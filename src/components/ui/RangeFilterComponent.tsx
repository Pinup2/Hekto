import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useListerContext } from "../../context/lister.js";
import Rating from "@mui/material/Rating";
interface Range {
  from: string;
  to: string;
  name: string;
}

interface RangeFilterComponentProps {
  title: string;
  values: Range[];
  showStars?: boolean;
  onFilterChange: (segment: string) => void;
}

const RangeFilterComponent = ({
  title,
  values,
  showStars,
}: RangeFilterComponentProps) => {
  const { setQuery, query, updateUrl } = useListerContext();
  

  const handleCheckboxChange = (to: string, from: string) => {
    const segment = `&${title.toLowerCase()}_gte=${from}&${title.toLowerCase()}_lte=${to}`;
    console.log('Checkbox change:', { to, from, segment });

  

    setQuery((prevValue) => {
      let newQuery;
      if (prevValue.includes(segment)) {
        newQuery = prevValue.replace(segment, "");
      } else {
        newQuery = prevValue + segment;


      }
      console.log('New query:', newQuery);

      updateUrl(newQuery); // called with the latest query
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
                    onChange={() => handleCheckboxChange(to, from)}
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
                  <Checkbox onChange={() => handleCheckboxChange(to, from)} />
                )
              }
              label={
                showStars ? (
                  <Checkbox
                    name={name}
                    onChange={() => handleCheckboxChange(to, from)}
                  />
                ) : (
                  name
                )
              }
            />
          );
        })}
      </FormGroup>
    </div>
  );
};

export default RangeFilterComponent;
