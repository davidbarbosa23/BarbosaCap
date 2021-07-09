import { useLocation } from 'react-router-dom';

import AppLangs from 'config/AppLangs';
import { flags } from 'config/flags';

import { useCurrentPath } from 'contexts/currentPath';

import { langUrl } from 'helpers/language';

import NavItem from '../NavItem';

import styles from './styles.module.scss';

const LangSelector: React.FC = () => {
  const location = useLocation();
  const { lang, path }: any = useCurrentPath();

  return (
    <ul className={styles.langSelector}>
      {Object.entries(AppLangs).map(([key, value], index) => {
        return (
          <NavItem
            key={index}
            to={langUrl(key, path ? `/${lang}${path[key]}` : location.pathname)}
            content={value}
            icon={flags[key]}
          ></NavItem>
        );
      })}
    </ul>
  );
};

export default LangSelector;
