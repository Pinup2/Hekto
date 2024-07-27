import { useState, useCallback } from "react";

export default function usePage(initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const nextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  const previousPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

  const setPage = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return { currentPage, setPage, nextPage, previousPage };
}
