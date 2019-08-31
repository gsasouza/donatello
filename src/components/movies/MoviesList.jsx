import React from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';

import Filters from './Filters';
import Box from '../common/Box';
import Content from '../common/Content';
import ScreenLabel from '../common/ScreenLabel';
import Table from '../table/Table';
import usePagination from '../table/hooks/usePagination';
import useFilter from './hooks/useFilter';
import movies from './data/movies';

const TableWrapper = styled(Box)`
  margin-bottom: 40px;
`;

const EmptyLabel = styled.span`
  margin: auto;
  font-size: 36px;
  color: #3e3e74;
  display: flex;
  justify-content: center;
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
    <Content>
      <ScreenLabel>Movies List</ScreenLabel>
      <Filters
        filters={filters}
        handleGenreFilter={handleGenreFilter}
        handleTitleFilter={handleTitleFilter}
      />
      <TableWrapper>
        {!filteredData.length ? (
          <EmptyLabel> No movies found :( </EmptyLabel>
        ) : (
          <Table
            columns={columns}
            data={paginatedData}
            totalCount={filteredData.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onRowClick={({ title }) => navigate(`/comments/${title}`)}
            {...paginationProps}
          />
        )}
      </TableWrapper>
    </Content>
  );
};

export default MoviesList;
