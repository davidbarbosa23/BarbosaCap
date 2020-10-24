import React, { Fragment } from 'react';
import Navbar from './modules/Navbar';

interface IAppLayout extends React.FC<{ className?: string }> {}

export const AppLayout: IAppLayout = ({ children, className }) => (
  <Fragment>
    <header>
      <Navbar />
    </header>
    <main className={className}>{children}</main>
    <footer></footer>
  </Fragment>
);
