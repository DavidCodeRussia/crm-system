import s from "./SearchField.module.scss";
import { TSeaechField } from "./types";

export const SearchField: React.FC<TSeaechField> = ({ placeholder }) => {
  return <input className={s.field} type="text" placeholder={placeholder} />;
};
