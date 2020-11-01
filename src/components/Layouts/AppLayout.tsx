import React from 'react';
import { ToastContainer } from 'react-toastify';
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
      <ToastContainer
        position='bottom-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ContactProvider>
  );
};
