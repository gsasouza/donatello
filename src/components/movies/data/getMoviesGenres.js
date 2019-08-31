import movies from './movies';

export const getMoviesGenres = () =>
  Array.from(new Set(movies.reduce((acc, cur) => [...acc, ...cur.genre], [])));
