import React from 'react';
import { render, screen } from 'helpers/testRenderIntl';
import Home from './index';

test('renders Home page', () => {
  render(<Home />);
  const renderPage = screen.getByTestId('PageHome');
  expect(renderPage).toBeInTheDocument();
});
