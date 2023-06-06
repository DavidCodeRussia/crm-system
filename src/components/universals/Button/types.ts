import { ReactNode } from "react";

export type TButtonProps = {
  icon?: ReactNode;
  text: string;
  backgroundColor?: string;
  onClick: () => void;
};
