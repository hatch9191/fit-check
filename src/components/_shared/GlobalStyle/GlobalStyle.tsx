import React, { ReactElement } from "react";

export const GlobalStyle = (): ReactElement => {
  return (
    <style>
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

        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          font: inherit;
          outline: inherit;
        }
      `}
    </style>
  );
};
