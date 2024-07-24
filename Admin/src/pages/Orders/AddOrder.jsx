import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function AddOrder() {
  return (
    <Layout title="AddOrder" module={MODULES.ORDERS}>
      <CommingSoon />
    </Layout>
  );
}
