import React from 'react';

type Iprops = {
  title: string;
  onClick: () => void;
  Icon?: React.ReactNode;
  current?: boolean;
};
function TopMenuItem({ title, onClick, Icon, current }: Iprops) {
  return (
    <div
      onClick={onClick}
      className={`p-4 inline-block border border-lightgreyx2 cursor-pointer
       transition hover:-translate-y-1
      ${current && 'border-b-white'} `}
    >
      <span className='pr-2'>{Icon}</span>
      <span className=' text-grey'>{title}</span>
    </div>
  );
}

export default TopMenuItem;
