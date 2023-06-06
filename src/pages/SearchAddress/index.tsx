import React from "react";
import { Button } from "../../components/universals/Button";
import { SearchField } from "../../components/universals/SearchField";
import * as svg from "@assets/svg";
import s from "./SearchAddress.module.scss";
import { Streets } from "../../components/Streets";

export const SearchAddressPage = () => {
  const streets = [1, 2, 3];

  return (
    <div className={s.addressWrapper}>
      <h2 className={s.addressTitle}>Поиск адресов</h2>
      <div className={s.addressDescription}>Введите интересующий вас адрес</div>
      <div className={s.addressSearch}>
        <div className={s.addressSearchField}>
          <SearchField placeholder={"Введите интересующий вас адрес"} />
        </div>

        <div className={s.addressSearchButton}>
          <Button
            icon={<svg.Search />}
            onClick={() => console.log("shees")}
            text={"Поиск"}
            backgroundColor={"#4F27BF"}
          />
        </div>
      </div>

      <Streets streets={streets} />
    </div>
  );
};
