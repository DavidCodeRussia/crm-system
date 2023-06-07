import s from "./SearchField.module.scss";
import { TSearchField } from "./types";

export const SearchField: React.FC<TSearchField> = ({ setter, placeholder }) => {
  return (
    <input
      className={s.field}
      type="text"
      onChange={(e) => setter(e.target.value)}
      placeholder={placeholder}
    />
  );
};
