import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function Orders() {
  return (
    <Layout title="Orders" module={MODULES.ORDERS}>
      <CommingSoon />
    </Layout>
  );
}
