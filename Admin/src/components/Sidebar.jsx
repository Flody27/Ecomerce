export default function Sidebar({ title }) {
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
            <li className="g_heading">General</li>
            <li className={title === "TechShop" ? "active" : ""}>
              <a href="/">
                <i className="ti-home" />
                <span>Panel de control</span>
              </a>
            </li>
            <li className="g_heading">E-Commerce</li>
            <li className={title === "Productos" ? "active" : ""}>
              <a href="/Productos">
                <i className="ti-package"></i>
                Productos
              </a>
            </li>
            <li
              className={
                title == "Clientes" || title == "Empleados" ? "active" : ""
              }
            >
              <a href="#" className="has-arrow">
                <i className="ti-user" />
                <span>Usuarios</span>
              </a>
              <ul className="options-sidebar-menu">
                <li className={title == "Clientes" ? "active" : ""}>
                  <a href="/Clientes">Clientes</a>
                </li>
                <li className={title == "Empleados" ? "active" : ""}>
                  <a href="/Empleados">Empleados</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">
                <i className="ti-shopping-cart"></i>Pedidos
              </a>
            </li>
            <li
              className={
                title == "Ventas" || title == "Reembolso" ? "active" : ""
              }
            >
              <a href="#" className="has-arrow">
                <i className="ti-money"></i>
                <span>Ventas</span>
              </a>
              <ul className="options-sidebar-menu">
                <li className={title == "Ventas" ? "active" : ""}>
                  <a href="">Ventas</a>
                </li>
                <li className={title == "Reembolso" ? "active" : ""}>
                  <a href="">Reembolso</a>
                </li>
              </ul>
            </li>
            <li className="g_heading">Admin</li>
            <li className={title == "Roles" ? "active" : ""}>
              <a href="/Roles">
                <i className="ti-lock"></i>Roles
              </a>
            </li>
            <li className={title == "Tienda" ? "active" : ""}>
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
