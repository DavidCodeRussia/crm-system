import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Возникла непредвиденная ошибка!</h1>
      {/* <h2>Свяжитесь с службой технической поддержки SED</h2> */}
      <p>{/* Подробности: <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
}
