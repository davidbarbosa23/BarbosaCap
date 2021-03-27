import React, { useRef, useState } from 'react';

import { NavLink as Link } from 'react-router-dom';

import useOutsideClick from 'helpers/useOutsideClick';

import styles from './styles.module.scss';

interface INavItemProps {
  to: string | null;
  content?: string | null;
  icon?: JSX.Element;
  className?: string;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const NavItem: React.FC<INavItemProps> = (props) => {
  const [childOpen, setChildOpen] = useState(false);
  const refItem = useRef(null);

  useOutsideClick(refItem, () => {
    setChildOpen(false);
  });

  return (
    <li ref={refItem} className={styles.navItem} onClick={() => setChildOpen(!childOpen)}>
      {props.to === null ? (
        <button className={props.className} onClick={props.clickHandler}>
          {props.icon}
          {props.content}
        </button>
      ) : (
        <Link
          exact={true}
          activeClassName={styles.active}
          className={props.className}
          to={props.to}
        >
          {props.icon}
          {props.content}
        </Link>
      )}

      {childOpen && props.children}
    </li>
  );
};

export default NavItem;
