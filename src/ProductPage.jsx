// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import ProductList from "./components/ProductList";
// import Sidebar from "./components/Sidebar";
// import SearchBar from "./components/SearchBar";
// import SortAndViewControls from "./components/SortAndViewControls";
// import CustomPagination from "./components/Pagination";
// import { fetchProducts } from "./services/productService";
// import "./ProductPage.css"; // Ensure to import your CSS

// function ProductPage() {
//   // const [filters, setFilters] = useState({
//   //   brand: [],
//   //   discount: [],
//   //   rating: [],
//   //   categories: [],
//   //   priceRange: [],
//   // });
//   //=>{}
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOrder, setSortOrder] = useState("priceLowHigh");
//   const [viewType, setViewType] = useState("grid");
//   const [products, setProducts] = useState([]);
//   //filter saving active state:
//   const [activeFilters, setActiveFilters] = useState({});
//   //filter saving passive state:
//   const [filters, setFilters] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage, setProductsPerPage] = useState(10);
//   const [totalProducts, setTotalProducts] = useState(0);
//   //to make the same hook as useSearchParams()
//   const [searchParams, setSearchParams] = useSearchParams();

//   // Update the URL with filters

//   // redo to custom hook
//   // useEffect(() => {
//   //   const params = new URLSearchParams();

//   //   if (filters.brand.length > 0)
//   //     params.append("brand", filters.brand.join(","));
//   //   if (filters.discount.length > 0)
//   //     params.append("discount", filters.discount.join(","));
//   //   if (filters.rating.length > 0)
//   //     params.append("rating", filters.rating.join(","));
//   //   if (filters.categories.length > 0)
//   //     params.append("categories", filters.categories.join(","));
//   //   if (filters.priceRange) params.append("priceRange", filters.priceRange);

//   //   setSearchParams(params);
//   // }, [filters, setSearchParams]);

//   // Read filters from URL on page load
//   useEffect(() => {
//     const brand = searchParams.get("brand")?.split(",") || [];
//     const discount = searchParams.get("discount")?.split(",") || [];
//     const rating = searchParams.get("rating")?.split(",") || [];
//     const categories = searchParams.get("categories")?.split(",") || [];
//     const priceRange = searchParams.get("priceRange") || "";

//     setFilters({ brand, discount, rating, categories, priceRange });
//   }, [searchParams]);

//   useEffect(() => {
//     console.log("Filters changed, re-fetching products:", filters);

//     const orderParams =
//       sortOrder === "priceLowHigh"
//         ? { sortBy: "price", order: "asc" }
//         : { sortBy: "price", order: "desc" };
//     console.log("OrderParams:", sortOrder);
//     fetchProducts({
//       page: currentPage,
//       limit: productsPerPage,
//       fields: "title,price,images,description,discountPercentage,rating",
//       filters: filters,
//       ...orderParams,
//     })
//       .then((data) => {
//         console.log("Fetched data:", data);
//         const productsWithDiscount = data.products.map((product) => ({
//           ...product,
//           discountedPrice:
//             product.price * (1 - product.discountPercentage / 100),
//         }));
//         setProducts(productsWithDiscount);
//         console.log("Products Fetched:", data.products.length);

//         // setProducts(data.products);

//         setTotalProducts(data.total);
//         console.log("Total Products State Updated to:", data.total); // Log the fetched total
//       })
//       .catch((error) => console.error("Failed to fetch products:", error));
//   }, [currentPage, productsPerPage, sortOrder, filters]);

//   fetch("http://localhost:3000/total")
//     .then((response) => response.text()) // Use `.text()` instead of `.json()`
//     .then((data) => {
//       const total = parseInt(data, 10); // Convert the string response to a number
//       if (!isNaN(total)) {
//         setTotalProducts(total);
//         console.log("Total Products successfully fetched and set:", total);
//       } else {
//         console.error("Failed to parse total products:", data);
//       }
//     })
//     .catch((error) => console.error("Failed to fetch total products:", error));

//   useEffect(() => {
//     fetch("http://localhost:3000/products")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Initial fetch:", data); // Log initial fetch data
//         setProducts(data);
//       });
//   }, []);

//   const handleChange = (event, value) => {
//     console.log("Current Page:", value);
//     console.log("event", event);
//     console.log("Page changed to:", value);

//     setCurrentPage(value);
//   };

//   const changeViewType = (newViewType) => {
//     console.log("Changing viewType to", newViewType);
//     setViewType(newViewType);
//   };

//   return (
//     <div className="product-page">
//       <Sidebar filters={filters} setFilters={setFilters} />
//       count={Math.ceil(totalProducts / productsPerPage)}
//       <div className="product-listing">
//         <SearchBar setSearchQuery={setSearchQuery} />
//         <SortAndViewControls
//           productsPerPage={productsPerPage}
//           setProductsPerPage={setProductsPerPage}
//           sortOrder={sortOrder}
//           setSortOrder={setSortOrder}
//           viewType={viewType}
//           setViewType={changeViewType}
//         />
//         <ProductList
//           filters={filters}
//           searchQuery={searchQuery}
//           sortOrder={sortOrder}
//           viewType={viewType}
//           currentPage={currentPage}
//           pageSize={productsPerPage}
//           products={products}
//         />
//         <CustomPagination
//           count={Math.ceil(totalProducts / productsPerPage)}
//           page={currentPage}
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// }

// export default ProductPage;

import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import SortAndViewControls from "./components/SortAndViewControls";
import CustomPagination from "./components/Pagination";
import useFetchProducts from "./hooks/useFetchProducts";
import "./ProductPage.css";
import usePage from "./hooks/usePage";
import useUrlParams from "./hooks/useSearchParams";
import { useSearchParams } from "react-router-dom";
function ProductPage() {
  //macth everything as in hook
  const defaultParams = {
    _page: 1,
    _limit: 10,
    brand: [],
    discount: [],
    rating: [],
    categories: [],
    priceRange: "",
  };
  const [urlParams, setUrlParams] = useUrlParams(defaultParams);
  const { _limit, _page, filters } = useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("priceLowHigh"); // Valid initial value
  const [viewType, setViewType] = useState("grid"); // Valid initial value

  const { currentPage, setPage } = usePage();

  const urlFilters = {
    brand: searchParams.get("brand")?.split(",") || [],
    discount: searchParams.get("discount")?.split(",") || [],
    rating: searchParams.get("rating")?.split(",") || [],
    categories: searchParams.get("categories")?.split(",") || [],
    priceRange: searchParams.get("priceRange") || "",
  };

  useEffect(() => {
    const page = searchParams.get("_page");
    const limit = searchParams.get("_limit");
    if (page) setPage(Number(page));
    if (limit) setProductsPerPage(Number(limit));
  }, [searchParams, setPage]);

  const { products, totalProducts, loading, setSearchParams } =
    useFetchProducts({ productsPerPage, currentPage, filters: urlFilters });

  const handlePageChange = (event, value) => {
    setPage(value);
    //for friend's link, saves all the infor from this link
    setSearchParams({ ...urlParams, _limit: value });
  };
  console.log("ProductsPerPage", productsPerPage);
  console.log("Total", totalProducts);
  return (
    <div className="product-page">
      <Sidebar
        setFilters={(filters) => setUrlParams({ ...urlParams, ...filters })}
      />
      <div className="product-listing">
        <SearchBar />
        <SortAndViewControls
          productsPerPage={Number(productsPerPage)}
          setProductsPerPage={(limit) =>
            setUrlParams({ ...urlParams, _limit: limit })
          }
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          viewType={viewType}
          setViewType={setViewType}
        />
        <ProductList products={products} />
        <CustomPagination
          count={Math.ceil(totalProducts / productsPerPage)}
          page={Number(currentPage)}
          onChange={handlePageChange}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default ProductPage;
