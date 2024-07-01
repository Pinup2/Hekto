import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import SortAndViewControls from "./components/SortAndViewControls";
import CustomPagination from "./components/Pagination";
import { fetchProducts } from "./services/productService";
import "./styles/ProductPage.css";

function ProductPage() {
  const [filters, setFilters] = useState({
    brand: [],
    discount: [],
    rating: [],
    categories: [],
    priceRange: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("priceLowHigh");
  const [viewType, setViewType] = useState("grid");
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const orderParams =
      sortOrder === "priceLowHigh"
        ? { sortBy: "price", order: "asc" }
        : { sortBy: "price", order: "desc" };

    fetchProducts({
      skip: (currentPage - 1) * productsPerPage,
      limit: productsPerPage,
      fields: "title,price,images,description,discountPercentage,rating",
      ...orderParams,
      filters,
    })
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.total);
      })
      .catch((error) => console.error("Failed to fetch products:", error));
  }, [currentPage, productsPerPage, sortOrder, filters]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const changeViewType = (newViewType) => {
    console.log("Changing viewType to", newViewType);
    setViewType(newViewType);
  };

  return (
    <div className="product-page">
      <Sidebar filters={filters} setFilters={setFilters} />
      <div className="product-listing">
        <SearchBar setSearchQuery={setSearchQuery} />
        <SortAndViewControls
          productsPerPage={productsPerPage}
          setProductsPerPage={setProductsPerPage}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          viewType={viewType}
          setViewType={changeViewType}
        />
        <ProductList
          filters={filters}
          searchQuery={searchQuery}
          sortOrder={sortOrder}
          viewType={viewType}
          currentPage={currentPage}
          pageSize={productsPerPage}
          products={products}
        />
        <CustomPagination
          count={Math.ceil(totalProducts / productsPerPage)}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ProductPage;
