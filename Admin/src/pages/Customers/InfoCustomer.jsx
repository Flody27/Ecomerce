import Layout from "../../components/Layout";
import { useEffect } from "react";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";

export default function InfoCustomer() {
  const title = "Customer Details";
  const session = UseSessionUser();
  // const customerId = window.location.pathname.split("/")[2];

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.PRODUCTS, ACTIONS.DETAILS)) {
        return (window.location.href = "/");
      }
    }
  }, [session]);

  return (
    <Layout title={title} module={MODULES.CUSTOMERS}>
      <CommingSoon />
    </Layout>
  );
}
