import React from 'react';
import styled from 'styled-components';

const TBody = styled.tbody`
  td {
    padding: 5px 10px;
    border-bottom: 1px solid #816da04f;
    border-spacing: 5px 5px;
  }
  tr:hover {
    background-color: #816da04f;
    cursor: ${props => (props.onRowClick ? 'pointer' : 'auto')};
  }
`;

const TableBodyRow = ({ row, columns, onRowClick }) => {
  return (
    <tr onClick={() => onRowClick(row)}>
      {columns.map(({ property, renderRow }, index) => (
        <td key={row[property]}>
          {renderRow ? renderRow(row[property]) : row[property]}
        </td>
      ))}
    </tr>
  );
};

const TableBody = ({ data, columns, onRowClick }) => {
  return (
    <TBody onRowClick={onRowClick}>
      {data.map(row => (
        <TableBodyRow
          key={JSON.stringify(row)}
          row={row}
          columns={columns}
          onRowClick={onRowClick}
        />
      ))}
    </TBody>
  );
};

export default TableBody;
