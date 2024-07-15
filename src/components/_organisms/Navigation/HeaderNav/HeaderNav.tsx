import { Button, Layout } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { ReactElement } from "react";

import { MenuDropdown } from "@/molecules/Navigation/MenuDropdown";

import { headerStyle } from "./HeaderNav.styled";

const { Header } = Layout;

export function HeaderNav(): ReactElement {
  const { data: session, status } = useSession();
  const isLoadingSession = status === "loading";

  return (
    <Header style={headerStyle}>
      {Boolean(session) && !isLoadingSession && (
        <>
          <MenuDropdown />

          <Button
            onClick={() => signOut()}
            type="primary"
            size="large"
            ghost={true}
          >
            Log out
          </Button>
        </>
      )}

      {!session && !isLoadingSession && (
        <Button onClick={() => signIn()} type="primary" size="large">
          Sign in
        </Button>
      )}
    </Header>
  );
}
