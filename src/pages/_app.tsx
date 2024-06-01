import { baseTheme } from "@feast-it/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "emotion-theming";
import { AppProps } from "next/app";
import React, { useState } from "react";

import { MAX_QUERY_ERROR_RETRIES } from "@/constants/reactquery";
import { FIFTEEN_MINUTES_IN_MS, FIVE_MINUTES_IN_MS } from "@/constants/time";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          // In general, we want to keepPreviousData
          // and turn it off when we don't want to use it
          queries: {
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            retry: MAX_QUERY_ERROR_RETRIES,
            cacheTime: FIFTEEN_MINUTES_IN_MS,
            staleTime: FIVE_MINUTES_IN_MS,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={baseTheme}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
