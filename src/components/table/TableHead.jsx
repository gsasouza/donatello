import React from 'react';
import styled from 'styled-components';

const THead = styled.thead`
  th {
    border: 1px solid black;
    padding: 5px 10px;
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
