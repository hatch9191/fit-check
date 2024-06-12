import { Form } from "antd";
import React, { ReactNode } from "react";

import { InputError } from "../../../../_atoms/Form/InputError";
import { InputLabel } from "../../../../_atoms/Form/InputLabel";

interface TFormFieldLayoutProps {
  children: ReactNode;
  label?: string;
  errorMessage?: string;
}

export function FormFieldLayout({
  label,
  errorMessage,
  children,
}: TFormFieldLayoutProps) {
  return (
    <Form.Item validateStatus={errorMessage ? "error" : ""}>
      <InputLabel>{label}</InputLabel>
      {children}
      <InputError>{errorMessage}</InputError>
    </Form.Item>
  );
}
