export default function Sidebar() {
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
            <li className="active">
              <a href="/">
                <i className="ti-home" />
                <span>Panel de control</span>
              </a>
            </li>
            <li className="g_heading">E-Commerce</li>
            <li className="">
              <a href="/Productos">
                <i className="ti-package"></i>
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="has-arrow">
                <i className="ti-user" />
                <span>Usuarios</span>
              </a>
              <ul className="options-sidebar-menu">
                <li>
                  <a href="/Clientes">Clientes</a>
                </li>
                <li>
                  <a href="/Empleados">Empleados</a>
                </li>
              </ul>
            </li>
    
          </ul>
        </nav>
      </div>
    </>
  );
}
