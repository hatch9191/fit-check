import { Flex, Typography } from "antd";
import React from "react";

import { ReactElementOrNull } from "@/types/common";

import { errorContainerStyle, errorTextStyle } from "./InputError.styled";

const { Text } = Typography;

type TInputErrorProps = {
  children?: string;
};

export function InputError({ children }: TInputErrorProps): ReactElementOrNull {
  if (!children) {
    return null;
  }

  return (
    <Flex style={errorContainerStyle}>
      <Text style={errorTextStyle}>{children}</Text>
    </Flex>
  );
}
