import { useEffect, useState } from "react";
import ProductList from "../components/ui/ProductList";
import Sidebar from "../components/ui/Sidebar";
import LayoutViewControls from "../components/ui/LayoutCardControls";
import SortAndViewControls from "../components/ui/SortAndViewControls";
import CustomPagination from "../components/ui/Pagination";
import useProductFetch from "../hooks/useProductFetch";
import { useListerContext } from "../context/lister";
import useUrlParams from "../hooks/useUrlParams";

const ProductPage = () => {
  const {
    products,
    totalProducts,
    loading,
    error,
    fetchProducts,
    first,
    last,
    next,
    pages,
    prev,
  } = useProductFetch();
  const { query } = useListerContext();

  const [sortOrder, setSortOrder] = useState(
    new URLSearchParams(query).get("_sort")
  );

  const { handleFilterChange, getFiltersFromUrl } = useUrlParams();
  const [viewType, setViewType] = useState("grid");

  const [page, setPage] = useState(
    parseInt(new URLSearchParams(query).get("_page") || "1", 10)
  );
  const [perPage, setPerPage] = useState(
    parseInt(new URLSearchParams(query).get("_per_page") || "10", 10)
  );

  useEffect(() => {
    console.log("ProductPage - Fetching products with query:", query); // Log the query before fetching products

    fetchProducts();
  }, [fetchProducts, query]);

  const handleFiltersChange = (newFilters: any) => {
    Object.entries(newFilters).forEach(([key, value]) => {
      handleFilterChange(key, value);
    });
  };
  const handleChangePage = (newPage: number) => {
    handleFilterChange("_page", newPage.toString());
    setPage(newPage);
    console.log();
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPerPage = event.target.value;
    setPerPage(parseInt(newPerPage, 10));
    handleFilterChange("_per_page", newPerPage);
  };
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortOrder(value);

    handleFilterChange("_sort", value);
  };

  return (
    <>
      <div className="product-page">
        <Sidebar setFilters={handleFiltersChange} />

        <div className="product-listing">
          <SortAndViewControls
            perPage={perPage}
            sortOrder={sortOrder}
            onPerPageChange={handlePerPageChange}
            onSortChange={handleSortChange}
          />
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <ProductList products={products} viewType={viewType} />
          )}
          <CustomPagination
            total={totalProducts}
            page={page}
            onChangePage={handleChangePage}
            prev={prev}
            last={last}
            next={next}
            pages={pages}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
