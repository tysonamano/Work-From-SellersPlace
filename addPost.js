import * as yup from "yup";

const addPost = yup.object().shape({
  // id: yup.number(),
  title: yup.string().required("Must have a title"),
  body: yup.string().required("Must have content within the body"),
  description: yup.string().max("350")
});

export { addPost };
