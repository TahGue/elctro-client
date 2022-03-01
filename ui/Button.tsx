import React, { ReactNode } from 'react';

const sizes = {
  large: 'py-2 px-2',
  md: 'py-1 px-1',
};

const colors = {
  primary:
    'group bg-primary text-white group-hover:text-primary group-hover:bg-gray',
  grey: 'bg-grey',
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
};

export default function Button({
  children,
  size = 'md',
  color = 'primary',
  rounded = 'sm',
}: Iprops) {
  return (
    <button
      className='bg-lightgreyx2  text-grey rounded-lg
      cursor-pointer
      hover:bg-primary   
      hover:text-white transition-all py-2 px-2 m-3'
    >
      {children}
    </button>
  );
}
