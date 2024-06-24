import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import SortOptions from "./components/SortOptions";
import ViewSwitcher from "./components/ViewSwitcher";
import CustomPagination from "./components/Pagination";
import PageSizeSelector from "./components/PageSizeSelector";
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
  const totalPages = Math.ceil(totalProducts / productsPerPage); // Move this inside the component after state declaration

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
    console.log(`Current page size: ${productsPerPage}`);
    console.log(`Current page number: ${currentPage}`);
    fetchProducts((currentPage - 1) * productsPerPage, productsPerPage)
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.total);
        console.log(`Fetched products:`, data.products.length);
      })
      .catch((error) => console.error("Failed to fetch products:", error));
  }, [currentPage, productsPerPage]);
  const handleChange = (event, value) => {
    setCurrentPage(value); // Update the current page
  };
  return (
    <div className="product-page">
      <Sidebar setFilters={setFilters} />
      <div className="product-listing">
        <SearchBar setSearchQuery={setSearchQuery} />
        <SortOptions setSortOrder={setSortOrder} />
        <ViewSwitcher viewType={viewType} setViewType={setViewType} />
        <PageSizeSelector
          pageSize={productsPerPage}
          setPageSize={setProductsPerPage}
        />
        <ProductList
          key={productsPerPage}
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
