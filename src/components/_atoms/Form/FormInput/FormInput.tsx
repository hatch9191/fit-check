import React, { ReactElement, ReactNode } from "react";
import { useController, FieldValues, Path, Control } from "react-hook-form";

import { RenderProps } from "@/types/react-hook-form";

type TFormInputProps<
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
> = {
  control: Control<TFieldValues>;
  name: TFieldName;
  render: ({ field }: RenderProps<TFieldValues, TFieldName>) => ReactNode;
};

export function FormInput<
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
>({
  control,
  name,
  render,
}: TFormInputProps<TFieldValues, TFieldName>): ReactElement {
  const { field, fieldState } = useController({
    name,
    control,
  });

  return (
    <>
      {render({
        field: {
          ...field,
          error: fieldState.error?.message,
        },
      })}
    </>
  );
}
