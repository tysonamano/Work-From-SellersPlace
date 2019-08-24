import React from "react";

class BlogSearch extends React.Component {
  render() {
    return (
      <div className="card card-default">
        <div className="card-header">Search</div>
        <div className="card-body">
          <form className="form-horizontal">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
              />
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">
                  <em className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BlogSearch;
