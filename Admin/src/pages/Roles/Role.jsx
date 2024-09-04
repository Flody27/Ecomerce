import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import { useEffect } from "react";

// TODO: Mostrar lista de los usuarios a los que se les asigno x rol
export default function Role() {
  const session = UseSessionUser();

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.ROLES, ACTIONS.DETAILS)) {
        return (window.location.href = "/");
      }
    }
  }, [session]);

  return (
    <Layout title="Role" module={MODULES.ROLES}>
      <CommingSoon />
    </Layout>
  );
}
