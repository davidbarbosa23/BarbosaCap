import React, { Fragment } from 'react';
import Header from './modules/Header';
import Footer from './modules/Footer';

interface IAppLayout extends React.FC<{ className?: string }> {}

export const AppLayout: IAppLayout = ({ children, className }) => (
  <Fragment>
    <Header />
    <main className={className}>{children}</main>
    <Footer />
  </Fragment>
);
