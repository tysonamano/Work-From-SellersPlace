import React from "react";
import BlogCard from "./BlogCard";
// import BlogSearch from "./BlogSearch";
import _logger from "../../logger";
// import BlogCategories from "./BlogCategories";
import * as blogServices from "../../services/blogServices";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BlogsNav from "./BlogsNav";
//import BlogStyles from "./css/BlogStyles.css";
import BlogSearchResults from "./BlogSearchResults";
var prev = 0;
var last = 0;
var next = 0;

class BlogsList extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      pages: [],
      currentPage: 0,
      pageIndex: 0,
      peoplePerPage: 12,
      totalPages: "",
      isPublic: false,
      search: "",
      show: false
    };
  }
  //handleClick is supposed to work when you click on a number page when those are properly mapping out
  handleClose() {
    this.setState({ show: false });
  }

  handleClick = event => {
    this.setState(
      {
        currentPage: Number(event.target.id),
        pageIndex: Number(event.target.id)
      },
      this.loadPage
    );
  };

  componentDidMount = () => {
    this.loadPage();
  };

  loadPage = () => {
    const pageSize = this.state.peoplePerPage;
    const pageIndex = this.state.pageIndex;

    blogServices
      .getAllPosts(pageIndex, pageSize)
      .then(this.getBlogsSuccess)
      .catch(this.onGlobalError);
  };

  handleSearch = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loadSearchPage = () => {
    const pageSize = this.state.pageSize;
    const pageIndex = this.state.pageIndex;
    const search = this.state.search;

    blogServices
      .paginateSearch(pageSize, pageIndex, search)
      .then(this.onSearchSuccess)
      .catch(this.onGlobalError);

    return <BlogSearchResults show={true} handleClose={this.handleClose} />;
  };

  getBlogsSuccess = response => {
    _logger("get call was a success", response.item);

    this.setState((prevState, prevProps) => {
      _logger(prevState, prevProps, "setting blogs");
      return {
        blogs: response.item.pagedItems,
        totalPages: response.item.totalPages
      };
    });
  };

  deletePost = e => {
    const id = e.target.value;

    blogServices
      .deletePost(id)
      .then(this.onDeleteSuccess)
      .catch(this.onGlobalError);
  };

  onDeleteSuccess = () => {
    this.loadPage();
  };

  lastPage = () => {
    this.setState(
      {
        currentPage: last,
        pageIndex: last
      },
      this.loadPage
    );
  };

  firstPage = () => {
    this.setState(
      {
        currentPage: 0,
        pageIndex: 0
      },
      this.loadPage
    );
  };

  setBlogs = blog => {
    _logger(blog);

    return (
      <BlogCard
        blog={blog}
        key={blog.id}
        updatePost={this.updatePost}
        deletePost={this.deletePost}
        isPublic={this.props.isPublic}
      />
    );
  };

  render() {
    _logger("Rendering fine!");
    const { blogs, currentPage, peoplePerPage } = this.state;
    const indexOfLastBlog = currentPage + peoplePerPage;
    const indexOfFirstBlog = indexOfLastBlog - peoplePerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
    prev = currentPage > 0 ? currentPage - 1 : 0;
    last = Math.ceil(blogs.length / peoplePerPage);
    next = last === currentPage ? currentPage : currentPage + 1;

    return (
      <React.Fragment>
        <div className="content-wrapper">
          {!this.props.isPublic && (
            <div
              className="card default-card"
              style={{ paddingBottom: "30px", marginBottom: "3px" }}
            >
              <div className="card-header" style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "40pt" }}>Welcome to SellersPlace!</h1>
              </div>
            </div>
          )}
          {/* Create New Blog */}
          {!this.props.isPublic && (
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card-header">
                <h3>Create New Blog?</h3>
              </div>
              <div className="card-body">
                <Link
                  to="/admin/blogs/new"
                  className="btn btn-primary"
                  type="button"
                >
                  New
                </Link>
              </div>
            </div>
          )}
          <BlogsNav
            state={this.state}
            firstPage={this.firstPage}
            lastPage={this.lastPage}
            handleClick={this.handleClick}
            prev={prev}
            last={last}
            next={next}
          />
          <div className="row">
            <div className="container">
              <div className="col-md-12">
                <div className="card-columns">
                  {currentBlogs.map(this.setBlogs)}
                </div>
              </div>
            </div>
          </div>
          <footer>
            <BlogsNav
              state={this.state}
              firstPage={this.firstPage}
              lastPage={this.lastPage}
              handleClick={this.handleClick}
              prev={prev}
              last={last}
              next={next}
            />
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

BlogsList.propTypes = {
  history: PropTypes.any,
  isPublic: PropTypes.bool
};

export default BlogsList;
