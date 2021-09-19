import React from 'react';
import { render, screen } from 'helpers/testRenderIntl';
import Home from './index';

test('renders Home page', () => {
  render(<Home />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
