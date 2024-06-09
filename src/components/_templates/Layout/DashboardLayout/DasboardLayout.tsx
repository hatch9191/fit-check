import React, { ReactElement, ReactNode } from "react";
import { Flex } from "antd";
import {
  contentContainerStyle,
  dashboardContainerStyle,
} from "./DashboardLayout.styled";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({
  children,
}: DashboardLayoutProps): ReactElement {
  return (
    <>
      <Flex style={dashboardContainerStyle}>
        <Flex style={contentContainerStyle}>{children}</Flex>
      </Flex>
    </>
  );
}
