/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Calculator from './Calculator';

describe('Calculator page of the Website', () => {
  test('Builds the snapshot of the Calculator component', () => {
    const calculatorPage = render(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    );
    expect(calculatorPage).toMatchSnapshot();
  });
});
