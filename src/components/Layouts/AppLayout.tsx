import React, { Fragment } from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';

interface IAppLayout extends React.FC<{ className?: string }> {}

export const AppLayout: IAppLayout = ({ children, className }) => (
  <Fragment>
    <Header />
    <main className={className}>{children}</main>
    <Footer />
  </Fragment>
);
