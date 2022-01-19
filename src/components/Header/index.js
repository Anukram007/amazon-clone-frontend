import React from "react";

function index(props) {
  return (
    <nav id="pageTop" className="navbar navbar-expand-md navbar-dark bg-dark">
      <button
        className="btn btn-outline-light"
        data-toggle="drawer"
        data-target="#amazon-drawer"
      >
        <i className="fas fa-sliders-h"></i>
      </button>

      <div
        className="drawer drawer-left slide"
        tabindex="-1"
        role="dialog"
        aria-labelledby="drawer-demo-title"
        aria-hidden="true"
        id="amazon-drawer"
      >
        <div
          className="drawer-content drawer-content-scrollable"
          role="document"
        >
          <div className="drawer-header bg-dark text-white">
            <h5 className="drawer-title mx-auto" id="drawer-demo-title">
              <i className="fas fa-user-circle"></i> Hello, Sign In
            </h5>
          </div>
          <div className="drawer-body">
            <h6 className="text-muted text-uppercase">Help & Settings</h6>
            <a href="#" className="btn btn-outline-success my-2 btn-sm">
              Your Account
            </a>
            <a href="#" className="btn btn-warning my-2 btn-sm">
              Sign in
            </a>
          </div>
          <div className="drawer-footer">
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              data-dismiss="drawer"
              aria-label="Close"
            >
              <i className="fas fa-2x fa-times"></i>
            </button>
          </div>
        </div>
      </div>

      <a className="navbar-brand pl-2" href="/">
        <img
          src="assets/img/amazon_logo_white.png"
          height="30px"
          width="100px"
          alt="amazon logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline px-lg-5" noValidate method="get">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownCategoryBtn"
                  name="btnCategory"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownCategoryBtn"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              size="50"
              name="query"
              id="query"
            />
            <input
              type="text"
              name="category"
              id="category"
              value="Book"
              hidden
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-warning">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item dropdown px-2">
            <a
              className="nav-link"
              href="#"
              id="prefLanguageDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-2x fa-language"></i>
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="prefLanguageDropdown"
            >
              <form className="p-3">
                <div className="dropdown-divider"></div>
                <div className="custom-control custom-radio mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="prefLang"
                    id="engLang"
                    value="english"
                  />
                  <label className="custom-control-label" htmlFor="engLang">
                    English - EN
                  </label>
                </div>
                <div className="dropdown-divider"></div>
                <div className="custom-control custom-radio mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="prefLang"
                    id="hindiLang"
                    value="hindi"
                  />
                  <label className="custom-control-label" htmlFor="hindiLang">
                    हिन्दी - HI
                  </label>
                </div>
                <div className="dropdown-divider"></div>
                <div className="custom-control custom-radio mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="prefLang"
                    id="bengLang"
                    value="bengali"
                  />
                  <label className="custom-control-label" htmlFor="bengLang">
                    বাংলা - BN
                  </label>
                </div>
                <div className="dropdown-divider"></div>
              </form>
            </ul>
          </li>
          <li className="nav-item dropdown px-2">
            <a
              className="nav-link"
              href="#"
              id="userAccount"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-2x fa-user-circle"></i>
            </a>
            <div className="dropdown-menu px-3" aria-labelledby="userAccount">
              <div className="d-flex flex-column justify-content-center">
                <a
                  href="#"
                  className="btn btn-warning w-100 btn-sm font-weight-bold"
                >
                  Signin
                </a>
                <small className="text-muted">
                  New customer? <a href="#">Start here.</a>
                </small>
              </div>
            </div>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="/cart" aria-disabled="true">
              <i className="fas fa-2x text-light fa-shopping-cart"></i>
              <span className="badge badge-warning badge-pill">
                {props.page === "cart" ? 2 : 0}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default index;
