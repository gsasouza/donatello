import React from 'react';
import styled from 'styled-components';

import TitleFilter from './TitleFilter';
import GenreFilter from './GenreFilter';
import Box from '../common/Box';

const FilterInputWrapper = styled.div`
  display: flex;
  width: 100%;
  > fieldset {
    margin: 0 10px;
  }
  > fieldset:first-child {
    margin-left: 0;
  }
  > fieldset:last-child {
    margin-right: 0;
  }
`;

const FilterWrapper = styled(Box)`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
`;

const FilterLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Filters = ({ filters, handleTitleFilter, handleGenreFilter }) => {
  return (
    <FilterWrapper>
      <FilterLabel> Filters </FilterLabel>
      <FilterInputWrapper>
        <TitleFilter
          value={filters.title}
          handleChange={e => handleTitleFilter(e.target.value)}
        />
        <GenreFilter
          value={filters.genre}
          handleChange={e => handleGenreFilter(e.target.value)}
        />
      </FilterInputWrapper>
    </FilterWrapper>
  );
};

export default Filters;
