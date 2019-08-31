import React from 'react';
import styled from 'styled-components';

import Table from '../table/Table';
import usePagination from '../table/hooks/usePagination';
import useFilter from './hooks/useFilter';
import movies from './data/movies';
import Filters, { Box } from './Filters';

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 30px auto auto auto;
`;

const ScreenLabel = styled.h1`
  color: #ffffff;
`;

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
    renderRow: genre => genre.join(', ')
  }
];

const MoviesList = () => {
  const {
    filteredData,
    handleTitleFilter,
    handleGenreFilter,
    ...filters
  } = useFilter({
    data: movies
  });
  const {
    page,
    rowsPerPage,
    paginatedData,
    ...paginationProps
  } = usePagination({
    data: filteredData
  });

  return (
    <Wrapper>
      <ScreenLabel>Movies List</ScreenLabel>
      <Filters
        filters={filters}
        handleGenreFilter={handleGenreFilter}
        handleTitleFilter={handleTitleFilter}
      />
      <Box>
        <Table
          columns={columns}
          data={paginatedData}
          totalCount={filteredData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          {...paginationProps}
        />
      </Box>
    </Wrapper>
  );
};

export default MoviesList;
