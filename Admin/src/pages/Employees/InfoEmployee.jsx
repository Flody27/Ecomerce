import Layout from "../../components/Layout";
import { MODULES } from "../../Enums/ModuleEnums";
import CommingSoon from "../../components/CommingSoon";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import { useEffect } from "react";

export default function InfoEmployee() {
  const title = "Info Empleado";
  const session = UseSessionUser();
  // const employeeId = window.location.pathname.split("/")[2];
  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.EMPLOYEES, ACTIONS.DETAILS)) {
        return (window.location.href = "/");
      }
    }
  }, [session]);
  return (
    <Layout title={title} module={MODULES.EMPLOYEES}>
      <CommingSoon />
    </Layout>
  );
}
