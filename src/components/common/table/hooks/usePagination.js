import React from 'react';

const usePagination = ({ data, rowsPerPage = 10, page = 0 }) => {
  const initialState = {
    rowsPerPage,
    page,
    paginatedData: []
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'rowsPerPage':
        return { ...state, rowsPerPage: action.value, page: 0 };
      case 'page':
        return { ...state, page: action.value };
      case 'clearPage':
        return {
          ...state,
          page: initialState.page
        };
      case 'paginatedData':
        return { ...state, paginatedData: action.value };
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({
      type: 'paginatedData',
      value: data.slice(
        state.page * state.rowsPerPage,
        (state.page + 1) * state.rowsPerPage
      )
    });
  }, [data, rowsPerPage, page, state.page, state.rowsPerPage]);

  React.useEffect(() => {
    dispatch({ type: 'clearPage' });
  }, [data, rowsPerPage, page]);

  return {
    ...state,
    handlePageChange: value => dispatch({ type: 'page', value }),
    handleRowsPerPageChange: value => dispatch({ type: 'rowsPerPage', value })
  };
};

export default usePagination;
