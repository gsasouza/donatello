import React from 'react';
import styled from 'styled-components';

const THead = styled.thead`
  th {
    padding: 5px 10px;
    text-align: start;
    border-bottom: 1px solid #3e3e74;
    border-spacing: 5px 5px;
  }
`;

const TableHead = ({ columns }) => {
  return (
    <THead>
      <tr>
        {columns.map(column => (
          <th key={column.header.label}>{column.header.label}</th>
        ))}
      </tr>
    </THead>
  );
};

export default TableHead;
