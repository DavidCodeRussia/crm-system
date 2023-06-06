import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Menu } from "../Menu";
import s from "./Layot.module.scss";

export const Layot = () => {
  return (
    <div className={s.appContainer}>
      <Header />

      <main className={s.appBody}>
        <Menu />
        <Outlet />
      </main>
    </div>
  );
};
