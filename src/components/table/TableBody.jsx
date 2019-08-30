import React from 'react';
import styled from 'styled-components';

const TBody = styled.tbody`
  td {
    border: 1px solid black;
    padding: 5px 10px;
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
  )
}


const TableBody = ({ data, columns }) => {
  return (
    <TBody>
      {data.map(row => <TableBodyRow key={JSON.stringify(row)} row={row} columns={columns}/>)}
    </TBody>
  )
}

export default TableBody;
