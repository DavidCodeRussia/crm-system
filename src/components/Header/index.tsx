import React, { useEffect, useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import * as svg from "@assets/svg";
import { MenuItem } from "@components/Menu/MenuItem";
import { MenuGroup } from "@components/Menu/MenuGroup";
import burgerMenu from "@assets/png/burger.png";
import s from "./Header.module.scss";

export const Header = () => {
  const params = useMatch("");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const switchMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [params]);

  return (
    <header className={s.appHeader}>
      <div className={s.appHeaderInner}>
        <div className={s.appTitle}>
          <svg.Key />
          <h1>Wrench CRM</h1>
        </div>
        <div className={s.appUserInfo}>
          <svg.PersonInCircle />
          <div>Имя Фамилия</div>
          <div className={s.appBurgerMenu} onClick={switchMenu}>
            <img src={burgerMenu} alt="Открытие или закрытие меню" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={s.appBurgerMenuLinks}>
          <MenuItem path="/" icon={<svg.House />} text="Главная" />
          <MenuItem path="/address" icon={<svg.Search />} text="Поиск адресов" />
          <MenuItem icon={<svg.Tables />} text="Таблицы" />
          <MenuItem icon={<svg.Calendar />} text="Календарь" />
          <MenuItem icon={<svg.ArrowLocation />} text="Карты" />
          <MenuItem icon={<svg.TV />} text="Виджеты" />
          <MenuGroup icon={<svg.Settings />} text="Настройки" pathMatch="inbox">
            <MenuItem icon={<svg.Person />} text="Настройки профиля" isChild />
            <MenuItem icon={<svg.HomePhone />} text="Управление финансами" isChild />
          </MenuGroup>
        </div>
      )}
    </header>
  );
};
