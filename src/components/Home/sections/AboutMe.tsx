import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

let lineCounter = 0;
const CodeLine: React.FC = ({ children }) => {
  const [lineID, setLineID] = useState(lineCounter);

  useEffect(() => {
    lineCounter += 1;
    setLineID(lineCounter);
    return () => {
      lineCounter = 0;
      setLineID(lineCounter);
    };
  }, []);

  return (
    <div data-line-nr={lineID} className='code-l'>
      {children}{' '}
    </div>
  );
};

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='about-me'>
      <div className='container'>
        <h1>{t('home.about.title')}</h1>
        <code>
          <CodeLine>
            <div className='methods'>class</div>{' '}
            <span className='propname'>BarbosaCap</span> {'{'}
          </CodeLine>
          {/* <CodeLine>
            <div className='dot'>··</div>
            <div className='comment'>
              // My vast variety of skills is continuously expanding.
            </div>
          </CodeLine> */}
          <CodeLine>
            <div className='dot'>··</div>
            <div className='methods'>constructor</div>() {'{'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <span className='propname'>this</span>.
            <span className='proplabel'>name</span>{' '}
            <span className='scope'>=</span>{' '}
            <span className='string'>'David Barbosa'</span>;
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
            <span className='string'>'davidbarbosa.dev@gmail.com'</span>;
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <span className='propname'>this</span>.
            <span className='proplabel'>description</span>{' '}
            <span className='scope'>=</span>{' '}
            <span className='string'>
              'Software developer, focused on web applications'
            </span>;
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            {'}'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>··</div>
            <span className='function'>workExperience</span>() {'{'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <div className='methods'>return</div> [{' '}
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2019-2020'</span> :
            <span className='string'>
              {' '}
              'Software Engineer at Quantun Connexion'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2018-2019'</span> :
            <span className='string'>
              {' '}
              'Web Developer at Tradeview Ltd. / iLikeWebSites.com'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2016-2018'</span> :
            <span className='string'>
              {' '}
              'Web Designer at Tradeview Ltd. / iLikeWebSites.com'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2015-2016'</span> :
            <span className='string'>
              {' '}
              'Web Designer at Rampa Marketing Digital'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2015-2015'</span> :
            <span className='string'>
              {' '}
              'Web Designer at Data Solutions Group'
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
            <span className='function'>education</span>() {'{'}
          </CodeLine>
          <CodeLine>
            <div className='dot'>····</div>
            <div className='methods'>return</div> [{' '}
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2017-2017'</span> :
            <span className='string'>
              {' '}
              'Web development introduction - Google Actívate'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2013-2016'</span> :
            <span className='string'>
              {' '}
              'Graphic Designer - Escuela de Artes y Letras'
            </span>{' '}
            {'}'},
          </CodeLine>
          <CodeLine>
            <div className='dot'>······</div>
            {'{'} <span className='string'>'2011-2011'</span> :
            <span className='string'>
              {' '}
              'Projects development for applications in Engineering - SENA'
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
        </code>
      </div>
    </section>
  );
};

export default AboutMe;
