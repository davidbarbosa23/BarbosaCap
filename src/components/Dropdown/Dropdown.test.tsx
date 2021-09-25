import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from '.';
import LazyDropdown from './Dropdown.lazy';

describe('<Dropdown />', () => {
  test('it should mount', () => {
    render(<Dropdown />);
    const dropdown = screen.getByTestId('Dropdown');
    expect(dropdown).toBeInTheDocument();
  });

  test('it should mount lazy', async () => {
    render(<LazyDropdown />);
    const dropdown = await screen.findByTestId('Dropdown');
    expect(dropdown).toBeInTheDocument();
  });
});
