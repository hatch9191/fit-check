import Head from "next/head";
import React, { ReactElement } from "react";

interface MetaProps {
  subtitle?: string;
}

export function Meta({ subtitle = "" }: MetaProps): ReactElement {
  const mainTitle = "FitCheck";
  const customTitle = subtitle ? `${subtitle} | ${mainTitle}` : mainTitle;

  return (
    <Head>
      <title>{customTitle}</title>
    </Head>
  );
}
