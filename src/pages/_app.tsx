import { AppProps } from "next/app";
import React from "react";

import { RootLayout } from "@/templates/Layout/RootLayout";
import { Providers } from "@/shared/Providers";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Providers>
  );
};

export default App;
