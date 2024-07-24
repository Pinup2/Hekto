import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  IconButton,
  Theme,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useListerContext } from "../../context/lister";

const styles = {
  formControl: {
    margin: (theme: Theme) => theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: (theme: Theme) => theme.spacing(2),
  },
};

const LayoutViewControls = () => {
  const { viewType, setViewType } = useListerContext();
  console.log({ viewType });
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={1}
    >
      {/* <FormControl variant="outlined" sx={styles.formControl}>
        <InputLabel>Per Page</InputLabel>
        <Select
          value={productsPerPage}
          onChange={(e) => setProductsPerPage(e.target.value)}
          label="Per Page"
        >
          {[10, 20, 50, 100].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={styles.formControl}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="priceHighLow">Price: High &gt; Low</MenuItem>
          <MenuItem value="priceLowHigh">Price: Low &gt; High</MenuItem>
        </Select>
      </FormControl> */}

      <Box>
        <IconButton
          onClick={() => {
            // console.log("Switching to grid view");
            setViewType("grid");
          }}
          color={viewType === "grid" ? "primary" : "default"}
        >
          <GridViewIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            // console.log("Switching to list view");
            setViewType("list");
          }}
          color={viewType === "list" ? "primary" : "default"}
        >
          <ViewListIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LayoutViewControls;
