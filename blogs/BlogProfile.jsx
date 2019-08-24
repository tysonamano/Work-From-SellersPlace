import React from "react";
import BlogProfileHeader from "./BlogProfileHeader";
import BlogProfileTimelineCard from "./BlogProfileTimelineCard";
import * as blogServices from "../../services/blogServices";
import _logger from "../../logger";

class BlogProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      body: ""
    };
  }

  componentDidMount = () => {
    this.loadPage();
  };

  loadPage = () => {
    blogServices
      .getById()
      .then(this.getByIdSuccess)
      .catch(this.onGlobalError);
  };

  getByIdSuccess = props => {
    _logger("individual profile successfully grabbed!");
    this.setState({
      id: props.response.blog.id,
      title: props.blog.title,
      body: props.blog.body
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <BlogProfileHeader value="header" />
          <ul>
            <BlogProfileTimelineCard value="header" />
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default BlogProfile;
