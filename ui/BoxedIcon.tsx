import React, { ReactNode } from 'react';

type Iprops = {
  children: ReactNode;
};
const BoxedIcon = ({ children }: Iprops) => {
  return (
    <li
      className={`
              bg-primary text-white hover:text-primary hover:bg-white
             transition cursor-pointer w-8 h-8 rounded-md
              flex justify-center items-center
               m-1 
             `}
    >
      {children}
    </li>
  );
};

export default BoxedIcon;
