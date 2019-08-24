import * as yup from "yup";

const updatePost = yup.object().shape({
  // id: yup.number(),
  title: yup.string().required("Must have a title"),
  body: yup.string().required("Must have content within the body")
});

export { updatePost };
