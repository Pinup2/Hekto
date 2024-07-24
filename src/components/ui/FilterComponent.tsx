import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useListerContext } from "../../context/lister";
import useUrlParams from "../../hooks/useUrlParams"; // Adjust the path as needed

interface FilterComponentProps {
  title: string;
  category: string;
  options: string[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  title,
  category,
  options,
}) => {
  const { setQuery } = useListerContext();
  const { updateUrl } = useUrlParams();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((prevQuery) => {
      const params = new URLSearchParams(prevQuery);
      const selectedRanges = params.getAll(category);

      if (event.target.checked) {
        selectedRanges.push(event.target.name);
      } else {
        const index = selectedRanges.indexOf(event.target.name);
        if (index > -1) {
          selectedRanges.splice(index, 1);
        }
      }

      params.delete(category);
      selectedRanges.forEach((value) => params.append(category, value));

      // return params.toString();
      const newQuery = params.toString();
      updateUrl(newQuery);
      return newQuery;
    });
  };

  return (
    <div className="filter-section">
      <Typography variant="h6">{title}</Typography>
      <FormGroup>
        {options?.map((option) => (
          <FormControlLabel
            key={option}
            control={<Checkbox name={option} onChange={handleCheckboxChange} />}
            label={option}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default FilterComponent;
