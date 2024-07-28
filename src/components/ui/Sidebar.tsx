import React from "react";
import FilterComponent from "../ui/FilterComponent";
import RangeFilterComponent from "../ui/RangeFilterComponent";
import { useFetchFilters } from "../../hooks/useFetchFilters";
import { Box, styled, Typography } from "@mui/material";

const SidebarWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const FilterTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Josefin Sans",
  fontWeight: 700,
  fontSize: "18px",
  color: "#101750",
  marginBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.default.main}`,
  display: "inline-block",
}));
const Sidebar: React.FC = () => {
  const { filters, error } = useFetchFilters();

  if (error) {
    return <div>Error fetching filters: {error}</div>;
  }

  if (!filters) {
    return <div>Loading filters...</div>;
  }

  return (
    <SidebarWrapper>
      {Object.entries(filters).map(([key, filter]) => (
        <Box key={key} sx={{ marginBottom: 3 }}>
          <FilterTitle> {filter.name} </FilterTitle>
          {filter.isRange ? (
            <RangeFilterComponent
              key={key}
              title={filter.name} 
              values={filter.values}
              showStars={key === "rating"}
            />
          ) : (
            <FilterComponent key={key} title={filter.name} category={key} options={filter.values} />

          )}
        </Box>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
