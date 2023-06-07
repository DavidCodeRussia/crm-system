import { useState } from "react";
import { Button } from "../../components/universals/Button";
import { SearchField } from "../../components/universals/SearchField";
import * as svg from "@assets/svg";
import s from "./SearchAddress.module.scss";
import { Streets } from "../../components/Streets";
import { options } from "@src/API";
import { TStreets } from "./types";

export const SearchAddressPage = () => {
  const [value, setValue] = useState(""); // value из поля ввода с адресами
  const [streets, setStreets] = useState<TStreets | null>(null);
  const [status, setStatus] = useState<number | null>(null); // переключение ошибок

  const getAddresse = async (street: string) => {
    fetch(
      `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address?query=${street}`,
      options,
    )
      .then((response) => {
        console.log("status", response.status);
        setStatus(null);
        return response.json();
      })
      .then((result) => setStreets(result))
      .catch((error) => setStatus(error));
  };

  return (
    <div className={s.addressWrapper}>
      <h2 className={s.addressTitle}>Поиск адресов</h2>
      <div className={s.addressDescription}>Введите интересующий вас адрес</div>
      <div className={s.addressSearch}>
        <div className={s.addressSearchField}>
          <SearchField setter={setValue} placeholder={"Введите интересующий вас адрес"} />
        </div>

        <div className={s.addressSearchButton}>
          <Button
            icon={<svg.Search />}
            onClick={() => getAddresse(value)}
            text={"Поиск"}
            backgroundColor={"#4F27BF"}
          />
        </div>
      </div>

      {status === 200 || status === null ? (
        <Streets streets={streets?.suggestions || []} />
      ) : (
        <div>Ошибка при загрузке данных. Попробуйте повторить запрос.</div>
      )}
    </div>
  );
};
