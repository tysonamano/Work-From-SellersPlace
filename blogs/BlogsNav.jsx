import React from "react";
import { Card } from "reactstrap";
import { PropTypes } from "prop-types";

const BlogsNav = props => {
  // const pageNumbers = [];

  // for (
  //   let i = 0;
  //   i <= Math.ceil(props.state.blogs.length / props.state.peoplePerPage);
  //   i++
  // ) {
  //   pageNumbers.push(i);
  // }

  // const renderPageNumbers = pageNumbers.map(number => {
  //   return (
  //     <li key={"button-" + number} className="page-item">
  //       <a
  //         className="page-link"
  //         id={number}
  //         onClick={props.handleClick}
  //       >
  //         {number + 1}
  //       </a>
  //     </li>
  //   );
  // });
  // const renderBlogs = currentBlogs.map((blog, index) => {
  //     return <li key={index}>{blog}</li>;
  //   })
  return (
    <Card style={{ alignItems: "center" }}>
      <ul className="pagination" style={{ marginTop: "0.3rem" }}>
        <li className="page-item">
          <button className="page-link" onClick={props.firstPage}>
            First
          </button>
        </li>
        <li className="page-item">
          {props.state.currentPage === 0 ? (
            <button className="page-link" disabled>
              Prev
            </button>
          ) : (
            <button
              className="page-link"
              id={props.prev}
              onClick={props.handleClick}
            >
              Prev
            </button>
          )}
        </li>
        <li className="page-item">
          <label className="page-link">{props.state.currentPage + 1}</label>
        </li>
        <li className="page-item">
          {props.state.currentPage === props.last ? (
            <button className="page-link" disabled>
              Next
            </button>
          ) : (
            <button
              className="page-link"
              id={props.next}
              onClick={props.handleClick}
            >
              Next
            </button>
          )}
        </li>
        <li className="page-item">
          <button
            className="page-link"
            onClick={props.lastPage}
            aria-label="Previous"
          >
            Last
          </button>
        </li>
      </ul>
    </Card>
  );
};

BlogsNav.propTypes = {
  firstPage: PropTypes.func,
  lastPage: PropTypes.func,
  handleClick: PropTypes.func,
  state: PropTypes.shape({
    blogs: PropTypes.array,
    pages: PropTypes.array,
    peoplePerPage: PropTypes.number,
    currentPage: PropTypes.number,
    totalPages: PropTypes.any
  }),
  prev: PropTypes.number,
  last: PropTypes.number,
  next: PropTypes.number
};
export default BlogsNav;
