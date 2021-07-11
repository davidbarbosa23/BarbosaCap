import React from 'react';

import Footer from './Footer';
import Header from './Header';

const AppLayout: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
