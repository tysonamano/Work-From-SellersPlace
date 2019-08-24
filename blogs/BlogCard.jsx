import React from "react";
// import { Card } from "react-strap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//import _logger from "../../logger";
import Moment from "moment";
import Styles from "../blogs/css/BlogCardStyles.module.css";

const BlogCard = props => {
  return (
    <React.Fragment>
      <div className="card">
        <div className={Styles.mainContainer}>
          <div className={Styles.imageContainer}>
            <img
              className={Styles.imgFluid}
              src={props.blog.imageUrl}
              alt="Demo"
            />
          </div>

          <div className={Styles.sideContainer}>
            <div className={Styles.user}>
              <small>
                By
                <Link
                  className="ml-1"
                  to={{
                    path: "admin/blogs/:id"
                  }}
                >
                  {props.blog.author.firstName +
                    " " +
                    props.blog.author.lastName}
                </Link>
              </small>
            </div>
            <div>
              <small>Published on</small>
              <br />
              <small className="mr-1">
                {Moment(props.blog.dateToPublish).format("MMMM Do YYYY")}
              </small>
            </div>
          </div>
          {!props.isPublic && (
            <div className={Styles.adminContainer}>
              <div className={Styles.adminOptions}>
                <Link
                  to={{
                    pathname: `/admin/blogs/${props.blog.id}/edit`,
                    state: { blog: props.blog }
                  }}
                  // to={{ path: "/admin/blogs/:id/edit", state: { id: props.blog.id } }}
                >
                  <button
                    className="fa-1x mr-sm-2 fas fa-edit"
                    style={{ color: "#51C6EA" }}
                  />
                </Link>
                <button
                  className="fa-1x mr-sm-2 fas fa-trash-alt"
                  style={{ color: "#51C6EA" }}
                  value={props.blog.id}
                  onClick={props.deletePost}
                />
              </div>
            </div>
          )}

          {/* <span className="ml-auto">
                <small>
                  <strong>56</strong>
                  <span> Comments</span>
                </small> 
              </span>*/}
          <div className={Styles.bodyContainer}>
            <div className={Styles.cardBody}>
              <div className={Styles.titleBox}>
                <h3 className={Styles.blogTitle}>
                  {props.isPublic === true ? (
                    <Link
                      className="ml-1"
                      to={{
                        pathname: `/blogs/${props.blog.id}`,
                        state: {
                          blog: props.blog,
                          publishDate: props.blog,
                          isPublic: true
                        }
                      }}
                    >
                      {props.blog.title}
                    </Link>
                  ) : (
                    <Link
                      className="ml-1"
                      to={{
                        pathname: `/admin/blogs/${props.blog.id}`,
                        state: {
                          blog: props.blog,
                          publishDate: props.blog,
                          isPublic: false
                        }
                      }}
                    >
                      {props.blog.title}
                    </Link>
                  )}
                </h3>
              </div>
              <p className={Styles.description}>{props.blog.description}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

BlogCard.propTypes = {
  dateOfPublishing: PropTypes.func,
  publishDate: PropTypes.string,
  deletePost: PropTypes.func,
  isPublic: PropTypes.bool,
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    dateToPublish: PropTypes.string,
    statusId: PropTypes.bool.isRequired,
    dateCreated: PropTypes.string.isRequired,
    dateModified: PropTypes.string,
    createdBy: PropTypes.number,
    author: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    })
  })
};

export default BlogCard;
