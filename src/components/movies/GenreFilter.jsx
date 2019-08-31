import React from 'react';

import { getMoviesGenres } from './data/getMoviesGenres';

const genres = getMoviesGenres();

const GenreFilter = ({ value, handleChange }) => {
  console.log(genres);
  return (
    <label>
      Filtrar Gênero:
      <select defaultValue={value} onChange={handleChange}>
        <option value={''}>All</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </label>
  );
};

export default GenreFilter;
