import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function Refund() {
  return (
    <Layout title="Refund" module={MODULES.REFUNDS}>
      <CommingSoon />
    </Layout>
  );
}
