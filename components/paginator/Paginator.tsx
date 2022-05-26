import React from 'react';

type IProps = {
  totalItems: number;
  perPage: number;
  onSelectPage: (a: number) => void;
  currentPage: number;
};
function Paginator({
  totalItems,
  perPage = 21,
  onSelectPage,
  currentPage,
}: IProps) {
  const numberOfPages = Math.floor(totalItems / perPage) + 1;
  const pages = [...Array(numberOfPages).keys()];

  return (
    <div className='flex w-full justify-center items-center pt-4'>
      {pages?.map((page) => (
        <div
          onClick={() => onSelectPage(page + 1)}
          key={page}
          className={`p-1 m-1 cursor-pointer rounded-lg
           w-12 h-12 flex justify-center items-center text-lg
           ${
             currentPage === page + 1
               ? ' bg-primary text-white'
               : 'bg-white border border-grey text-grey'
           }
          `}
        >
          {page + 1}
        </div>
      ))}
    </div>
  );
}

export default Paginator;
