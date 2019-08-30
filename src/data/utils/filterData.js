import movies from '../movies';

export const filterBy = property => value =>
  movies.filter(movie => movie[property].includes(value));
