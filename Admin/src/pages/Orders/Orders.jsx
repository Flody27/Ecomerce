import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import { useEffect, useState } from "react";

export default function Orders() {
  const session = UseSessionUser();
  const [actions, setActions] = useState({
    add: false,
    edit: false,
    details: false,
    delete: false,
  });

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.ORDERS, ACTIONS.ACCESS)) {
        return (window.location.href = "/");
      }

      setActions({
        add: session.CanUserAccesTo(MODULES.ORDERS, ACTIONS.CREATE),
        edit: session.CanUserAccesTo(MODULES.ORDERS, ACTIONS.EDIT),
        details: session.CanUserAccesTo(MODULES.ORDERS, ACTIONS.DETAILS),
        delete: session.CanUserAccesTo(MODULES.ORDERS, ACTIONS.DELETE),
      });
    }
  }, [session]);

  return (
    <Layout title="Orders" module={MODULES.ORDERS}>
      <CommingSoon />
    </Layout>
  );
}
