import React from 'react';
import styled from 'styled-components';

import Table from '../table/Table';
import usePagination from '../table/hooks/usePagination';
import useFilter from './hooks/useFilter';
import movies from './data/movies';
import TitleFilter from './TitleFilter';
import GenreFilter from './GenreFilter';

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 30px auto auto auto;
`;

const Box = styled.div`
  box-shadow: -1px 4px 46px -15px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  padding: 15px;
  background-color: #ffffff;
`;

const TableWrapper = styled(Box)``;

const FilterWrapper = styled(Box)`
  margin: 10px 0;
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
      <FilterWrapper>
        <TitleFilter
          value={filters.title}
          handleChange={e => handleTitleFilter(e.target.value)}
        />
        <GenreFilter
          value={filters.genre}
          handleChange={e => handleGenreFilter(e.target.value)}
        />
      </FilterWrapper>
      <TableWrapper>
        <Table
          columns={columns}
          data={paginatedData}
          totalCount={filteredData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          {...paginationProps}
        />
      </TableWrapper>
    </Wrapper>
  );
};

export default MoviesList;
