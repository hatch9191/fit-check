import { Textarea } from "@chakra-ui/react";

export function TextArea({ field, placeholder }) {
  return <Textarea placeholder="Please enter description..." {...field} />;
}
