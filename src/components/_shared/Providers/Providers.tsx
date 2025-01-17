import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ConfigProvider } from "antd";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { ReactElement, ReactNode, useState } from "react";

import { MAX_QUERY_ERROR_RETRIES } from "@/constants/reactQuery";
import { FIFTEEN_MINUTES_IN_MS, FIVE_MINUTES_IN_MS } from "@/constants/time";
import { GlobalStyle } from "@/shared/GlobalStyle";

interface ProvidersProps {
  session?: Session | null;
  children: ReactNode;
}

export function Providers({ session, children }: ProvidersProps): ReactElement {
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
      <SessionProvider session={session}>
        <GlobalStyle />
        <ConfigProvider>{children}</ConfigProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
