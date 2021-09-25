import React, { FC } from 'react';

import { useDarkModeContext } from 'contexts/darkModeContext';

const DarkModeSwitcher: FC = () => {
  const { isDarkMode, toggle } = useDarkModeContext();
  return (
    <button data-testid="DarkModeSwitcher" type="button" onClick={toggle}>
      DarkMode {isDarkMode ? 'On' : 'Off'}
    </button>
  );
};

export default DarkModeSwitcher;
