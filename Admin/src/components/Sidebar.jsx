import { MODULES } from "../Enums/ModuleEnums";

export default function Sidebar({ module }) {
  return (
    <>
      <div className="left_sidebar">
        <nav className="sidebar">
          <div className="user-info">
            <div className="image">
              <img src="../assets/images/logo.png" alt="User" />
            </div>
            <div className="detail mt-3">
              <h5 className="mb-0">user name</h5>
              <small>Admin</small>
            </div>
          </div>
          <ul id="main-menu" className="metismenu">
            <li className="g_heading">Main menu</li>
            <li className={module == MODULES.HOME ? "active" : ""}>
              <a href="/">
                <i className="ti-home" />
                <span>Home</span>
              </a>
            </li>
            <li className="g_heading">E-Commerce</li>
            <li className={module === MODULES.PRODUCTS ? "active" : ""}>
              <a href="/Products">
                <i className="ti-package"></i>
                Products
              </a>
            </li>
            <li
              className={
                module == MODULES.CUSTOMERS || module == MODULES.EMPLOYEES
                  ? "active"
                  : ""
              }
            >
              <a href="#" className="has-arrow">
                <i className="ti-user" />
                <span>Users</span>
              </a>
              <ul className="options-sidebar-menu">
                <li className={module == MODULES.CUSTOMERS ? "active" : ""}>
                  <a href="/Customers">Customers</a>
                </li>
                <li className={module == MODULES.EMPLOYEES ? "active" : ""}>
                  <a href="/Employees">Employees</a>
                </li>
              </ul>
            </li>
            <li className={module == MODULES.ORDERS ? "active" : ""}>
              <a href="/Orders">
                <i className="ti-shopping-cart"></i>Orders
              </a>
            </li>
            <li
              className={
                module == MODULES.SALES || module == MODULES.REFUNDS
                  ? "active"
                  : ""
              }
            >
              <a href="#" className="has-arrow">
                <i className="ti-money"></i>
                <span>Sales</span>
              </a>
              <ul className="options-sidebar-menu">
                <li className={module == MODULES.SALES ? "active" : ""}>
                  <a href="/Sales">Sales</a>
                </li>
                <li className={module == MODULES.REFUNDS ? "active" : ""}>
                  <a href="/Refunds">Refunds</a>
                </li>
              </ul>
            </li>
            <li className="g_heading">Admin</li>
            <li className={module == MODULES.ROLES ? "active" : ""}>
              <a href="/Roles">
                <i className="ti-lock"></i>Roles
              </a>
            </li>
            <li className={module == MODULES.SHOPCONFIG ? "active" : ""}>
              <a href="">
                <i className="ti-bag"></i>Tienda
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
