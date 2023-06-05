import React from 'react';
import { MenuItem } from './MenuItem';
import { MenuGroup } from './MenuGroup';
import * as svg from '@assets/svg';
import s from './Menu.module.scss';

export const Menu = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <MenuItem icon={<svg.House />} text="Главная" />
        <MenuItem icon={<svg.Search />} text="Поиск адресов" />
        <MenuItem icon={<svg.Tables />} text="Таблицы" />
        <MenuItem icon={<svg.Calendar />} text="Календарь" />
        <MenuItem icon={<svg.ArrowLocation />} text="Карты" />
        <MenuItem icon={<svg.TV />} text="Виджеты" />
        <MenuGroup
          // location={pathname}          }
          icon={<svg.Settings />}
          text="Настройки"
          pathMatch="inbox">
          <MenuItem icon={<svg.Person />} text="Настройки профиля" />
          <MenuItem icon={<svg.HomePhone />} text="Управление финансами" />
        </MenuGroup>
      </ul>
    </nav>
  );
};
