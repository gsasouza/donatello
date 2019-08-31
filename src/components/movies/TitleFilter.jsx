import React from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
  font-size: 14px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  max-width: 200px;
  border: 1px solid #816da04f;
  margin: 0;
  padding: 5px 10px 8px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  margin-left: 3px;
`;

const TitleFilter = ({ value, handleChange }) => {
  return (
    <Fieldset>
      <legend> Title </legend>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Filter by title"
      />
    </Fieldset>
  );
};

export default TitleFilter;
