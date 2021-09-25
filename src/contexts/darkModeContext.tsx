import React, { createContext, FC, useContext } from 'react';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

import { darkTheme, lightTheme } from 'styles/theme';
import { GlobalStyles } from 'styles/global';

export type DarkModeType = {
  isDarkMode: boolean;
  toggle: () => void;
};

export const DarkModeContext = createContext<DarkModeType>({
  isDarkMode: true,
  toggle: () => new Error('DarkModeContext not initialized'),
});

export const useDarkModeContext = (): DarkModeType => useContext(DarkModeContext);

export const DarkModeProvider: FC = ({ children }) => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggle }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};
