import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import SortAndViewControls from "./components/SortAndViewControls";
import CustomPagination from "./components/Pagination";
import { fetchProducts } from "./services/productService";

function ProductPage() {
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("priceLowHigh");
  const [viewType, setViewType] = useState("grid");
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0); // Initialize totalProducts state
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const skip = (currentPage - 1) * productsPerPage; // Calculate 'skip' based on current page
  //     const data = await fetchAllProducts(skip, productsPerPage);
  //     // const data = await fetchAllProducts(skip, limit);

  //     const limit = productsPerPage;
  //     setProducts(data.products);
  //     setTotalProducts(data.total);
  //   };

  //   fetchProducts();
  // }, [currentPage, productsPerPage]);
  // useEffect(() => {
  //   const skip = (currentPage - 1) * productsPerPage;
  //   fetchProducts(skip, productsPerPage).then((data) => {
  //     setProducts(data.products);
  //     setTotalProducts(data.total);
  //   });
  // }, [currentPage, productsPerPage]);

  useEffect(() => {
    const orderParams =
      sortOrder === "priceLowHigh"
        ? { sortBy: "price", order: "asc" }
        : { sortBy: "price", order: "desc" };
    console.log(`Current page size: ${productsPerPage}, Sorting: ${sortOrder}`);
    fetchProducts({
      skip: (currentPage - 1) * productsPerPage,
      limit: productsPerPage,
      fields: "title,price,images",
      ...orderParams,
    })
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.total);
        console.log(`Fetched products:`, data.products);
      })
      .catch((error) => console.error("Failed to fetch products:", error));
  }, [currentPage, productsPerPage, sortOrder]);

  const handleChange = (event, value) => {
    setCurrentPage(value); // Update the current page
  };
  return (
    <div className="product-page">
      <Sidebar setFilters={setFilters} />
      <div className="product-listing">
        <SearchBar setSearchQuery={setSearchQuery} />
        <SortAndViewControls
          productsPerPage={productsPerPage}
          setProductsPerPage={setProductsPerPage}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          viewType={viewType}
          setViewType={setViewType}
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
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ProductPage;
