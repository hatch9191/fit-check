import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, Input, Button, Form } from "antd";
import React, { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { ImageUploader } from "@/molecules/Form/ImageUploader";

import { customerFeedbackFormSchema } from "./CustomerFeedbackForm.schema";
import { formStyle } from "./CustomerFeedbackForm.styled";
import { TCustomerFeedbackFormValues } from "./types";
import { FormField } from "@/molecules/Form/FormField";

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
  const onSubmit: SubmitHandler<TCustomerFeedbackFormValues> = (data) =>
    console.log(data);

  return (
    <Form onFinish={handleSubmit(onSubmit)} style={formStyle}>
      <Flex gap={2} vertical={true}>
        {/* <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Form.Item>
              <InputLabel>Description</InputLabel>

              <Input.TextArea
                placeholder="Please enter a description..."
                minLength={100}
                maxLength={1000}
                rows={5}
                {...field}
              />

              <InputError>{errors.description.message}</InputError>
            </Form.Item>
          )}
        /> */}

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

        <FormField
          name="photos"
          control={control}
          required={true}
          defaultValue={[]}
          label="Photo upload"
          errors={errors}
          inputComponent={(props) => (
            <ImageUploader<TCustomerFeedbackFormValues>
              {...props}
              name="photos"
              maxPhotos={MAX_PHOTOS}
              setValue={setValue}
              trigger={trigger}
            />
          )}
        />

        {/* <Form.Item>
          <Title level={5}>Photo upload</Title>

          <Controller
            name="photos"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <ImageUploader<TCustomerFeedbackFormValues>
                name="photos"
                field={field}
                maxPhotos={MAX_PHOTOS}
                setValue={setValue}
                trigger={trigger}
              />
            )}
          />

          {errors.photos && (
            <Text style={errorTextStyle}>{errors.photos.message}</Text>
          )}
        </Form.Item> */}

        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </Flex>
    </Form>
  );
}
