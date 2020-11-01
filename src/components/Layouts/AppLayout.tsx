import React from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Contact from './sections/Contact';

/** Context */
import { ContactProvider } from 'context/contact.context';

export const AppLayout: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <ContactProvider>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
      <Contact />
    </ContactProvider>
  );
};
