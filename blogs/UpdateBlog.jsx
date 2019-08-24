import React from "react";
import * as blogServices from "../../services/blogServices";
import logger from "../../logger";
import { Card, CardBody, CardHeader } from "reactstrap";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";
import * as schemas from "./schemas/updatePost.js";
import { BlogForm } from "./BlogForm";
const _logger = logger.extend("Tyson");

class UpdateBlog extends React.Component {
  constructor(props) {
    super(props);
    const propsBlog = props.location.state.blog;

    this.state = {
      targetSchema: schemas.updatePost,
      formData: {
        id: propsBlog.id,
        title: propsBlog.title,
        description: propsBlog.description,
        body: propsBlog.body,
        imageUrl: propsBlog.imageUrl,
        dateToPublish: propsBlog.dateToPublish,
        statusId: 1
      }
    };
  }

  componentDidMount() {
    this.timeDataFormat();
  }

  handleChange = e => {
    let formData = { ...this.state.formData };
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };

  onSubmit = values => {
    const payload = values;
    if (values.imageUrl === null || values.imageUrl === "") {
      payload.imageUrl =
        "https://summer.pes.edu/wp-content/uploads/2019/02/default-2.jpg";
    }
    _logger(payload.id);
    blogServices
      .updatePost(payload, payload.id)
      .then(this.updatePostSuccess)
      .catch(this.onGlobalError);
  };

  updatePostSuccess = () => {
    return (
      this.props.history.push("/admin/blogs"), toast.info("Blog Post Updated!")
    );
  };

  cancel = () => {
    toast.info("Update Cancelled");
  };

  getImageUrl = data => {
    this.setState(prevState => {
      let imageUrl = prevState.imageUrl;
      imageUrl = data.item[0].url;
      return { imageUrl };
    });
  };

  timeDataFormat = () => {
    const datePublish = new Date(this.state.formData.dateToPublish);
    const prePopulateTime = datePublish.toISOString().substr(0, 10);
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        dateToPublish: prePopulateTime
      }
    }));
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <h2>Update Blog</h2>
        </CardHeader>
        <CardBody>
          <div className="form-group row">
            <BlogForm
              getImageUrl={this.getImageUrl}
              handleChange={this.handleChange}
              targetSchema={this.state.targetSchema}
              formData={this.state.formData}
              onSubmit={this.onSubmit}
              updateSchema={this.updateSchema}
              cancel={this.cancel}
            />
          </div>
        </CardBody>
      </Card>
    );
  }
}

UpdateBlog.propTypes = {
  history: PropTypes.object,
  location: PropTypes.shape({
    state: PropTypes.shape({
      blog: PropTypes.object
    })
  }),
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    body: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    dateToPublish: PropTypes.string,
    statusId: PropTypes.number,
    dateCreated: PropTypes.string.isRequired,
    dateModified: PropTypes.string,
    createdBy: PropTypes.number
  })
};

export default UpdateBlog;
