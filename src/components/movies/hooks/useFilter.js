import React from 'react';
import useDebounce from '../../../hooks/useDebounce';

const useFilter = ({ data }) => {
  const [filteredData, setFilteredData] = React.useState(data);
  const [title, setTitle] = React.useState('');
  const [genre, setGenre] = React.useState('');
  const titleFilter = useDebounce(title, 1000);
  const genreFilter = useDebounce(genre, 1000);

  React.useEffect(() => {
    setFilteredData(
      data.filter(movie => {
        if (genreFilter)
          return (
            movie.title.toLowerCase().includes(titleFilter) &&
            movie.genre.includes(genreFilter)
          );
        return movie.title.toLowerCase().includes(titleFilter);
      })
    );
  }, [data, titleFilter, genreFilter]);

  return {
    filteredData,
    handleTitleFilter: value => setTitle(value),
    handleGenreFilter: value => setGenre(value)
  };
};

export default useFilter;
