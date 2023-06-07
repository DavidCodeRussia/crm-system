import { ReactNode } from "react";

export type TMenuGroupProps = {
  pathMatch: string;
  location?: string;
  text: string;
  children: ReactNode;
  icon: ReactNode;
};
