import React, { ReactElement, ReactNode } from "react";
import { contentContainerStyle } from "./DashboardLayout.styled";
import { HeaderNav } from "@/organisms/Navigation/HeaderNav";
import { Meta } from "@/templates/Meta";

interface DashboardLayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

export function DashboardLayout({
  children,
  hideHeader,
}: DashboardLayoutProps): ReactElement {
  return (
    <>
      <Meta />

      {!hideHeader && <HeaderNav />}

      <main style={contentContainerStyle}>{children}</main>
    </>
  );
}
