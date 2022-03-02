import React, { ReactNode } from 'react';

type IProps = {
  children: ReactNode;
  onClick: () => void;
};
export default function ButtonPrimary({ children, onClick }: IProps) {
  return (
    <button
      className=' border border-grey transition-all bg-primary text-white p-2 rounded-sm hover:bg-white hover:border-primary hover:text-primary '
      onClick={onClick}
    >
      {children}
    </button>
  );
}
