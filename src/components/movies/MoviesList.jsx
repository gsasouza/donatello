import React from 'react';

import Table from '../table/Table';
import usePagination from '../table/hooks/usePagination';
import useFilter from '../../data/hooks/useFilter';
import movies from '../../data/movies';

const columns = [
  {
    property: 'title',
    header: {
      label: 'Title'
    }
  },
  {
    property: 'year',
    header: {
      label: 'Year'
    }
  },
  {
    property: 'runtime',
    header: {
      label: 'Runtime'
    }
  },
  {
    property: 'revenue',
    header: {
      label: 'Revenue'
    }
  },
  {
    property: 'rating',
    header: {
      label: 'Rating'
    }
  },
  {
    property: 'genre',
    header: {
      label: 'Genres'
    },
    renderRow: (genre) => genre.join(', ')
  }
]

const MoviesList = () => {
  const {
    page,
    rowsPerPage,
    clearPagination,
    ...paginationProps
  } = usePagination({});

  const { filteredData, handleTitleFilter, ...filters } = useFilter({
    data: movies,
    rowsPerPage: rowsPerPage,
    clearPagination,
    page,
  });

  return (
    <>
      <input value={filters.title} onChange={(e) => handleTitleFilter(e.target.value)} />
      <Table
        columns={columns}
        data={filteredData}
        totalCount={movies.length}
        page={page}
        rowsPerPage={rowsPerPage}
        {...paginationProps}
      />
    </>
  )
}

export default MoviesList;
