import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, Input, Button, Form } from "antd";
import React, { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { FormField } from "@/molecules/Form/FormField";
import { ImageUploaderFormField } from "@/molecules/Form/ImageUploaderFormField";

import { customerFeedbackFormSchema } from "./CustomerFeedbackForm.schema";
import { formStyle } from "./CustomerFeedbackForm.styled";
import { TCustomerFeedbackFormValues } from "./types";

const MAX_PHOTOS = 3;

export function CustomerFeedbackForm(): ReactElement {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<TCustomerFeedbackFormValues>({
    resolver: yupResolver(customerFeedbackFormSchema(MAX_PHOTOS)) as any,
    criteriaMode: "all",
    shouldFocusError: false,
  });
  const onSubmit: SubmitHandler<TCustomerFeedbackFormValues> = (data) => data;

  return (
    <Form onFinish={handleSubmit(onSubmit)} style={formStyle}>
      <Flex gap={2} vertical={true}>
        <FormField
          name="description"
          control={control}
          required={true}
          label="Description"
          errors={errors}
          inputComponent={(props) => (
            <Input.TextArea
              {...props}
              placeholder="Please enter a description..."
              minLength={100}
              maxLength={1000}
              rows={5}
            />
          )}
        />

        <ImageUploaderFormField
          name="photos"
          control={control}
          maxPhotos={MAX_PHOTOS}
          setValue={setValue}
          trigger={trigger}
          label="Upload images"
          errors={errors}
          defaultValue={[]}
          required={true}
        />

        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </Flex>
    </Form>
  );
}
