import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function AddSale() {
  return (
    <Layout title="Add Sale" module={MODULES.SALES}>
      <CommingSoon />
    </Layout>
  );
}
