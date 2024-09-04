import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import { useEffect, useState } from "react";

export default function Sales() {
  const session = UseSessionUser();
  const [actions, setActions] = useState({
    add: false,
    edit: false,
    details: false,
    delete: false,
  });

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.SALES, ACTIONS.ACCESS)) {
        return (window.location.href = "/");
      }

      setActions({
        add: session.CanUserAccesTo(MODULES.SALES, ACTIONS.CREATE),
        edit: session.CanUserAccesTo(MODULES.SALES, ACTIONS.EDIT),
        details: session.CanUserAccesTo(MODULES.SALES, ACTIONS.DETAILS),
        delete: session.CanUserAccesTo(MODULES.SALES, ACTIONS.DELETE),
      });
    }
  }, [session]);

  return (
    <Layout title="Sales" module={MODULES.SALES}>
      <CommingSoon />
    </Layout>
  );
}
