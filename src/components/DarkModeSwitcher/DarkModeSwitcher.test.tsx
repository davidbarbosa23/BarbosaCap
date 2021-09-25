import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { DarkModeContext } from 'contexts/darkModeContext';
import DarkModeSwitcher from '.';
import LazyDarkModeSwitcher from './DarkModeSwitcher.lazy';

let isDarkMode = true;
const spy = jest.fn(() => {
  isDarkMode = !isDarkMode;
});

const Wrapper = ({ lazy }: { lazy?: boolean }) => (
  <DarkModeContext.Provider value={{ isDarkMode, toggle: spy }}>
    {lazy ? <LazyDarkModeSwitcher /> : <DarkModeSwitcher />}
  </DarkModeContext.Provider>
);

describe('<DarkModeSwitcher />', () => {
  test('it should mount', () => {
    render(<Wrapper />);
    const switcher = screen.getByTestId('DarkModeSwitcher');
    expect(switcher).toBeInTheDocument();
  });

  test('it should mount lazy', async () => {
    render(<Wrapper lazy />);
    const switcher = await screen.findByTestId('DarkModeSwitcher');
    expect(switcher).toBeInTheDocument();
  });

  test('clicking it should toggle dark mode', () => {
    render(<Wrapper />);
    const switcher = screen.getByTestId('DarkModeSwitcher');
    expect(switcher).toBeInTheDocument();

    fireEvent.click(switcher);
    expect(spy).toBeCalledTimes(1);
  });
});
