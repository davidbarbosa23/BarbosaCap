import { ReactComponent as FlagES } from 'assets/img/flag_espana.svg';
import { ReactComponent as FlagUS } from 'assets/img/flag_usa.svg';

export type tAllowedLangs = 'en' | 'es';

export const defaultLang: string = 'en';

export const langsName: { [key: string]: string } = {
  en: 'English',
  es: 'Español',
};

export const langsList: string[] = Object.keys(langsName);

export const langsFlag: { [key: string]: JSX.Element } = {
  en: <FlagUS />,
  es: <FlagES />,
};
