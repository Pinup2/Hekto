import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useUrlUpdater } from "../../services/urlUtils";

interface CustomPaginationProps {
  total: number;
  page: number;
  pages: number;
  onChangePage: (newPage: number) => void;
}

function CustomPagination({
  page,
  onChangePage,
  pages,
}: CustomPaginationProps) {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    onChangePage(newPage);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pages}
        showFirstButton
        showLastButton
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </Stack>
  );
}

export default CustomPagination;
