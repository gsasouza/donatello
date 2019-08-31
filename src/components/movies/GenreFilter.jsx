import React from 'react';
import styled, { css } from 'styled-components';

import useFocus from './hooks/useFocus';
import { getMoviesGenres } from './data/getMoviesGenres';

const genres = getMoviesGenres();

const Fieldset = styled.fieldset`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  max-width: 200px;
  border: 1px solid #816da04f;
  margin: 0;
  padding: 5px 10px 8px;
  width: 100%;
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

const Select = styled.select`
  border: none;
  width: 100%;
  margin-left: 3px;
  outline: none;
`;

const GenreFilter = ({ value, handleChange }) => {
  const { isFocused, handleFocus, handleBlur, ref } = useFocus();
  return (
    <Fieldset isFocused={isFocused} onClick={handleFocus}>
      <legend>Genre</legend>
      <Select
        ref={ref}
        defaultValue={value}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value={''}>All</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
    </Fieldset>
  );
};

export default GenreFilter;
