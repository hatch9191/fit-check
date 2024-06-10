import React from "react";
import { Typography } from "antd";
import { ReactElementOrNull } from "@/types/common";

const { Title } = Typography;

type TInputLabelProps = {
  children?: string;
};

export function InputLabel({ children }: TInputLabelProps): ReactElementOrNull {
  if (!children) return null;

  return <Title level={5}>{children}</Title>;
}