import Layout from "../../components/Layout";

export default function Employees() {
  const title = "Empleados";
  return (
    <Layout title={title}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">{title}</a>
        <div className="ml-auto">
          <a
            href="/AgregarEmpleado"
            className="btn btn-primary mx-1"
            type="button"
          >
            Agregar
          </a>
        </div>
      </nav>
    </Layout>
  );
}
