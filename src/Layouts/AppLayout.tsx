import React from 'react';

import { ToastContainer } from 'react-toastify';

import { ContactProvider } from 'contexts/contact';

import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Header from 'components/Header';

export const AppLayout: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <ContactProvider>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
      <Contact />
      <ToastContainer
        position="bottom-left"
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
