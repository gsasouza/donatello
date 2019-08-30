import React from 'react';
import useDebounce from '../../hooks/useDebounce';

const useFilter = ({ data }) => {
  const [filteredData, setFilteredData] = React.useState(data);
  const [title, setTitle] = React.useState('');
  const titleFilter = useDebounce(title, 1000);

  React.useEffect(() => {
    setFilteredData(
      data.filter(movie => movie.title.toLowerCase().includes(titleFilter))
    );
  }, [data, titleFilter]);

  return {
    filteredData,
    handleTitleFilter: value => setTitle(value)
  };
};

export default useFilter;
