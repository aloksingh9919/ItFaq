import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined({ totalPages, Page, setPage }) {
  return (
    <Stack spacing={6}>
      <Pagination
      color='primary'
        count={totalPages}
        defaultPage={Page}
        variant="outlined"
        onChange={(event, value) => setPage(value)}
      />

    </Stack>
  );
}