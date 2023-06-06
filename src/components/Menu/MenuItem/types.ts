import { ReactNode } from "react";

export type TMenuItemProps = {
  path?: string;
  inner?: boolean;
  flexWrap?: boolean;
  isChild?: boolean;
  isActive?: boolean;
  icon: ReactNode;
  text: string;
};
