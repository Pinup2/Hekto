import { useEffect, useState } from "react";
import ProductList from "../components/ui/ProductList";
import Sidebar from "../components/ui/Sidebar";
import SortAndViewControls from "../components/ui/SortAndViewControls";
import CustomPagination from "../components/ui/Pagination";
import useProductFetch from "../hooks/useProductFetch";
import { useListerContext } from "../context/lister";
import { useUrlUpdater } from "../services/urlUtils";
import SearchBar from "../components/ui/SearchBar";

import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import Layout from "../Layout/layout";

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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const searchQuery = searchTerm ? `&title=${searchTerm}` : "";
    const fullQuery = `?_page=${currentPage}&_per_page=10${searchQuery}`;

    console.log("Full Query:", fullQuery); // Debugging line

    setQuery(fullQuery);
    fetchProducts(fullQuery);
    updateUrl(fullQuery);
  }, [fetchProducts, currentPage, searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to the first page on a new search
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 8,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Products
        </Typography>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 1 }}>
          {breadcrumbs.map((breadcrumb, index) => (
            <Link
              key={index}
              color={index === breadcrumbs.length - 1 ? "#FB2E86" : "inherit"}
              href={breadcrumb.href}
              underline="hover"
            >
              {breadcrumb.label}
            </Link>
          ))}
        </Breadcrumbs>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <SearchBar onSearch={handleSearch} />
            <SortAndViewControls fetchProducts={fetchProducts} />
            {loading ? (
              <Typography>Loading...</Typography>
            ) : error ? (
              <Typography color="error">Error: {error}</Typography>
            ) : (
              <ProductList products={products} />
            )}
            <CustomPagination
              total={totalProducts}
              page={currentPage}
              onChangePage={handlePageChange}
              prev={prev}
              last={last}
              next={next}
              pages={pages}
            />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductPage;
