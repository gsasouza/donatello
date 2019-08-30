import React from 'react';
import styled from 'styled-components';

import TableHead from './TableHead';
import TableBody from './TableBody';
import Pagination from './Pagination';

const StyledTable = styled.table`
  width: 100%;
`;

const Table = ({
  columns,
  data,
  rowsPerPage,
  page,
  totalCount,
  handleRowsPerPageChange,
  handlePageChange
}) => {
  return (
    <>
      <StyledTable>
        <TableHead columns={columns} />
        <TableBody data={data} columns={columns} />
      </StyledTable>
      <Pagination
        rowsPerPage={rowsPerPage}
        page={page}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        totalCount={totalCount}
      />
    </>
  );
};

export default Table;
