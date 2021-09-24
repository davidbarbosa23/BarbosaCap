import React, { ComponentClass, FC } from 'react';
import { IntlProvider } from 'react-intl';
import { Route, Redirect } from 'react-router-dom';
import { AppLanguage } from 'constant/app-languages';

import { LanguageStrings } from 'config/i18n';

interface Props {
  RouterComponent: ComponentClass;
  languages: { [k: number]: string };
  appStrings: { [prop: string]: LanguageStrings };
  defaultLanguage?: AppLanguage;
}

const LocalizedRouter: FC<Props> = ({
  children,
  RouterComponent,
  appStrings,
  defaultLanguage = AppLanguage.English,
}) => (
  <RouterComponent>
    <Route path="/:lang([a-zA-Z]{2})">
      {({ match, location }) => {
        /**
         * Get current language
         * Set default locale to en if base path is used without a language
         */
        const params: { lang?: string } = match ? match.params : {};
        const { lang = defaultLanguage } = params;

        /**
         * If language is not in route path, redirect to language root
         */
        const { pathname } = location;
        if (!pathname.includes(`/${lang}/`)) return <Redirect to={`/${lang}/`} />;

        /**
         * Return Intl provider with default language set
         */
        return (
          <IntlProvider locale={lang} messages={appStrings[lang]}>
            {children}
          </IntlProvider>
        );
      }}
    </Route>
  </RouterComponent>
);

export default LocalizedRouter;
