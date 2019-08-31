import React from 'react';
import styled from 'styled-components';

const UnorderedList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: inline;
`;

const Button = styled.button`
  border: none;
  &:not([disabled]) {
    &:hover {
      background-color: #816da0;
      transition: ease-in 0.1s;
    }
    background-color: #3e3e74;
  }
  color: #fff;
  padding: 5px 15px;
  border-radius: 30px;
  margin: 5px;
  cursor: pointer;
  white-space: pre;
`;

const PaginationNavigation = ({
  page,
  handlePageChange,
  totalCount,
  rowsPerPage
}) => {
  return (
    <nav>
      <UnorderedList>
        <ListItem>
          <Button
            disabled={page === 0}
            onClick={() => handlePageChange(page - 1)}
          >
            {'Previous'}
          </Button>
        </ListItem>
        <ListItem>
          <Button
            disabled={page + 1 === Math.ceil(totalCount / rowsPerPage)}
            onClick={() => handlePageChange(page + 1)}
          >
            {'Next'}
          </Button>
        </ListItem>
      </UnorderedList>
    </nav>
  );
};

export default PaginationNavigation;
