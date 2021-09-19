import React from 'react';
import { render, screen } from 'helpers/testRenderIntl';
import Projects from './index';

test('renders Projects page', () => {
  render(<Projects />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
