import React from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardImg,
  CardText
} from "reactstrap";
import PropTypes from "prop-types";
import _logger from "../../logger";
import Moment from "moment";
import NavBarNew from "../common/public/NavBarNew";
import Cover from "../common/public/Cover";
import Footer from "../common/public/Footer";

class FullBlogPage extends React.Component {
  constructor(props) {
    super(props);
    const propsBlog = props.location.state.blog;

    this.state = {
      blog: {
        id: propsBlog.id,
        title: propsBlog.title,
        description: propsBlog.description,
        body: propsBlog.body,
        imageUrl: propsBlog.imageUrl,
        statusId: 1,
        dateToPublish: propsBlog.dateToPublish,
        dateCreated: propsBlog.dateCreated,
        dateModified: propsBlog.dateModified,
        createdBy: propsBlog.createdBy
      },
      author: {
        firstName: propsBlog.author.firstName,
        lastName: propsBlog.author.lastName
      },
      isPublic: props.location.state.isPublic
    };
  }

  componentDidMount() {
    _logger(this.state);
  }
  render() {
    const { blog, author } = this.state;
    return (
      <div className="wrapper">
        {this.state.isPublic && (
          <div>
            <div>
              <NavBarNew />
            </div>
            <div>
              <Cover
                backgroundImage={"url(/img/Bg_Events.jpg)"}
                coverTitle={"Blogs"}
                coverBody={"Check out these vendors and their experiences!"}
                showWidget={false}
              />
            </div>
          </div>
        )}
        {/*<!-- Main section-->*/}
        {/*<!-- Page content-->*/}
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className="row">
            {/*<!-- Blog Content-->*/}
            <div className="col-xl-9">
              <Card className="card-default" style={{ width: "1200px" }}>
                <CardHeader>
                  <div className="bb">
                    <CardTitle>
                      <h1 className="text-lg mt-3">{blog.title}</h1>
                    </CardTitle>
                    {/* Author Info and Commments */}
                    <p className="d-flex">
                      <span>
                        <small className="mr-1">
                          By
                          {" " + author.firstName + " " + author.lastName}
                        </small>
                        <small className="ml-5">
                          Published on:{" "}
                          {Moment(this.state.blog.dateToPublish).format(
                            "MMMM Do YYYY"
                          )}
                        </small>
                      </span>
                    </p>
                    {/* {props.isPublic === true ? (<Link path="/public/blogs">Home</Link>) */}
                  </div>
                </CardHeader>
                {/* <a href=""> */}
                <CardImg className="img-fluid" src={blog.imageUrl} alt="demo" />
                {/* </a> */}
                <CardBody className="card-body text-md">
                  <CardText>{blog.description}</CardText>
                  <br />
                  <CardText>{blog.body}</CardText>

                  <hr className="my-4" />
                  <div className="btn-group" role="group" aria-label="...">
                    <button className="btn btn-secondary" type="button">
                      <em className="fab fa-facebook-f text-muted" />
                    </button>
                    <button className="btn btn-secondary" type="button">
                      <em className="fab fa-twitter text-muted" />
                    </button>
                    <button className="btn btn-secondary" type="button">
                      <em className="fab fa-google-plus-g text-muted" />
                    </button>
                    <button className="btn btn-secondary" type="button">
                      <em className="fa fa-tumblr text-muted" />
                    </button>
                    <button className="btn btn-secondary" type="button">
                      <em className="fa fa-pinterest text-muted" />
                    </button>
                    <button className="btn btn-secondary" type="button">
                      <em className="fa fa-share-alt text-muted" />
                    </button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        {this.state.isPublic && (
          <div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

FullBlogPage.propTypes = {
  history: PropTypes.object,
  location: PropTypes.shape({
    state: PropTypes.shape({
      blog: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        body: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        dateToPublish: PropTypes.string,
        statusId: PropTypes.bool,
        dateCreated: PropTypes.string.isRequired,
        dateModified: PropTypes.string,
        createdBy: PropTypes.number,
        author: PropTypes.shape({
          firstName: PropTypes.string,
          lastName: PropTypes.string
        })
      }),
      isPublic: PropTypes.bool
    }),
    publishDate: PropTypes.string
  })
};
export default FullBlogPage;
