import { AppProps } from "next/app";
import React from "react";

import { Providers } from "@/shared/Providers";
import { DashboardLayout } from "@/templates/Layout/DashboardLayout";

type TMyAppProps = AppProps & {
  Component: AppProps["Component"] & {
    hideHeader?: boolean;
  };
};

const App = ({ Component, pageProps }: TMyAppProps) => {
  return (
    <Providers>
      <DashboardLayout>
        <Component {...pageProps} showHeader={Component.hideHeader} />
      </DashboardLayout>
    </Providers>
  );
};

export default App;
