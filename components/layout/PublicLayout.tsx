import Head from 'next/head';
import React from 'react';
import { useSettings } from '../../hooks/useSettings';
import TopBar from '../TopBar';
import Header from './Header';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const PublicLayout: React.FC<Props> = ({ children, title }) => {
  const { companyFavicon, companyName } = useSettings();

  return (
    <>
      <Head>
        <link
          rel='shortcut icon'
          href='https://electromobil.se/wp-content/uploads/2018/12/favicon.png'
          type='image/x-icon'
        ></link>
        <title>{companyName}</title>
      </Head>
      <div className='mx-40 my-5'>
        <TopBar />
        <Header />
        {children}
      </div>
    </>
  );
};

export default PublicLayout;
