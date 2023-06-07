import s from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  return (
    <div className={s.error}>
      Страницы на которую прозошел переход, не существует. Воспользуйтесь меню для навигации по
      приложению.
    </div>
  );
};
