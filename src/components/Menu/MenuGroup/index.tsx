import cn from "classnames";
import { useMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import * as svg from "@assets/svg";
import s from "./MenuGroup.module.scss";
import { TMenuGroupProps } from "./types";

export const MenuGroup: React.FC<TMenuGroupProps> = ({
  pathMatch,
  location,
  text,
  icon,
  children,
  isActive = true,
}) => {
  const isMatch = !!useMatch(`/${pathMatch}/*`);
  const [isOpen, setIsOpen] = useState(isMatch);

  const toggleItemOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    setIsOpen(isMatch);
  }, [isMatch, location]);

  return (
    <li
      className={cn(s.item, {
        [s.open]: isOpen,
        [s.active]: isMatch,
      })}>
      <div className={s.wrapperButton} onClick={toggleItemOpen}>
        <button type="button">
          <span className={s.icon}>{icon}</span>
          <span className={s.text}>{text}</span>
        </button>
        <span className={s.arrow}>{<svg.SmallArrow />}</span>
        {isActive && <span className={s.stick}></span>}
      </div>

      {isOpen && <ul className={s.innerContainer}>{children}</ul>}
    </li>
  );
};
