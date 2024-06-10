import { ReactElement } from "react";
import { Layout } from "antd";

import { headerStyle } from "./HeaderNav.styled";
import { MenuDropdown } from "@/molecules/Navigation/MenuDropdown";

const { Header } = Layout;

export function HeaderNav(): ReactElement {
  return (
    <Header style={headerStyle}>
      <MenuDropdown />
    </Header>
  );
}
