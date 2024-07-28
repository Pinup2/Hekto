import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useListerContext } from "../../context/lister";
import { useUrlUpdater } from "../../services/urlUtils";

interface FilterComponentProps {
  title: string;
  category: string;
  options: string[];
  onFilterChange: (segment: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  title,
  category,
  options,
}) => {
  const { setQuery } = useListerContext();
  const { updateUrl } = useUrlUpdater();

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

      let newQuery = params.toString();
      if (!newQuery.startsWith('?') && newQuery) {
        newQuery = `?${newQuery}`;
      }
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
