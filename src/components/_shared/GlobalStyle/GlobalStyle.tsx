import React, { ReactElement } from "react";
// import { labil_grotesk, recoleta } from "./fonts";

export const GlobalStyle = (): ReactElement => {
  return (
    <style jsx global>
      {`
        // :root {
        //   --font-labil: labil_grotesk.style.fontFamily;
        //   --font-recoleta: recoleta.style.fontFamily;
        // }

        html,
        body,
        main {
          height: 100%;
          margin: 0;
        }
      `}
    </style>
  );
};
