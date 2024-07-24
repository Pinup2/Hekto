import React from "react";
import FilterComponent from "../ui/FilterComponent";
import RangeFilterComponent from "../ui/RangeFilterComponent";
import { useFetchFilters } from "../../hooks/useFetchFilters";

const Sidebar: React.FC<{ setFilters: (filters: any) => void }> = ({ setFilters }) => {
  const { filters, error } = useFetchFilters();

  if (error) {
    return <div>Error fetching filters: {error}</div>;
  }

  if (!filters) {
    return <div>Loading filters...</div>;
  }

  return (
      <div className="sidebar">
        {Object.entries(filters).map(([key, filter]) =>
            filter.isRange ? (
                <RangeFilterComponent key={key} values={filter.values} title={filter.name}  showStars={key === "rating"} />
            ) : (
                <FilterComponent key={key} category={key} title={filter.name} options={filter.values} />
            )
        )}
      </div>
  );
};

export default Sidebar;
