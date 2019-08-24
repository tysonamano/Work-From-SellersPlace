import React from "react";
import * as blogServices from "../../services/blogServices";
import logger from "../../logger";
import { Card, CardBody, CardHeader } from "reactstrap";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";
//import FileUploader from "../files/Files";
//import { Formik, Form, Field } from "formik";
import * as schemas from "./schemas/addPost.js";
import { BlogForm } from "./BlogForm";
const _logger = logger.extend("Tyson");

class CreateBlog extends React.Component {
  state = {
    targetSchema: schemas.addPost,
    formData: {
      title: "",
      description: "",
      body: "",
      statusId: 1,
      dateToPublish: "",
      imageUrl: ""
    },
    charsleft: 250,
    maxChar: 250
  };

  handleChange = e => {
    let formData = { ...this.state.formData };
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };

  onSubmit = values => {
    _logger(values);
    const payload = values;
    if (values.imageUrl === null || values.imageUrl === "") {
      payload.imageUrl =
        "https://summer.pes.edu/wp-content/uploads/2019/02/default-2.jpg";
    }
    _logger(payload);

    blogServices
      .createNewPost(payload)
      .then(this.createSuccess)
      .catch(this.onGlobalError);
  };

  createSuccess = () => {
    this.props.history.push("/admin/blogs");
  };

  cancel = () => {
    toast.info("Blog Post Cancelled");
  };

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const maxChar = this.state.maxChar;
    const charLength = maxChar - charCount;
    this.setState({ charsLeft: charLength });
  };
  // getImageUrl = data => {
  //   debugger;
  //   this.setState(() => {
  //     let imageUrl = data.item[0].url;
  //     return { imageUrl };
  //   });
  // };

  render() {
    return (
      <Card>
        <CardHeader>
          <h2>New Blog</h2>
        </CardHeader>
        <CardBody>
          <div className="form-group row">
            <BlogForm
              getImageUrl={this.getImageUrl}
              handleChange={this.handleChange}
              targetSchema={this.state.targetSchema}
              formData={this.state.formData}
              onSubmit={this.onSubmit}
              cancel={this.cancel}
              handleWordCount={this.handleWordCount}
              charsLeft={this.state.charsLeft}
            />
          </div>
        </CardBody>
      </Card>
    );
  }
}

CreateBlog.propTypes = {
  history: PropTypes.object
};

export default CreateBlog;
