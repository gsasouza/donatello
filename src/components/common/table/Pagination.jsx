import React from 'react';
import styled from 'styled-components';

import PageInfo from './PageInfo';
import RowsPerPageSelect from './RowsPerPageSelect';
import PaginationNavigation from './PaginationNavigation';

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

const Pagination = ({
  totalCount = 100,
  handlePageChange,
  rowsPerPage = 25,
  handleRowsPerPageChange = () => {},
  page = 0
}) => {
  return (
    <PaginationContainer>
      <RowsPerPageSelect
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleRowsPerPageChange}
      />
      <PageInfo rowsPerPage={rowsPerPage} page={page} totalCount={totalCount} />
      <PaginationNavigation
        rowsPerPage={rowsPerPage}
        page={page}
        totalCount={totalCount}
        handlePageChange={handlePageChange}
      />
    </PaginationContainer>
  );
};

export default Pagination;
