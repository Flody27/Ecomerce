import Sidebar from "./Sidebar";

export default function Layout({ children, title = "TechShop" }) {
  return (
    <>
      {/* NAV */}
      <nav className="navbar custom-navbar navbar-expand-lg py-2">
        <div className="container-fluid px-0">
          <a href="#" className="menu_toggle">
            <i className="fa fa-align-left" />
          </a>
          <a href="index.html" className="navbar-brand">
            <strong>Tech</strong>Shop
          </a>
          <div id="navbar_main">
            <ul className="navbar-nav mr-auto hidden-xs">
              <li className="nav-item page-header">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="fa fa-home" />
                    </a>
                  </li>
                  <li className="breadcrumb-item active">{title}</li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item hidden-xs">
                <form className="form-inline main_search">
                  <input
                    className="form-control form-control-sm mr-sm-2"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Buscar"
                  />
                </form>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-cogs" />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-link-icon"
                  href="#"
                  id="navbar_1_dropdown_2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell" />
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xl py-0">
                  <div className="py-3 px-3">
                    <h5 className="heading h6 mb-0">
                      Notifications{" "}
                      <span className="badge badge-pill badge-primary text-uppercase float-right">
                        3
                      </span>
                    </h5>
                  </div>
                  <div className="list-group">
                    <a
                      href="#"
                      className="list-group-item list-group-item-action d-flex"
                    >
                      <div className="list-group-img">
                        <span className="avatar bg-purple">JD</span>
                      </div>
                      <div className="list-group-content">
                        <div className="list-group-heading">
                          Johnyy Depp <small>10:05 PM</small>
                        </div>
                        <p className="text-sm">
                          Lorem ipsum dolor consectetur adipiscing eiusmod
                          tempor
                        </p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action d-flex"
                    >
                      <div className="list-group-img">
                        <span className="avatar bg-pink">TC</span>
                      </div>
                      <div className="list-group-content">
                        <div className="list-group-heading">
                          Tom Cruise <small>10:05 PM</small>
                        </div>
                        <p className="text-sm">
                          Lorem ipsum dolor sit amet consectetur eiusmod tempor
                        </p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action d-flex"
                    >
                      <div className="list-group-img">
                        <span className="avatar bg-blue">WS</span>
                      </div>
                      <div className="list-group-content">
                        <div className="list-group-heading">
                          Will Smith <small>10:05 PM</small>
                        </div>
                        <p className="text-sm">
                          Lorem sit amet consectetur adipiscing eiusmod tempor
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="py-3 text-center">
                    <a
                      href="#"
                      className="link link-sm link--style-3"
                    >
                      View all notifications
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-link-icon"
                  href="#"
                  id="navbar_1_dropdown_3"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <h6 className="dropdown-header">User menu</h6>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-user text-primary" />
                    My Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <span className="float-right badge badge-success">
                      $50K
                    </span>
                    <i className="fa fa-briefcase text-primary" />
                    My Balance
                  </a>
                  <a className="dropdown-item" href="#">
                    <span className="float-right badge badge-warning">4</span>
                    <i className="fa fa-envelope text-primary" />
                    Inbox
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-cog text-primary" />
                    Settings
                  </a>
                  <div className="dropdown-divider" role="presentation" />
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-sign-out text-primary" />
                    Sign out
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main_content" id="main-content">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAINPAGE */}
        <div className="page">
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Dashboard
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
              <i className="fa fa-align-justify" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Application
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Inbox
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Calendar
                    </a>
                    <a className="dropdown-item" href="#">
                      TaskBoard
                    </a>
                    <a className="dropdown-item" href="#">
                      Chat App
                    </a>
                    <a className="dropdown-item" href="#">
                      Contacts
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Users
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Timeline
                    </a>
                    <a className="dropdown-item" href="#">
                      Invoices
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Stater page
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Pricing
                    </a>
                    <a className="dropdown-item" href="#">
                      Search
                    </a>
                    <a className="dropdown-item" href="#">
                      Testimonials
                    </a>
                    <a className="dropdown-item" href="#">
                      Map
                    </a>
                    <a className="dropdown-item" href="#">
                      Icon
                    </a>
                    <a className="dropdown-item" href="#">
                      Carousel
                    </a>
                    <a className="dropdown-item" href="#">
                      Gallery
                    </a>
                    <a className="dropdown-item" href="#">
                      Lookup
                    </a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button type="button" className="btn btn-primary">
                  Add
                </button>
                <a
                  href="https://themeforest.net/user/wrraptheme/portfolio"
                  title="Portfolio"
                  className="btn btn-success ml-2"
                >
                  Portfolio
                </a>
              </form>
            </div>
          </nav>
          <div className="container-fluid">

            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card widget_2 big_icon traffic">
                  <div className="body">
                    <h6>Traffic</h6>
                    <h2>
                      20 <small className="info">of 1Tb</small>
                    </h2>
                    <small>2% higher than last month</small>
                    <div className="progress mb-0">
                      <div
                        className="progress-bar bg-orange"
                        role="progressbar"
                        aria-valuenow={45}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "45%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {children}
        </div>
      </div>
    </>
  );
}
