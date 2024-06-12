import { Upload, UploadFile, Image } from "antd";
import React, { ReactElement, useState } from "react";
import {
  UseFormSetValue,
  UseFormTrigger,
  Path,
  FieldErrors,
  Control,
  Controller,
  FieldValues,
} from "react-hook-form";

import { UploadButton } from "@/atoms/Form/UploadButton";
import { getBase64 } from "@/helpers/antd/upload";

import { FormFieldLayout } from "../FormField/FormFieldLayout";

type ImageUploaderProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  maxPhotos: number;
  setValue: UseFormSetValue<T>;
  trigger: UseFormTrigger<T>;
  required?: boolean;
  label?: string;
  errors?: FieldErrors<T>;
  defaultValue?: any;
};

export function ImageUploaderFormField<T extends FieldValues>({
  name,
  control,
  maxPhotos,
  setValue,
  trigger,
  label,
  errors,
  defaultValue,
  required = false,
}: ImageUploaderProps<T>): ReactElement {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const errorMessage =
    errors && errors[name] ? (errors[name]?.message as string) : undefined;

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
    const photos = fileList.map((file) => file.originFileObj);

    setValue(name, photos as any);
    trigger(name);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormFieldLayout label={label} errorMessage={errorMessage}>
          <Upload
            {...field}
            accept=".jpeg,.jpg,.png"
            fileList={fileList}
            listType="picture-card"
            onChange={handleChange}
            onPreview={handlePreview}
            beforeUpload={() => false}
          >
            {fileList.length < maxPhotos && <UploadButton />}
          </Upload>

          {previewImage && (
            <Image
              alt="Preview image"
              wrapperStyle={{ display: "none" }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}
        </FormFieldLayout>
      )}
    />
  );
}
