import React, { ReactElement, ElementType } from "react";
import {
  Controller,
  FieldErrors,
  FieldValues,
  Control,
  Path,
} from "react-hook-form";

import { FormFieldLayout } from "./FormFieldLayout";

type TFormFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  inputComponent: ElementType;
  required?: boolean;
  label?: string;
  errors?: FieldErrors<T>;
  defaultValue?: any;
};

export function FormField<T extends FieldValues>({
  name,
  control,
  required = false,
  label,
  errors,
  defaultValue,
  inputComponent: InputComponent,
}: TFormFieldProps<T>): ReactElement {
  const errorMessage =
    errors && errors[name] ? (errors[name]?.message as string) : undefined;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormFieldLayout label={label} errorMessage={errorMessage}>
          <InputComponent {...field} />
        </FormFieldLayout>
      )}
    />
  );
}
