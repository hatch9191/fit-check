import React, { FC, PropsWithChildren } from "react";

// This is a boilerplate test component. It's likely you'll want to delete this when starting your own app.

type TLinkProps = {
  href: string;
};
export const Link: FC<PropsWithChildren<TLinkProps>> = ({ children, href }) => (
  <a href={href}>{children}</a>
);
