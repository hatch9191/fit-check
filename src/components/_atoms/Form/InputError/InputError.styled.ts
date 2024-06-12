import { red, gray } from "@ant-design/colors";

import { createStyles } from "@/utils/styles";

export const errorTextStyle = createStyles({
  color: "white",
  fontWeight: 600,
});

export const errorContainerStyle = createStyles({
  backgroundColor: red[3],
  border: `1px solid ${gray[5]}`,
  borderRadius: "15px",
  padding: "12px",
  marginTop: "8px",
});
