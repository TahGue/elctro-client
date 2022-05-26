import Axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BiCategory } from 'react-icons/bi';
import { ClickAway } from '../../../ui/ClickAway';
import { useCategories } from '../categoryHooks/useCategories';

import CategoriesList from './CategoriesList';

export default function CategoriesMenu() {
  const [displayDialog, setDisplayDialog] = useState(false);
  const { data, isLoading, isError } = useCategories();
  // useCallback();

  //  useContext();

  if (isLoading) return <p>loading</p>;

  return (
    <div className='relative'>
      <span
        onClick={() => setDisplayDialog(!displayDialog)}
        className={`
      flex justify-center items-center
      w-12 h-12 bg-lightgreyx2  text-grey rounded-lg
      cursor-pointer
      hover:bg-primary   
      hover:text-white
        `}
      >
        <BiCategory size={22} />
      </span>
      {displayDialog && (
        <ClickAway onClickAway={() => setDisplayDialog(false)}>
          <div className=' absolute z-50  p-4 shadow-md w-52 h-64  bg-white rounded-sm overflow-auto'>
            <CategoriesList categories={data} />
          </div>
        </ClickAway>
      )}
    </div>
  );
}
