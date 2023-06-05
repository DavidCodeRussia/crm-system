import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../Menu';
import s from './Layot.module.scss';

export const Layot = () => {
  return (
    <div className={s.appContainer}>
      <Menu />
      <main className={s.appBody}>
        <Outlet />
      </main>
    </div>
  );
};
