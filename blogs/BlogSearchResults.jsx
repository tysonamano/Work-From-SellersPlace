import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import PropTypes from "prop-types";

const BlogSearchResults = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <ModalHeader>
        <div className="content-heading">
          <div>
            Search<small>Search and filter results</small>
          </div>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="col-lg-9">
          <div className="form-group mb-4">
            <input
              className="form-control mb-2"
              type="text"
              onChange={props.handleSearch}
              placeholder="Search products, people, apps, etc."
            />
            <div className="d-flex">
              <button className="btn btn-secondary" type="button">
                Search
              </button>
              <div className="ml-auto">
                <label className="c-checkbox">
                  <input
                    id="inlineCheckbox10"
                    type="checkbox"
                    value="option1"
                  />
                  <span className="fa fa-check" /> Products
                </label>
                <label className="c-checkbox">
                  <input
                    id="inlineCheckbox20"
                    type="checkbox"
                    value="option2"
                  />
                  <span className="fa fa-check" /> People
                </label>
                <label className="c-checkbox">
                  <input
                    id="inlineCheckbox30"
                    type="checkbox"
                    value="option3"
                  />
                  <span className="fa fa-check" /> Apps
                </label>
              </div>
            </div>
          </div>
          {/*<!-- START card-->*/}
          <div className="card card-default">
            <div className="card-header">
              <a
                className="float-right"
                href="#"
                data-tool="panel-refresh"
                data-toggle="tooltip"
                title=""
                data-original-title="Refresh Card"
              >
                <em className="fas fa-sync" />
              </a>
              Search Results
            </div>
            {/*<!-- START table-responsive-->*/}
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="wd-xxs" data-check-all="">
                      <div
                        className="checkbox c-checkbox"
                        data-toggle="tooltip"
                        data-title="Check All"
                        data-original-title=""
                        title=""
                      >
                        <label className="m-0">
                          <input type="checkbox" />
                          <span className="fa fa-check" />
                        </label>
                      </div>
                    </th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="checkbox c-checkbox">
                        <label>
                          <input type="checkbox" />
                          <span className="fa fa-check" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="media align-items-center">
                        <a className="mr-3" href="#">
                          <img
                            className="img-fluid rounded thumb64"
                            src="img/dummy.png"
                            alt=""
                          />
                        </a>
                        <div className="media-body d-flex">
                          <div>
                            <h4 className="m-0">Product 1</h4>
                            <small className="text-muted">
                              Category1, Category2
                            </small>
                            <p>
                              Sed gravida auctor odio. Sed viverra rutrum
                              hendrerit. Praesent dapibus justo dolor.
                              Suspendisse rhoncus consectetur eros vehicula
                              accumsan.
                            </p>
                          </div>
                          <div className="ml-auto">
                            <div className="btn btn-info btn-sm">View</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox c-checkbox">
                        <label>
                          <input type="checkbox" />
                          <span className="fa fa-check" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="media align-items-center">
                        <a className="mr-3" href="#">
                          <img
                            className="img-fluid rounded thumb64"
                            src="img/dummy.png"
                            alt=""
                          />
                        </a>
                        <div className="media-body d-flex">
                          <div>
                            <h4 className="m-0">Product 2</h4>
                            <small className="text-muted">
                              Category1, Category2
                            </small>
                            <p>
                              Sed gravida auctor odio. Sed viverra rutrum
                              hendrerit. Praesent dapibus justo dolor.
                              Suspendisse rhoncus consectetur eros vehicula
                              accumsan.
                            </p>
                          </div>
                          <div className="ml-auto">
                            <div className="btn btn-info btn-sm">View</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox c-checkbox">
                        <label>
                          <input type="checkbox" />
                          <span className="fa fa-check" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="media align-items-center">
                        <a className="mr-3" href="#">
                          <img
                            className="img-fluid rounded thumb64"
                            src="img/dummy.png"
                            alt=""
                          />
                        </a>
                        <div className="media-body d-flex">
                          <div>
                            <h4 className="m-0">Product 3</h4>
                            <small className="text-muted">
                              Category1, Category2
                            </small>
                            <p>
                              Sed gravida auctor odio. Sed viverra rutrum
                              hendrerit. Praesent dapibus justo dolor.
                              Suspendisse rhoncus consectetur eros vehicula
                              accumsan.
                            </p>
                          </div>
                          <div className="ml-auto">
                            <div className="btn btn-info btn-sm">View</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox c-checkbox">
                        <label>
                          <input type="checkbox" />
                          <span className="fa fa-check" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="media align-items-center">
                        <a className="mr-3" href="#">
                          <img
                            className="img-fluid rounded thumb64"
                            src="img/dummy.png"
                            alt=""
                          />
                        </a>
                        <div className="media-body d-flex">
                          <div>
                            <h4 className="m-0">Product 4</h4>
                            <small className="text-muted">
                              Category1, Category2
                            </small>
                            <p>
                              Sed gravida auctor odio. Sed viverra rutrum
                              hendrerit. Praesent dapibus justo dolor.
                              Suspendisse rhoncus consectetur eros vehicula
                              accumsan.
                            </p>
                          </div>
                          <div className="ml-auto">
                            <div className="btn btn-info btn-sm">View</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox c-checkbox">
                        <label>
                          <input type="checkbox" />
                          <span className="fa fa-check" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="media align-items-center">
                        <a className="mr-3" href="#">
                          <img
                            className="img-fluid rounded thumb64"
                            src="img/dummy.png"
                            alt=""
                          />
                        </a>
                        <div className="media-body d-flex">
                          <div>
                            <h4 className="m-0">Product 5</h4>
                            <small className="text-muted">
                              Category1, Category2
                            </small>
                            <p>
                              Sed gravida auctor odio. Sed viverra rutrum
                              hendrerit. Praesent dapibus justo dolor.
                              Suspendisse rhoncus consectetur eros vehicula
                              accumsan.
                            </p>
                          </div>
                          <div className="ml-auto">
                            <div className="btn btn-info btn-sm">View</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*<!-- END table-responsive-->*/}
            <div className="card-footer">
              <div className="d-flex">
                <button className="btn btn-sm btn-secondary">Clear</button>
                <nav className="ml-auto">
                  <ul className="pagination pagination-sm">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        »
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/*<!-- END card-->*/}
        </div>
      </ModalBody>
    </Modal>
  );
};

BlogSearchResults.propTypes = {
  search: PropTypes.string,
  show: PropTypes.bool,
  handleClose: PropTypes.bool,
  handleSearch: PropTypes.func
};

export default BlogSearchResults;
