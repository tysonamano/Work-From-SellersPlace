import React from "react";
//import BlogProfileTimeline from "./BlogProfileTimeline";
import PropTypes from "prop-types";
const BlogProfileHeader = React.memo(function BlogProfileHeader(props) {
  return (
    <div className="content-wrapper">
      <div className="unwrap">
        {/* background profile image / color theme */}
        <div className="p-4 text-center text-white">
          {/* profile cirle image */}
          <img
            className="img-thumbnail rounded-circle thumb128"
            src={props.blog.imageUrl}
            alt=""
          />
        </div>
      </div>
      <div className="text-center bg-gray-dark p-3 mb-4">
        <div className="row">
          <div className="col-4 br"> Placeholder</div>
          <div className="col-4 br">
            <h3 className="m-0">2000</h3>
            <p className="m-0">Likes</p>
          </div>
          <div className="col-4">
            <h3 className="m-0">100</h3>
            <p className="m-0">Following</p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="row">
          <div className="col-xl-9" />
          <div className="col-xl-3">
            <div className="card card-default">
              <div className="card-body">
                <div className="text-center">
                  <h2>Title</h2>
                  <p className="mt-0">Body</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

BlogProfileHeader.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    imageUrl: PropTypes.string,
    dateToPublish: PropTypes.string,
    statusId: PropTypes.number,
    dateCreated: PropTypes.string,
    dateModified: PropTypes.string,
    createdBy: PropTypes.number
  })
};

export default React.memo(BlogProfileHeader);
