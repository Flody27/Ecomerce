export default function Sidebar() {
  return (
    <>
      <div className="left_sidebar">
        <nav className="sidebar">
          <div className="user-info">
            <div className="image">
              <a href="#;">
                <img src="../assets/images/logo.png" alt="User" />
              </a>
            </div>
            <div className="detail mt-3">
              <h5 className="mb-0">user name</h5>
              <small>Admin</small>
            </div>
          </div>
          <ul id="main-menu" className="metismenu">
            <li className="g_heading">General</li>
            <li className="active">
              <a href="index.html">
                <i className="ti-home" />
                <span>Panel de control</span>
              </a>
            </li>
            <li className="g_heading">Desplegable</li>
            <li>
              <a href="#" className="has-arrow">
                <i className="ti-pie-chart" />
                <span>Desplegable</span>
              </a>
              <ul>
                <li>
                  <a href="">Ejemplo</a>
                </li>
                <li>
                  <a href="">Ejemplo</a>
                </li>
                <li>
                  <a href="">Ejemplo</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
