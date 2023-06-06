import React from "react";
import s from "./Button.module.scss";
import { TButtonProps } from "./types";

export const Button: React.FC<TButtonProps> = ({ icon, text, backgroundColor, onClick }) => {
  return (
    <div
      className={s.addressSearchField}
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
      }}>
      {icon && icon}
      <div>{text}</div>
    </div>
  );
};
