import '../styles/index.css';
import type { AppProps } from 'next/app';
import PublicLayout from '../components/layout/PublicLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { StateContext, StateProvider } from '../providers/StateContext';
import { initialState, reducer } from '../providers/mainReducer';
import LocalStorageLoader from '../providers/LocalStorageLoader';
import FormsContainer from '../providers/FormsContainer';
import toast, { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <>
        <QueryClientProvider client={queryClient}>
          <LocalStorageLoader>
            <FormsContainer>
              <PublicLayout>
                <Component {...pageProps} />
              </PublicLayout>
            </FormsContainer>
          </LocalStorageLoader>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <Toaster />
      </>
    </StateProvider>
  );
}

export default MyApp;
