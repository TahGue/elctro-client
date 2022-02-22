import React from 'react';
import Image from 'next/image';
import { useSettings } from '../../hooks/useSettings';
import Link from 'next/link';
import CategoriesMenu from './../categoriesMenu/CategoriesMenu';
import SearchBar from '../../components/searchBar/SearchBar';
import MenuLinks from './../menuLinks/MenuLinks';
type Props = {};
const Header: React.FC<Props> = () => {
  const { companyLogo } = useSettings();
  return (
    <div className='flex justify-between items-center  py-3 '>
      <div className=' w-28'>
        <Link href='/'>
          <Image src={companyLogo} width={112} height={51} />
        </Link>
      </div>
      <div>
        <div className='flex'>
          <CategoriesMenu />
          <SearchBar />
        </div>
        <MenuLinks />
      </div>
      <div>Login</div>
    </div>
  );
};

export default Header;
