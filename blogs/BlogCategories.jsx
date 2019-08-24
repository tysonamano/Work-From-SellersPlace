import React from "react";

class BlogCategories extends React.Component {
  render() {
    return (
      <div>
        <div className="card-header">Categories</div>
        <div className="card-body">
          <ul className="list-unstyled">
            <li>
              <a href="">
                <em className="fa fa-angle-right fa-fw" />
                Smartphones
              </a>
            </li>
            <li>
              <a href="">
                <em className="fa fa-angle-right fa-fw" />
                Mobiles
              </a>
            </li>
            <li>
              <a href="">
                <em className="fa fa-angle-right fa-fw" />
                Tech
              </a>
            </li>
            <li>
              <a href="">
                <em className="fa fa-angle-right fa-fw" />
                Inpiration
              </a>
            </li>
            <li>
              <a href="">
                <em className="fa fa-angle-right fa-fw" />
                Workspace
              </a>
            </li>
          </ul>
        </div>
        <div className="card-default card">
          <div className="card-header">Tag Cloud</div>
          <div className="card-body" />
        </div>
        <div className="card-default card">
          <div className="card-header">Ads</div>
          <div className="ie-fix-flex card-body">
            <a href="">
              <img
                className="img-fluid img-thumbnail"
                src="img/mockup.png"
                alt="Demo"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCategories;
