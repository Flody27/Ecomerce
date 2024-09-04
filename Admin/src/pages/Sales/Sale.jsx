import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import { useEffect } from "react";

export default function Sale() {
  const session = UseSessionUser();

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.SALES, ACTIONS.DETAILS)) {
        return (window.location.href = "/");
      }
    }
  }, [session]);

  return (
    <Layout title="Sale" module={MODULES.SALES}>
      <CommingSoon />
    </Layout>
  );
}
