import { Form } from "antd";
import { InputLabel } from "../../../../_atoms/Form/InputLabel";
import { InputError } from "../../../../_atoms/Form/InputError";
import { ReactNode } from "react";

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
    <Form.Item>
      <InputLabel>{label}</InputLabel>

      {children}

      <InputError>{errorMessage}</InputError>
    </Form.Item>
  );
}
