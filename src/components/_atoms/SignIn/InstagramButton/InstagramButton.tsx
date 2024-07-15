import { signIn } from "next-auth/react";
import React, { ReactElement } from "react";

export function InstagramButton(): ReactElement {
  return (
    <button type="submit" onClick={() => signIn("instagram")}>
      Signin with Instagram
    </button>
  );
}
