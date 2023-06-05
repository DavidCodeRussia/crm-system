import { ReactNode } from 'react';

export type TMenuItemProps = {
  path?: string;
  inner?: boolean;
  icon: ReactNode;
  text: string;
};
