import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function EditRefund() {
  return (
    <Layout title="EditRefund" module={MODULES.REFUNDS}>
      <CommingSoon />
    </Layout>
  );
}
