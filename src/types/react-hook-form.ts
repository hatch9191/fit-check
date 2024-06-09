import { FieldValues, Path, ControllerRenderProps } from "react-hook-form";

export type RenderProps<
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
> = {
  field: ControllerRenderProps<TFieldValues, TFieldName> & {
    error?: string;
  };
};
