import React, { ReactNode } from 'react';

type Iprops = {
  children: ReactNode;
};
const PaymentIcons = ({ children }: Iprops) => {
  return (
    <li
      className={`
              text-black hover:text-primary hover:bg-white
             transition cursor-pointer w-14 h-14 rounded-md
              flex justify-center items-center
               m-1 
             `}
    >
      {children}
    </li>
  );
};

export default PaymentIcons;