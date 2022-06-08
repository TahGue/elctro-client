import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import KlarnaPage from './KlarnaPage';

function KlarnaContainer() {
  return (
    <>
      <Head>
        <script async src='https://x.klarnacdn.net/kp/lib/v1/api.js'></script>
      </Head>
      <KlarnaPage />
    </>
  );
}

export default KlarnaContainer;
