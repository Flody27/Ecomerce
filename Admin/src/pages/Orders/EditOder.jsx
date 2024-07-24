import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function EditOrder() {
  return (
    <Layout title="EditOrder" module={MODULES.ORDERS}>
      <CommingSoon />
    </Layout>
  );
}
