import React from 'react';
import { render, screen } from 'helpers/testRenderIntl';
import Errors from './index';

test('renders Errors page', () => {
  render(<Errors />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
