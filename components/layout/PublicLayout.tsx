import Head from 'next/head';
import React from 'react';
import { useSettings } from '../../hooks/useSettings';
import Footer from '../layout/Footer';
import TopBar from '../TopBar';
import Header from './Header';
import SubscribeForm from '../subscribe';
import { useStateValue } from '../../providers/StateContext';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const PublicLayout: React.FC<Props> = ({ children, title }) => {
  const { companyFavicon, companyName } = useSettings();
  const [{ user }] = useStateValue();

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
        <div className='my-10'>{children}</div>
        <br />
        <SubscribeForm />

        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
