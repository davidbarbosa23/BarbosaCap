import React from 'react';
import { useTranslation } from 'react-i18next';

import { UseContactShow } from 'context/contact.context';

import { ReactComponent as IconEmail } from 'assets/img/icon_email.svg';
import { ReactComponent as IconGithub } from 'assets/img/icon_github.svg';
import { ReactComponent as IconLinkedin } from 'assets/img/icon_linkedin.svg';
import { ReactComponent as IconPDF } from 'assets/img/icon_pdf.svg';
import ProfilePic from 'assets/img/profile_picture.jpg';

const Prologue: React.FC = () => {
  const { t } = useTranslation();
  const { setContactShow } = UseContactShow();

  return (
    <section className='Prologue container'>
      <div className='content'>
        <img src={ProfilePic} alt={`${process.env.REACT_APP_NAME} Profile`} />
        <div className='body'>
          <div>
            <h1
              dangerouslySetInnerHTML={{ __html: t('home.prologue.title') }}
            />
            <button
              className='btn'
              onClick={() => {
                if (setContactShow) setContactShow(true);
              }}
            >
              {t('home.prologue.btn')}
            </button>
          </div>
        </div>
        <ul className='social'>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`https://www.linkedin.com/in/${process.env.REACT_APP_SOCIAL_LINKEDIN}`}
              title={`in/${process.env.REACT_APP_SOCIAL_LINKEDIN}`}
            >
              <IconLinkedin />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`https://github.com/${process.env.REACT_APP_SOCIAL_GITHUB}`}
              title={`${process.env.REACT_APP_SOCIAL_GITHUB}`}
            >
              <IconGithub />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`${process.env.PUBLIC_URL}/docs/backend-developer_david-barbosa.pdf`}
              title={`${process.env.REACT_APP_FULLNAME}`}
            >
              <IconPDF />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`mailto:${process.env.REACT_APP_EMAIL}`}
              title={`${process.env.REACT_APP_EMAIL}`}
            >
              <IconEmail />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Prologue;
