import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  border: 1px solid black;
`;

const RowsPerPageSelect = ({ onChangeRowsPerPage, rowsPerPage }) => {
  const rowsPerPageOptions = [10, 25, 50, 100];
  return (
    <>
      <label htmlFor={'rowsPerPage'}> Rows per page: </label>
      <select
        defaultValue={rowsPerPage}
        fname={'rowsPerPage'}
        onChange={e => onChangeRowsPerPage(e.target.value)}
      >
        {rowsPerPageOptions.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
};

const PageInfo = ({ page, totalCount, rowsPerPage }) => {
  return (
    <span>
      {page * rowsPerPage + 1} - {(page + 1) * rowsPerPage} of {totalCount}
    </span>
  );
};

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
      <nav>
        <ul>
          <li>
            <button
              disabled={page === 0}
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          </li>
          <li>
            <button
              disabled={page + 1 === Math.round(totalCount / rowsPerPage)}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </PaginationContainer>
  );
};

export default Pagination;
