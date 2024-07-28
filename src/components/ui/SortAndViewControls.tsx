import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  IconButton,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import LayoutViewControls from "../ui/LayoutCardControls";

interface SortAndViewControlsProps {
  perPage: number;
  sortOrder: string;
  onPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  // onViewChange: (viewType: string) => void;
}

const SortAndViewControls: React.FC<SortAndViewControlsProps> = ({
  perPage,
  sortOrder,
  onPerPageChange,
  onSortChange,
  // onViewChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <FormControl variant="outlined" style={{ minWidth: 120 }}>
        <InputLabel id="per-page-label">Per Page</InputLabel>
        <Select
          labelId="per-page-label"
          id="per-page"
          value={perPage}
          onChange={onPerPageChange}
          label="Per Page"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" style={{ minWidth: 180 }}>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by"
          value={sortOrder}
          onChange={onSortChange}
          label="Sort By"
        >
          <MenuItem value="price">Price: Low → High</MenuItem>
          <MenuItem value="-price">Price: High → Low</MenuItem>
        </Select>
      </FormControl>

      <LayoutViewControls />
    </div>
  );
};
//   );
// };

export default SortAndViewControls;
