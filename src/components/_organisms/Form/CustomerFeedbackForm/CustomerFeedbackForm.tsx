import { ReactElement } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, Input, Typography, Button, Form } from "antd";
import { errorTextStyle } from "./CustomerFeedbackForm.styled";
import { ImageUploader } from "@/molecules/Form/ImageUploader";
import { customerFeedbackFormSchema } from "./CustomerFeedbackForm.schema";
import { TCustomerFeedbackFormValues } from "./types";

const { Title, Text } = Typography;

const MAX_PHOTOS = 3;

export function CustomerFeedbackForm(): ReactElement {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<TCustomerFeedbackFormValues>({
    resolver: yupResolver(customerFeedbackFormSchema(MAX_PHOTOS)),
    criteriaMode: "all",
    shouldFocusError: false,
  });
  const onSubmit: SubmitHandler<TCustomerFeedbackFormValues> = (data) =>
    console.log(data);

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Flex gap={2} vertical={true}>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Form.Item>
              <Title level={5}>Description</Title>

              <Input.TextArea
                placeholder="Please enter a description..."
                minLength={100}
                maxLength={1000}
                {...field}
              />

              {errors.description && (
                <Text style={errorTextStyle}>{errors.description.message}</Text>
              )}
            </Form.Item>
          )}
        />

        <Form.Item>
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
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Flex>
    </Form>
  );
}
