import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { db } from 'config/Firebase';

import { UseContactShow } from 'context/contact.context';

interface ContactData {
  name: string;
  email: string;
  message: string;
}
// TODO: Toastify, Validation
const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { contactShow, setContactShow } = UseContactShow();
  const nodeRef = React.useRef(null);

  const initialState: ContactData = {
    name: '',
    email: '',
    message: '',
  };
  const [contactData, setContactData] = useState(initialState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (saveContact(contactData)) {
      setContactData(initialState);
      if (setContactShow) setContactShow(false);
    }
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const saveContact = async (data: ContactData) => {
    try {
      await db.collection('contacts').doc().set(data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  // console.log(props.open);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={contactShow}
      timeout={400}
      classNames='modal-contact'
      unmountOnExit
    >
      <div className='modal-container'>
        <div ref={nodeRef} className='container modal-contact'>
          <div className='highlight'>
            <div>
              <h3>{t('about.title')}</h3>
              <p>{t('contact.about.desc')}</p>
            </div>
          </div>
          <div className='form'>
            <div>
              <div
                className='close-modal'
                onClick={() => {
                  if (setContactShow) setContactShow(false);
                }}
              >
                <span></span>
                <span></span>
              </div>
              <h3>{t('contact.title')}</h3>
              <form action='' onSubmit={onSubmit}>
                <div className='input '>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    onChange={handleInput}
                    value={contactData.name}
                  />
                  <label htmlFor='name'>{t('name')}</label>
                </div>
                <div className='input '>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    onChange={handleInput}
                    value={contactData.email}
                  />
                  <label htmlFor='email'>{t('email')}</label>
                </div>
                <div className='input '>
                  <textarea
                    id='message'
                    name='message'
                    onChange={handleInput}
                    value={contactData.message}
                  />
                  <label htmlFor='message'>{t('message')}</label>
                </div>
                <button className='btn' type='submit'>
                  {t('submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Contact;
