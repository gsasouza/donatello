import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';

import MoviesList from './components/movies/MoviesList';
import CommentList from './components/comments/CommentList';

const GlobalStyle = createGlobalStyle`
  html {
    background: linear-gradient(0deg,#3e3e74,#816da0);
    min-height: 100vh;
  }
  body {
    margin: 0;    
  }
  * {
    font-family: Lato, sans-serif;;
  }

`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <MoviesList default path={'/'} />
        <CommentList path={'/comments/:title'} />
      </Router>
    </>
  );
};

export default App;
