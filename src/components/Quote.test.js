/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Quote from './Home';

describe('Quote page of the Website', () => {
  test('Builds the snapshot of the Quote component', () => {
    const quotePage = render(
      <BrowserRouter>
        <Quote />
      </BrowserRouter>,
    );
    expect(quotePage).toMatchSnapshot();
  });
});
