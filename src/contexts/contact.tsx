import { createContext, useContext, useState, ReactNode } from 'react';

const defaultContactShow = false;
type ContactContextType = {
  contactShow: boolean;
  setContactShow: (value: boolean) => void;
};
const ContactContext = createContext<Partial<ContactContextType>>({});

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [contactShow, setContactShow] = useState(defaultContactShow);

  return (
    <ContactContext.Provider value={{ contactShow, setContactShow }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactShow = () => useContext(ContactContext);
