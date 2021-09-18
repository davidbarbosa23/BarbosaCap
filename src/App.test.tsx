import React, { Suspense, ReactElement, FunctionComponent } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import i18n from 'config/I18n';

import App from './App';

const Wrapper: FunctionComponent = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Suspense>
  );
};

// create a customRender that wraps the UI in a memory Router
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Wrapper, ...options });

const routeComponentPropsMock = {
  history: {} as any,
  location: {} as any,
  match: { isExact: true, params: { loacale: 'en' }, path: '', url: '' } as any,
};

test('renders react app', () => {
  customRender(<App {...routeComponentPropsMock} />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
