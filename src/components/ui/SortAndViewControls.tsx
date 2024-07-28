import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useUrlUpdater } from "../../services/urlUtils";
import { useListerContext } from "../../context/lister";
import LayoutViewControls from "./LayoutCardControls";
interface SortAndViewControlsProps {
  fetchProducts: (query: string) => void;
}

const SortAndViewControls: React.FC<SortAndViewControlsProps> = ({
  fetchProducts,
}) => {
  const { updateUrl } = useUrlUpdater();
  const { setQuery } = useListerContext();

  const [perPage, setPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("price");

  const updateQuery = (page: number = 1) => {
    const query = `?_page=${page}&_per_page=${perPage}&_sort=${sortOrder}`;
    updateUrl(query);
    setQuery(query);
    fetchProducts(query);
  };

  useEffect(() => {
    updateQuery();
  }, [perPage, sortOrder]);

  const handlePerPageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setPerPage(event.target.value as number);
    updateQuery();
  };

  const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSortOrder(event.target.value as string);
    updateQuery();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "20px",
        gap: "64px",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
        <Typography
          variant="body1"
          sx={{
            color: "#8A8FB9",
            fontFamily: "Josefin Sans",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Per Page
        </Typography>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel id="per-page-label">Per Page</InputLabel>
          <Select
            labelId="per-page-label"
            id="per-page"
            value={perPage}
            onChange={handlePerPageChange}
            label="Per Page"
            sx={{
              color: "black",
              fontFamily: "Josefin Sans",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        <Typography
          variant="body1"
          sx={{
            color: "#8A8FB9",
            fontFamily: "Josefin Sans",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Sort By
        </Typography>
        <FormControl variant="outlined" sx={{ minWidth: 180 }}>
          <InputLabel id="sort-by-label">Sort By</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortOrder}
            onChange={handleSortChange}
            label="Sort By"
            sx={{
              color: "black",
              fontFamily: "Josefin Sans",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            <MenuItem value="price">Price: Low → High</MenuItem>
            <MenuItem value="-price">Price: High → Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="body1"
          sx={{
            color: "#8A8FB9",
            fontFamily: "Josefin Sans",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          View
        </Typography>

        <LayoutViewControls />
      </Box>
    </Box>
  );
};

export default SortAndViewControls;
