import { FC, ReactNode } from 'react';

const roundingClassnames = {
  large: 'rounded-lg',
  medium: 'rounded-md',
  small: 'rounded-md',
  tiny: 'rounded-5',
  round: 'rounded-full',
};
const shadowClassnames = {
  large: 'shadow-xl',
  medium: 'shadow-l',
  small: 'shadow-m',
  tiny: 'shadow-sm',
};

export type card = {
  children: ReactNode;
  className?: string;
  rounding?: keyof typeof roundingClassnames;
  shadow?: keyof typeof shadowClassnames;
  hoverable?: boolean;
};
export const Card: FC<card> = ({ rounding = 'large', shadow = 'large', className, children }) => {
  return (
    <div
      className={`
    ${roundingClassnames[rounding]}
    ${shadowClassnames[shadow]}
    p-5
     ${className}
  `}
    >
      {children}
    </div>
  );
};
