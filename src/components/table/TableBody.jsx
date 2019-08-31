import React from 'react';
import styled from 'styled-components';

const TBody = styled.tbody`
  td {
    padding: 5px 10px;
    border-bottom: 1px solid #816da04f;
    border-spacing: 5px 5px;
  }
`;

const TableBodyRow = ({ row, columns }) => {
  return (
    <tr>
      {columns.map(({ property, renderRow }, index) => (
        <td key={row[property]}>
          {renderRow ? renderRow(row[property]) : row[property]}
        </td>
      ))}
    </tr>
  );
};

const TableBody = ({ data, columns }) => {
  return (
    <TBody>
      {data.map(row => (
        <TableBodyRow key={JSON.stringify(row)} row={row} columns={columns} />
      ))}
    </TBody>
  );
};

export default TableBody;
