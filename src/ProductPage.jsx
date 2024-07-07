import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import SortAndViewControls from "./components/SortAndViewControls";
import CustomPagination from "./components/Pagination";
import { fetchProducts } from "./services/productService";
import "./ProductPage.css"; // Ensure to import your CSS

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

  const [searchParams, setSearchParams] = useSearchParams();

  // Update the URL with filters
  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.brand.length > 0)
      params.append("brand", filters.brand.join(","));
    if (filters.discount.length > 0)
      params.append("discount", filters.discount.join(","));
    if (filters.rating.length > 0)
      params.append("rating", filters.rating.join(","));
    if (filters.categories.length > 0)
      params.append("categories", filters.categories.join(","));
    if (filters.priceRange) params.append("priceRange", filters.priceRange);

    setSearchParams(params);
  }, [filters, setSearchParams]);

  // Read filters from URL on page load
  useEffect(() => {
    const brand = searchParams.get("brand")?.split(",") || [];
    const discount = searchParams.get("discount")?.split(",") || [];
    const rating = searchParams.get("rating")?.split(",") || [];
    const categories = searchParams.get("categories")?.split(",") || [];
    const priceRange = searchParams.get("priceRange") || "";

    setFilters({ brand, discount, rating, categories, priceRange });
  }, [searchParams]);

  useEffect(() => {
    console.log("Filters changed, re-fetching products:", filters);

    const orderParams =
      sortOrder === "priceLowHigh"
        ? { sortBy: "price", order: "asc" }
        : { sortBy: "price", order: "desc" };

    fetchProducts({
      skip: (currentPage - 1) * productsPerPage,
      limit: productsPerPage,
      fields: "title,price,images,description,discountPercentage,rating",
      filters: filters,
      ...orderParams,
    })
      .then((data) => {
        console.log("Fetched data:", data);
        const productsWithDiscount = data.products.map((product) => ({
          ...product,
          discountedPrice:
            product.price * (1 - product.discountPercentage / 100),
        }));
        setProducts(productsWithDiscount);

        // setProducts(data.products);
        setTotalProducts(data.total);
        console.log("Total Products:", data.total);
      })
      .catch((error) => console.error("Failed to fetch products:", error));
  }, [currentPage, productsPerPage, sortOrder, filters]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Initial fetch:", data); // Log initial fetch data
        setProducts(data);
      });
  }, []);

  const handleChange = (event, value) => {
    console.log("Current Page:", value);
    console.log(event);

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
