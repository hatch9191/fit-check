import { ReactElement } from "react";
import { Button, Dropdown, Flex, MenuProps, Space, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { theme } from "antd";

import { createStyles } from "@/utils/styles";
import { PATHS } from "@/constants/paths";
import {
  containerStyle,
  menuIconStyle,
  menuStyle,
} from "./MenuDropdown.styled";

const { useToken } = theme;

export function MenuDropdown(): ReactElement {
  const { token } = useToken();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={PATHS.INBOX}>Inbox</Link>,
    },
    {
      key: "2",
      label: <Link href={PATHS.ACCOUNT}>Account</Link>,
    },
    {
      key: "3",
      label: <Link href={PATHS.HELP}>Help</Link>,
    },
  ];

  const menuContainerStyle = createStyles({
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  });

  return (
    <Flex style={containerStyle}>
      <Dropdown
        overlay={
          <div style={menuContainerStyle}>
            <Menu items={items} style={menuStyle} />

            <Space style={{ padding: 8 }}>
              <Button type="primary" onClick={() => console.log("logout")}>
                Log out
              </Button>
            </Space>
          </div>
        }
      >
        <a onClick={(event) => event.preventDefault()}>
          <MenuOutlined style={menuIconStyle} />
        </a>
      </Dropdown>
    </Flex>
  );
}
