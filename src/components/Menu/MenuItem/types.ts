import { ReactNode } from "react";

export type TMenuItemProps = {
  path?: string;
  icon: ReactNode;
  text: string;
  flexWrap?: boolean;
  isChild?: boolean;
};
