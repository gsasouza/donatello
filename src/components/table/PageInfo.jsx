import React from 'react';
import styled from 'styled-components';

const Info = styled.span`
  font-size: 14px;
  margin: 0 10px;
`;

const PageInfo = ({ page, totalCount, rowsPerPage }) => {
  const first = page * rowsPerPage + 1;
  const last = (page + 1) * rowsPerPage;
  return (
    <Info>
      <strong> {first} </strong> -{' '}
      <strong> {last > totalCount ? totalCount : last} </strong> of{' '}
      <strong> {totalCount} </strong>
    </Info>
  );
};

export default PageInfo;
