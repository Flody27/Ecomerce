import { MODULES } from "../Enums/ModuleEnums";
import { UseSessionUser } from "../Context/Session";
export default function Sidebar({ module }) {
  const session = UseSessionUser();

  const resources = session.Resources();

  function UserHasAccesToEcommerce() {
    let modulesEcommerce = [
      MODULES.CUSTOMERS,
      MODULES.EMPLOYEES,
      MODULES.ORDERS,
      MODULES.REFUNDS,
      MODULES.SALES,
    ];

    return modulesEcommerce.some((mod) => resources.includes(mod));
  }

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

            <li
              className="g_heading"
              style={{
                display: `${UserHasAccesToEcommerce() ? "" : "none"}`,
              }}
            >
              E-Commerce
            </li>

            <li
              className={module === MODULES.PRODUCTS ? "active" : ""}
              style={{
                display: `${
                  resources.includes(MODULES.PRODUCTS) ? "" : "none"
                }`,
              }}
            >
              <a href="/Products">
                <i className="ti-package"></i>
                Products
              </a>
            </li>

            <li
              className={`${
                module == MODULES.CUSTOMERS || module == MODULES.EMPLOYEES
                  ? "active"
                  : ""
              }`}
              style={{
                display: `${
                  resources.includes(MODULES.CUSTOMERS) ||
                  resources.includes(MODULES.EMPLOYEES)
                    ? ""
                    : "none"
                }`,
              }}
            >
              <a href="#" className="has-arrow">
                <i className="ti-user" />
                <span>Users</span>
              </a>
              <ul className="options-sidebar-menu">
                <li
                  className={module == MODULES.CUSTOMERS ? "active" : ""}
                  style={{
                    display: `${
                      resources.includes(MODULES.CUSTOMERS) ? "" : "none"
                    }`,
                  }}
                >
                  <a href="/Customers">Customers</a>
                </li>
                <li
                  className={module == MODULES.EMPLOYEES ? "active" : ""}
                  style={{
                    display: `${
                      resources.includes(MODULES.EMPLOYEES) ? "" : "none"
                    }`,
                  }}
                >
                  <a href="/Employees">Employees</a>
                </li>
              </ul>
            </li>
            <li
              className={module == MODULES.ORDERS ? "active" : ""}
              style={{
                display: `${resources.includes(MODULES.ORDERS) ? "" : "none"}`,
              }}
            >
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
              style={{
                display: `${
                  resources.includes(MODULES.SALES) ||
                  resources.includes(MODULES.REFUNDS)
                    ? ""
                    : "none"
                }`,
              }}
            >
              <a href="#" className="has-arrow">
                <i className="ti-money"></i>
                <span>Sales</span>
              </a>
              <ul className="options-sidebar-menu">
                <li
                  className={module == MODULES.SALES ? "active" : ""}
                  style={{
                    display: `${
                      resources.includes(MODULES.SALES) ? "" : "none"
                    }`,
                  }}
                >
                  <a href="/Sales">Sales</a>
                </li>
                <li
                  className={module == MODULES.REFUNDS ? "active" : ""}
                  style={{
                    display: `${
                      resources.includes(MODULES.REFUNDS) ? "" : "none"
                    }`,
                  }}
                >
                  <a href="/Refunds">Refunds</a>
                </li>
              </ul>
            </li>
            <li
              className="g_heading"
              style={{
                display: `${
                  resources.includes(MODULES.ROLES) ||
                  resources.includes(MODULES.SHOPCONFIG)
                    ? ""
                    : "none"
                }`,
              }}
            >
              Admin
            </li>
            <li
              className={module == MODULES.ROLES ? "active" : ""}
              style={{
                display: `${resources.includes(MODULES.ROLES) ? "" : "none"}`,
              }}
            >
              <a href="/Roles">
                <i className="ti-lock"></i>Roles
              </a>
            </li>
            <li
              className={module == MODULES.SHOPCONFIG ? "active" : ""}
              style={{
                display: `${
                  resources.includes(MODULES.SHOPCONFIG) ? "" : "none"
                }`,
              }}
            >
              <a href="">
                <i className="ti-bag"></i>Shop Config
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
