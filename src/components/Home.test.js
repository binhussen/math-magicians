/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home page of the Website', () => {
  test('Builds the snapshot of the Home component', () => {
    const homePage = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(homePage).toMatchSnapshot();
  });
});
