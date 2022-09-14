/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header page of the Website', () => {
  test('Builds the snapshot of the Header component', () => {
    const header = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(header).toMatchSnapshot();
  });
});
