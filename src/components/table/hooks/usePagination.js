import React from 'react';

const usePagination = ({ rowsPerPage = 10, page = 0 }) => {
  const initialState = {
    rowsPerPage,
    page
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'rowsPerPage':
        return { ...state, rowsPerPage: action.value, page: 0 };
      case 'page':
        return { ...state, page: action.value };
      case 'clear':
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return {
    ...state,
    handlePageChange: value => dispatch({ type: 'page', value }),
    handleRowsPerPageChange: value => dispatch({ type: 'rowsPerPage', value }),
    clearPagination: () => dispatch({ type: 'clear' })
  };
};

export default usePagination;
