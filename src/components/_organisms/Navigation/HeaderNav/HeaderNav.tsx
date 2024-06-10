import { Layout } from "antd";
import React, { ReactElement } from "react";

import { MenuDropdown } from "@/molecules/Navigation/MenuDropdown";

import { headerStyle } from "./HeaderNav.styled";

const { Header } = Layout;

export function HeaderNav(): ReactElement {
  return (
    <Header style={headerStyle}>
      <MenuDropdown />
    </Header>
  );
}
