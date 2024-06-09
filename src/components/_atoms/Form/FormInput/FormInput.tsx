import { RenderProps } from "@/types/react-hook-form";
import React from "react";
import { useController, FieldValues, Path, Control } from "react-hook-form";

type TFormInputProps<
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
> = {
  control: Control<TFieldValues>;
  name: TFieldName;
  render: ({ field }: RenderProps<TFieldValues, TFieldName>) => React.ReactNode;
};

export function FormInput<
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
>({ control, name, render }: TFormInputProps<TFieldValues, TFieldName>) {
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
