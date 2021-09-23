import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import MyProvider from '../context/myprovider';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Router
        history={ history }
      >
        <MyProvider>{ component }</MyProvider>
      </Router>,
    ),
    history,
  });
};

export default renderWithRouter;
