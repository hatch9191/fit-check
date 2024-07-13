import * as yup from "yup";

const fileSchema = yup
  .mixed<File>()
  .test("is-file", "Must be a file", (value): value is File => {
    return value instanceof File;
  });

export const customerFeedbackFormSchema = (maxPhotos: number) => {
  return yup
    .object({
      description: yup.string().required("You need to enter a description"),
      photos: yup
        .array()
        .of(fileSchema)
        .min(1, "You need to add at least one image")
        .max(maxPhotos, `You can only add up to ${maxPhotos} images`),
    })
    .required();
};
