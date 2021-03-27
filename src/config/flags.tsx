import { ReactComponent as FlagES } from 'assets/img/flag_espana.svg';
import { ReactComponent as FlagUS } from 'assets/img/flag_usa.svg';

export const flags: { [key: string]: JSX.Element } = {
  en: <FlagUS />,
  es: <FlagES />,
};
