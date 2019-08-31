import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const Select = styled.select`
  margin: 0 10px;
`;

const RowsPerPageSelect = ({ onChangeRowsPerPage, rowsPerPage }) => {
  const rowsPerPageOptions = [10, 25, 50, 100];
  return (
    <Label>
      Rows per page:
      <Select
        defaultValue={rowsPerPage}
        onChange={e => onChangeRowsPerPage(e.target.value)}
      >
        {rowsPerPageOptions.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
    </Label>
  );
};

export default RowsPerPageSelect;
