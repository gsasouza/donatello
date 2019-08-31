import React from 'react';
import { createGlobalStyle } from 'styled-components';

import MoviesList from './components/movies/MoviesList';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(0deg,#3e3e74,#816da0);
  }
  * {
    font-family: Lato, sans-serif;;
  }

`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MoviesList />
    </>
  );
};

export default App;
