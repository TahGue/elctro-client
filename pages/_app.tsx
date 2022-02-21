import '../styles/index.css';
import type { AppProps } from 'next/app';
import PublicLayout from '../components/layout/PublicLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PublicLayout>
      <Component {...pageProps} />
    </PublicLayout>
  );
}

export default MyApp;
