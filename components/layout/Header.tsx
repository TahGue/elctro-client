import React from 'react';
import Image from 'next/image';
import { useSettings } from '../../hooks/useSettings';
import Link from 'next/link';

import SearchBar from '../../components/searchBar/SearchBar';
import MenuLinks from './../menuLinks/MenuLinks';
import CategoriesMenu from '../categoriesMenu/CategoriesMenu';
import AuthHeader from '../authHeaderSection/AuthHeader';
type Props = {};
const Header: React.FC<Props> = () => {
  const { companyLogo } = useSettings();
  return (
    <>
      <div className='flex items-center justify-between  py-3 w-full '>
        <div className='w-28'>
          <Link href='/'>
            <Image src={companyLogo} layout='fixed' width={150} height={51} />
          </Link>
        </div>
        <div className='w-1/2'>
          <div className='flex'>
            <CategoriesMenu />
            <SearchBar />
          </div>
        </div>
        <div className='w-60'>
          <AuthHeader />
        </div>
      </div>
      <MenuLinks />
    </>
  );
};

export default Header;
