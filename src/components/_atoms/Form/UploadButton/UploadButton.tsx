import { PlusOutlined } from "@ant-design/icons";
import React, { ReactElement } from "react";

export function UploadButton(): ReactElement {
  return (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
}
