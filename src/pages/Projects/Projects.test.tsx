import React from 'react';
import { render, screen } from 'helpers/testRenderIntl';
import Projects from './index';

test('renders Projects page', () => {
  render(<Projects />);
  const renderPage = screen.getByTestId('PageProjects');
  expect(renderPage).toBeInTheDocument();
});
