import React from 'react';
import styled from 'styled-components';

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
`;

const Select = styled.select`
  border: none;
  width: 100%;
  margin-left: 3px;
`;

const GenreFilter = ({ value, handleChange }) => {
  return (
    <Fieldset>
      <legend>Genre</legend>
      <Select defaultValue={value} onChange={handleChange}>
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
