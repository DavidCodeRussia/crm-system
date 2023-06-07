import { NavLink, useMatch } from "react-router-dom";
import { TMenuItemProps } from "./types";
import cn from "classnames";
import s from "./MenuItem.module.scss";

export const MenuItem: React.FC<TMenuItemProps> = ({
  path = "",
  icon,
  text,
  flexWrap = true,
  isChild = false,
}) => {
  const match = useMatch(path);

  let isActive = path === match?.pathname;
  return (
    <li
      className={cn(s.item, s.outer, {
        [s.flexWrap]: flexWrap === true,
        [s.child]: isChild === true,
        [s.blockClick]: path === "",
      })}>
      <NavLink to={path}>
        <span className={s.icon}>{icon}</span>
        <span className={s.text}>{text}</span>
      </NavLink>
      {isActive && <span className={s.stick}></span>}
    </li>
  );
};
