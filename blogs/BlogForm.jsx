import React from "react";
import { Formik, Form, Field } from "formik";
import { PropTypes } from "prop-types";
import FileUploader from "../files/Files";
import { Link } from "react-router-dom";
//import logger from "../../logger";
//const _logger = logger.extend("Tyson");

const BlogForm = props => {
  return (
    <div className="form-container">
      <Formik
        enableReinitialize={true}
        validationSchema={props.targetSchema}
        initialValues={props.formData}
        onSubmit={props.onSubmit}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleSubmit,
            isSubmitting
          } = props;

          const getImageUrl = data => {
            return (values.imageUrl = data.item[0].url);
          };
          // const CustomInputComponent =({
          //   field, { name, value, onChange, onBlur }
          //   ,form: { touched, errors }, // values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          //   ...props
          // }) => (
          //   <div>
          //     <input type="file" {...field} {...props} />
          //     {touched[field.name] &&
          //       errors[field.name] && <div className="error">{errors[field.name]}</div>
          //     }
          //   </div>
          // )

          return (
            <div className="col-md-4">
              <Form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-group">
                    <label>Title:</label>
                    <Field
                      name="title"
                      type="text"
                      placeholder="Title"
                      value={values.title}
                      onChange={props.handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.title && touched.title
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.title && touched.title && (
                      <span className="input-feedback">{errors.title}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <Field
                      component="textarea"
                      rows="5"
                      cols="45"
                      maxLength="350"
                      required
                      name="description"
                      type="text"
                      style={{ height: "120px", width: "550px" }}
                      placeholder="Put a description! (250 character max)"
                      value={values.description}
                      onChange={props.handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.description && touched.description
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.description && touched.description && (
                      <span className="input-feedback">
                        {errors.description}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Body:</label>
                    <Field
                      component="textarea"
                      rows="5"
                      cols="50"
                      name="body"
                      type="text"
                      style={{ height: "500px", width: "550px" }}
                      placeholder="Type something here!"
                      value={values.body}
                      onChange={props.handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.body && touched.body
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.body && touched.body && (
                      <span className="input-feedback" style={{}}>
                        {errors.body}
                      </span>
                    )}
                  </div>
                  <Field>
                    {({ field, form }) => (
                      <div className="col-md-4" style={{ paddingBottom: "3%" }}>
                        <FileUploader getUrl={getImageUrl} {...field} />
                        {form.touched[field.name] &&
                          form.errors[field.name] && (
                            <div className="error">
                              {form.errors[field.name]}
                            </div>
                          )}
                      </div>
                    )}
                  </Field>
                  {values.imageUrl && (
                    <div>
                      <img
                        src={values.imageUrl}
                        alt="Blog"
                        style={{ width: "100%" }}
                      />
                    </div>
                  )}
                  <div className="form-group">
                    <label>Date To Publish:</label>
                    <Field
                      name="dateToPublish"
                      type="date"
                      value={values.dateToPublish}
                      onChange={props.handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.title && touched.title
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                  </div>
                  <div className="row">
                    <span>
                      <Link
                        to="/admin/blogs/"
                        className="btn btn-pill-left btn-warning"
                        type="button"
                        onClick={props.cancel}
                      >
                        Cancel
                      </Link>
                      <button
                        className="btn btn-pill-right btn-primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Save changes
                      </button>
                    </span>
                  </div>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

BlogForm.propTypes = {
  handleWordCount: PropTypes.func,
  charsLeft: PropTypes.number,
  maxChar: PropTypes.number,
  cancel: PropTypes.func,
  updateSchema: PropTypes.object,
  targetSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  handleBlur: PropTypes.object,
  handleSubmit: PropTypes.object,
  isSubmitting: PropTypes.object,
  imageUrl: PropTypes.string,
  formData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    imageUrl: PropTypes.string,
    statusId: PropTypes.number,
    dateToPublish: PropTypes.string
  })
};
export { BlogForm };
