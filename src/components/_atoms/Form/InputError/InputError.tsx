import React from "react";
import { Typography } from "antd";
import { errorTextStyle } from "./InputError.styled";
import { ReactElementOrNull } from "@/types/common";

const { Text } = Typography;

type TInputErrorProps = {
  children?: string;
};

export function InputError({ children }: TInputErrorProps): ReactElementOrNull {
  if (!children) return null;

  return <Text style={errorTextStyle}>{children}</Text>;
}
