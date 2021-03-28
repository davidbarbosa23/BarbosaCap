import React from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';

import { db } from 'config/Firebase';

import { UseContactShow } from 'contexts/contact';

import styles from './styles.module.scss';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { contactShow, setContactShow } = UseContactShow();
  const nodeRef = React.useRef(null);

  const { handleSubmit, register, errors } = useForm<ContactData>();

  const onSubmit = (values: ContactData) => {
    if (saveContact(values)) {
      if (setContactShow) setContactShow(false);
      toast.success(t('toast.success.attempt'));
    } else {
      toast.error(t('toast.fail.attempt'));
    }
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
      classNames="modal-contact"
      unmountOnExit
    >
      <div className={`${styles.modalContainer} modal-container`}>
        <div ref={nodeRef} className="container modal-contact">
          <div className="highlight">
            <div>
              <h3>{t('about.title')}</h3>
              <p>{t('contact.about.desc')}</p>
            </div>
          </div>
          <div className="form">
            <div>
              <div
                className="close-modal"
                onClick={() => {
                  if (setContactShow) setContactShow(false);
                }}
              >
                <span></span>
                <span></span>
              </div>
              <h3>{t('contact.title')}</h3>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="input ">
                  <input
                    id="name"
                    name="name"
                    className={errors.name && 'invalid'}
                    type="text"
                    ref={register({ required: true, maxLength: 80 })}
                  />
                  <label htmlFor="name">{t('name')}</label>
                </div>
                <div className="input ">
                  <input
                    id="email"
                    name="email"
                    className={errors.email && 'invalid'}
                    type="email"
                    ref={register({
                      required: 'Required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid email address',
                      },
                    })}
                  />
                  <label htmlFor="email">{t('email')}</label>
                </div>
                <div className="input ">
                  <textarea
                    id="message"
                    name="message"
                    className={errors.message && 'invalid'}
                    ref={register({ required: true })}
                  />
                  <label htmlFor="message">{t('message')}</label>
                </div>
                <button className="btn" type="submit">
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
