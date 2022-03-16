import { appWithTranslation } from "next-i18next";
import "../styles/index.css";
import type { AppProps } from "next/app";
import PublicLayout from "../components/layout/PublicLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import nextI18NextConfig from "../next-i18next.config";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
