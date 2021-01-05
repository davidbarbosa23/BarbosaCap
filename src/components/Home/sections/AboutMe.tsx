import React from 'react';
import { useTranslation } from 'react-i18next';

import { CodeLine, CodeContainer } from 'components/Layouts/modules/CodeModule';

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='AboutMe'>
      <div className='container'>
        <h1>{t('about.title')}</h1>
        <CodeContainer>
          <CodeLine>
            <div className='methods'>class</div>{' '}
            <span className='propname'>{process.env.REACT_APP_NAME}</span> {'{'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            <div className='methods'>constructor</div>() {'{'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <span className='propname'>this</span>.
            <span className='proplabel'>name</span>{' '}
            <span className='scope'>=</span>{' '}
            <span className='string'>'{process.env.REACT_APP_FULLNAME}'</span>;
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <span className='propname'>this</span>.
            <span className='proplabel'>dayOfBirthTimestamp</span>{' '}
            <span className='scope'>=</span>{' '}
            <span className='number'>840839401</span>;
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <span className='propname'>this</span>.
            <span className='proplabel'>email</span>{' '}
            <span className='scope'>=</span>{' '}
            <span className='string'>'{process.env.REACT_APP_EMAIL}'</span>;
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <span className='propname'>this</span>.
            <span className='proplabel'>phone</span>{' '}
            <span className='scope'>=</span>{' '}
            <span className='number'>{process.env.REACT_APP_PHONE}</span>;
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <span className='propname'>this</span>.
            <span className='proplabel'>location</span>{' '}
            <span className='scope'>=</span>{' '}
            <span className='string'>'{process.env.REACT_APP_LOCATION}'</span>;
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <span className='propname'>this</span>.
            <span className='proplabel'>description</span>{' '}
            <span className='scope'>=</span>{' '}
            <span className='string'>'{t('home.about.code.desc')}'</span>;
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            {'}'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            <div className='comment'>// {t('home.about.code.exp')}</div>
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            <span className='function'>workExperience</span>() {'{'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <div className='methods'>return</div> [
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2021-Current'</span> :
            <span className='string'>
              {' '}
              '{t('home.about.code.exp6')} Mercado Libre'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2019-2020'</span> :
            <span className='string'>
              {' '}
              '{t('home.about.code.exp5')} Quantun Connexion'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2018-2019'</span> :
            <span className='string'>
              {' '}
              '{t('home.about.code.exp4')} Tradeview Ltd. / iLikeWebSites.com'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2016-2018'</span> :
            <span className='string'>
              {' '}
              '{t('home.about.code.exp3')} Tradeview Ltd. / iLikeWebSites.com'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2015-2016'</span> :
            <span className='string'>
              {' '}
              '{t('home.about.code.exp2')} Rampa Marketing Digital'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2015-2015'</span> :
            <span className='string'>
              {' '}
              '{t('home.about.code.exp1')} Data Solutions Group'
            </span>{' '}
            {'}'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>]
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            {'}'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            <div className='comment'>// {t('home.about.code.edu')}</div>
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            <span className='function'>education</span>() {'{'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <div className='methods'>return</div> [
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2017-2017'</span> :
            <span className='string'>
              {' '}
              '{t('home.about.code.edu3')} - Google Actívate'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2013-2016'</span> :
            <span className='string'>
              {' '}
              '{t('home.about.code.edu2')} - Escuela de Artes y Letras'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2011-2011'</span> :
            <span className='string'>
              {' '}
              '{t('home.about.code.edu1')} - SENA'
            </span>{' '}
            {'}'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>]
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            {'}'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            <div className='comment'>// {t('home.about.code.skills')}</div>
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            <span className='function'>skills</span>() {'{'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <div className='methods'>return</div> [{' '}
            <span className='string'>'HTML/CSS/JS'</span>,{' '}
            <span className='string'>'TypeScript'</span>,{' '}
            <span className='string'>'Node.js'</span>,{' '}
            <span className='string'>'React'</span>,{' '}
            <span className='string'>'Vue.js'</span>,{' '}
            <span className='string'>'Angular'</span>,{' '}
            <span className='string'>'jQuery'</span>,{' '}
            <span className='string'>'SASS'</span>,{' '}
            <span className='string'>'PHP'</span>,{' '}
            <span className='string'>'MySQL'</span>,{' '}
            <span className='string'>'MongoDB'</span>,{' '}
            <span className='string'>'Firebase'</span>,{' '}
            <span className='string'>'GIT'</span>,{' '}
            <span className='string'>'Ubuntu/CentOS'</span>,{' '}
            <span className='string'>'IBM Watson'</span>,{' '}
            <span className='cursor'></span> ]
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            {'}'}
          </CodeLine>
          <CodeLine>{'}'}</CodeLine>
        </CodeContainer>
      </div>
    </section>
  );
};

export default AboutMe;
