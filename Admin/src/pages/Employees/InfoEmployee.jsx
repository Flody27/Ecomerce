import Layout from "../../components/Layout";

export default function InfoEmployee() {
  const title = "Info Empleado";
  const employeeId = window.location.pathname.split("/")[2];
  return <Layout title={title}></Layout>;
}
