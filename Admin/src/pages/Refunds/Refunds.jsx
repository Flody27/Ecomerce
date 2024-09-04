import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import { useEffect, useState } from "react";

export default function Refunds() {
  const session = UseSessionUser();
  const [actions, setActions] = useState({
    add: false,
    edit: false,
    details: false,
    delete: false,
  });

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.REFUNDS, ACTIONS.ACCESS)) {
        return (window.location.href = "/");
      }

      setActions({
        add: session.CanUserAccesTo(MODULES.REFUNDS, ACTIONS.CREATE),
        edit: session.CanUserAccesTo(MODULES.REFUNDS, ACTIONS.EDIT),
        details: session.CanUserAccesTo(MODULES.REFUNDS, ACTIONS.DETAILS),
        delete: session.CanUserAccesTo(MODULES.REFUNDS, ACTIONS.DELETE),
      });
    }
  }, [session]);

  return (
    <Layout title="Refunds" module={MODULES.REFUNDS}>
      <CommingSoon />
    </Layout>
  );
}
