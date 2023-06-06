import { ReactNode } from "react";

export type TMenuGroupProps = {
  pathMatch: string;
  location?: string;
  isActive?: boolean;
  text: string;
  children: ReactNode;
  icon: ReactNode;
};
