import React from 'react';
import { render, screen } from 'helpers/testRenderIntl';
import Errors from './index';

test('renders Errors page', () => {
  render(<Errors />);
  const renderPage = screen.getByTestId('PageErrors');
  expect(renderPage).toBeInTheDocument();
});
