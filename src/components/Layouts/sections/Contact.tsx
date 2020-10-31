import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { db } from 'config/Firebase';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  // const { t } = useTranslation();
  const initialState: ContactData = {
    name: '',
    email: '',
    message: '',
  };
  const [contactData, setContactData] = useState(initialState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveContact(contactData);
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const saveContact = async (data: ContactData) => {
    await db.collection('contacts').doc().set(data);
  };

  return (
    <div>
      <div>
        <h3>Contact</h3>
      </div>
      <div>
        <form action='' onSubmit={onSubmit}>
          <input
            name='name'
            type='text'
            onChange={handleInput}
            value={contactData.name}
          />
          <input
            name='email'
            type='email'
            onChange={handleInput}
            value={contactData.email}
          />
          <textarea
            name='message'
            onChange={handleInput}
            value={contactData.message}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
