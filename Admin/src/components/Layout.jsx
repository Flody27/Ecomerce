import Sidebar from "./Sidebar";
import axios from "axios";

// import { UseSessionUser } from "../Context/Session";
// import { useState } from "react";

export default function Layout({
  children,
  title = "TechShop",
  module = "Home",
}) {
  window.document.title = `TechShop - ${title}`;
  const baseUrl = import.meta.env.VITE_API_URL;
  // const session = UseSessionUser();

  // useState(() => {
  //   if (session.user == null) window.location = "/Login";
  // });

  async function LogOut() {
    await axios
      .post(`${baseUrl}/Logout`, {}, { withCredentials: true })
      .then(() => {
        window.location.href = "/Login";
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
                    <a href="#" className="link link-sm link--style-3">
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
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={LogOut}
                  >
                    <i className="fa fa-sign-out text-primary" />
                    Sign out
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main_content" id="main-content">
        {/* SIDEBAR */}
        <Sidebar module={module} />

        {/* MAINPAGE */}
        <div className="page">{children}</div>
      </div>
    </>
  );
}
