import { useLocation } from 'react-router-dom';
import AppLangs from 'config/AppLangs';
import { flags } from 'config/flags';
import { langUrl } from 'helpers/language';

import NavItem from '../NavItem';

const LangSelector: React.FC = () => {
  const location = useLocation();

  return (
    <ul className='lang-selector'>
      {Object.entries(AppLangs).map(([key, value], index) => {
        return (
          <NavItem
            key={index}
            to={langUrl(key, location.pathname)}
            content={value}
            icon={flags[key]}
          ></NavItem>
        );
      })}
    </ul>
  );
};

export default LangSelector;
