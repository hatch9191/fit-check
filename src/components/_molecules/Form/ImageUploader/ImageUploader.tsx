import { Upload, UploadFile, Image } from "antd";
import React, { ReactElement, useState } from "react";
import {
  ControllerRenderProps,
  UseFormSetValue,
  UseFormTrigger,
  Path,
} from "react-hook-form";

import { UploadButton } from "@/atoms/Form/UploadButton";
import { getBase64 } from "@/helpers/antd/upload";

type ImageUploaderProps<T> = {
  name: Path<T>;
  maxPhotos: number;
  setValue: UseFormSetValue<T>;
  trigger: UseFormTrigger<T>;
};

export function ImageUploader<T>({
  name,
  maxPhotos,
  setValue,
  trigger,
  ...props
}: ImageUploaderProps<T>): ReactElement {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

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
    <>
      <Upload
        {...props}
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
    </>
  );
}
