import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import s from './MenuItem.module.scss';
import { TMenuItemProps } from './types';

export const MenuItem: React.FC<TMenuItemProps> = ({ path = '/', inner = false, icon, text }) => {
  return (
    <li className={cn(s.item, inner ? s.inner : s.outer)}>
      <NavLink to={path}>
        <span className={s.icon}>{icon}</span>
        <span className={s.text}>{text}</span>
      </NavLink>
    </li>
  );
};
