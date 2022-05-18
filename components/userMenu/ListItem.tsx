import React from 'react';

type IProps = {
  Icon: React.ReactNode;
  title: string;
  onClick: () => void;
};
function ListItem({ Icon, title, onClick }: IProps) {
  return (
    <div
      onClick={onClick}
      className='flex p-2 items-center border-b cursor-pointer border-b-lightgreyx2 hover:bg-primary hover:text-white '
    >
      <span>{Icon}</span>
      <span>{title}</span>
    </div>
  );
}

export default ListItem;
