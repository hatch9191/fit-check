import React, { ReactElement, ReactNode } from "react";

import { HeaderNav } from "@/organisms/Navigation/HeaderNav";
import { Meta } from "@/templates/Meta";

import {
  contentContainerStyle,
  mainContentContainerStyle,
} from "./DashboardLayout.styled";
import { Flex } from "antd";

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
      <main style={contentContainerStyle}>
        <Flex style={mainContentContainerStyle}>{children}</Flex>
      </main>
    </>
  );
}
