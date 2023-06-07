import React from "react";
import { MenuItem } from "./MenuItem";
import { MenuGroup } from "./MenuGroup";
import * as svg from "@assets/svg";
import s from "./Menu.module.scss";

export const Menu = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.listTitle}>Меню</li>
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
        <MenuItem icon={<svg.Exit />} text="Выход" />
      </ul>
    </nav>
  );
};
