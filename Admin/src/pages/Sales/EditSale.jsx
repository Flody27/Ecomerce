import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function EditSale() {
  return (
    <Layout title="Edit Sale" module={MODULES.SALES}>
      <CommingSoon />
    </Layout>
  );
}
