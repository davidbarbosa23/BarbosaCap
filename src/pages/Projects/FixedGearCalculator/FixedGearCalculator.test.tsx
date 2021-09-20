import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FixedGearCalculator from '.';

describe('<FixedGearCalculator />', () => {
  test('it should mount', () => {
    render(<FixedGearCalculator />);

    const projectsFixedGearCalculator = screen.getByTestId('FixedGearCalculator');

    expect(projectsFixedGearCalculator).toBeInTheDocument();
  });
});
