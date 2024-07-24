import Layout from "../../components/Layout";
import { MODULES } from "../../Enums/ModuleEnums";
import CommingSoon from "../../components/CommingSoon";

export default function InfoEmployee() {
  const title = "Info Empleado";
  // const employeeId = window.location.pathname.split("/")[2];
  return (
    <Layout title={title} module={MODULES.EMPLOYEES}>
      <CommingSoon />
    </Layout>
  );
}
