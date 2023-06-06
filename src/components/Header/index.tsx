import * as svg from "@assets/svg";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.appHeader}>
      <div className={s.appTitle}>
        <svg.Key />
        <h1>Wrench CRM</h1>
      </div>
      <div className={s.appUserInfo}>
        <svg.PersonInCircle />
        <div>Имя Фамилия</div>
      </div>
    </header>
  );
};
