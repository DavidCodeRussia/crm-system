import { NavLink } from "react-router-dom";
import cn from "classnames";
import s from "./MenuItem.module.scss";
import { TMenuItemProps } from "./types";

export const MenuItem: React.FC<TMenuItemProps> = ({
  path = "/",
  icon,
  text,
  flexWrap = true,
  isChild = false,
  isActive = true,
}) => {
  return (
    <li
      className={cn(s.item, s.outer, {
        [s.flexWrap]: flexWrap === true,
        [s.child]: isChild === true,
      })}>
      <NavLink to={path}>
        <span className={s.icon}>{icon}</span>
        <span className={s.text}>{text}</span>
      </NavLink>
      {isActive && <span className={s.stick}></span>}
    </li>
  );
};
