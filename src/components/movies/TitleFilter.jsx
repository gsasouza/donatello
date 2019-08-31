import React from 'react';
import styled, { css } from 'styled-components';
import useFocus from './hooks/useFocus';

const Input = styled.input`
  border: none;
  width: 100%;
  margin-left: 3px;
  outline: none;
`;

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
  ${props =>
    props.isFocused
      ? css`
          border-color: #3e3e74;
          color: #3e3e74;
          transition: all ease 0.3s;
          outline: #3e3e74;
        `
      : ''}
`;

const TitleFilter = ({ value, handleChange }) => {
  const { isFocused, handleFocus, handleBlur, ref } = useFocus();
  return (
    <Fieldset isFocused={isFocused} onClick={handleFocus}>
      <legend> Title </legend>
      <Input
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder="Filter by title"
        onBlur={handleBlur}
      />
    </Fieldset>
  );
};

export default TitleFilter;
