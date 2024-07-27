
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import SortAndViewControls from "./components/SortAndViewControls";
import CustomPagination from "./components/Pagination";
import useFetchProducts from "./hooks/useFetchProducts";
import "./ProductPage.css";
import usePage from "./hooks/usePage";

function ProductPage() {
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("priceLowHigh");
  const [viewType, setViewType] = useState("grid");
  const [filters, setFilters] = useState({});

  const { currentPage, setPage } = usePage();

  // const urlFilters = {
  //   brand: searchParams.get("brand")?.split(",") || [],
  //   discount: searchParams.get("discount")?.split(",") || [],
  //   rating: searchParams.get("rating")?.split(",") || [],
  //   categories: searchParams.get("categories")?.split(",") || [],
  //   priceRange: searchParams.get("priceRange") || "",
  // };

  // useEffect(() => {
  //   const page = searchParams.get("_page");
  //   const limit = searchParams.get("_limit");
  //   if (page) setPage(Number(page));
  //   if (limit) setProductsPerPage(Number(limit));
  // }, [searchParams, setPage]);

  const { products, totalProducts } = useFetchProducts({
    productsPerPage,
    currentPage,
    filters,
  });

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1); // Reset to first page when filters change
  };
  return (
      <div className="product-page">
        <Sidebar setFilters={handleFiltersChange} />
        <div className="product-listing">
          <SearchBar />
          <SortAndViewControls
              productsPerPage={productsPerPage}
              setProductsPerPage={setProductsPerPage}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              viewType={viewType}
              setViewType={setViewType}
          />
          <ProductList products={products} viewType={viewType} />
          <CustomPagination
              count={Math.ceil(totalProducts / productsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              onPageChange={setPage}
          />
        </div>
      </div>
  );
}

export default ProductPage;
