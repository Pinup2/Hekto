import { useEffect, useState } from "react";
import ProductList from "../components/ui/ProductList";
import Sidebar from "../components/ui/Sidebar";
import LayoutViewControls from "../components/ui/LayoutCardControls";
import SortAndViewControls from "../components/ui/SortAndViewControls";
import CustomPagination from "../components/ui/Pagination";
import useProductFetch from "../hooks/useProductFetch";
import { useListerContext } from "../context/lister";
import { useUrlUpdater } from "../services/urlUtils";

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

  const { query, setQuery } = useListerContext();
  const [currentPage, setCurrentPage] = useState(first);
  const { updateUrl } = useUrlUpdater();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, query, currentPage]);

  //updates and url and fetch query
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setQuery(`_page=${currentPage}&_per_page=10`);
    updateUrl(`_page=${newPage}&_per_page=10`);
  };

  return (
    <>
      <div className="product-page">
        <Sidebar />

        <div className="product-listing">
          <SortAndViewControls />
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <ProductList products={products} />
          )}
          {/* TODO delete unnecesary props */}
          <CustomPagination
            total={totalProducts}
            page={currentPage}
            onChangePage={handlePageChange}
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
