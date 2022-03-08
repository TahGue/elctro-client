import React, { ReactNode } from 'react';

const sizes = {
  large: 'py-2 px-2',
  md: 'py-1 px-1',
};

const colors = {
  primary: 'bg-primary text-white hover:text-primary hover:bg-white',
  grey: 'bg-white text-primary hover:text-white hover:bg-primary',
};

const roundeds = {
  full: ' rounded-full',
  sm: 'rounded-sm',
  lg: 'rounded-lg',
};

type Iprops = {
  children: ReactNode;
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  rounded?: keyof typeof roundeds;
  onClick: () => void;
  type?: string;
};

export default function Button({
  children,
  size = 'md',
  color = 'primary',
  rounded = 'sm',
  onClick,
  type = 'text',
}: Iprops) {
  return (
    <button
      className={`
       transition-all
       hover:animate-ping 
      ${sizes[size]} ${colors[color]} ${roundeds[rounded]}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
