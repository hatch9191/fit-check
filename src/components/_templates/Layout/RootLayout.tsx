import React, { ReactElement } from "react";

import { Meta } from "@/templates/Meta";
import { TChildren } from "@/types/next";

export function RootLayout({ children }: TChildren): ReactElement {
  return (
    <>
      <Meta />

      <main>{children}</main>
    </>
  );
}
