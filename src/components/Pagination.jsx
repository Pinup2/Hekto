import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function CustomPagination({ count, page, onChange }) {
  console.log("Pagination Count:", count); // Log pagination count
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
      />
    </Stack>
  );
}

export default CustomPagination;
