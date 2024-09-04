import Layout from "../../components/Layout";
import { useEffect } from "react";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";

export default function ProductPreview() {
  const title = "Producto";
  const session = UseSessionUser();

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.PRODUCTS, ACTIONS.DETAILS)) {
        return (window.location.href = "/");
      }
    }
  }, [session]);

  return (
    <Layout title={title} module={MODULES.PRODUCTS}>
      <CommingSoon />
    </Layout>
  );
}
