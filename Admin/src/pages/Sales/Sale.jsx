import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function Sale() {
  return (
    <Layout title="Sale" module={MODULES.SALES}>
      <CommingSoon />
    </Layout>
  );
}
