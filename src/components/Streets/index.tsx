import cn from "classnames";
import s from "./Streets.module.scss";
import { TStreetsProps } from "./types";

export const Streets: React.FC<TStreetsProps> = ({ streets }) => {
  return (
    <div className={s.streetsWrapper}>
      <div className={s.streetsTitle}>Адреса</div>
      <div className={s.streetsItems}>
        {streets.map((item, key) => {
          return (
            <div
              key={key}
              className={cn(s.streetsItem, {
                [s.streetsItemBorder]: streets?.length - 1 !== key,
              })}>
              {item.unrestricted_value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
