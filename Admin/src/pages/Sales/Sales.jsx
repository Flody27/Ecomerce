import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function Sales() {
  return (
    <Layout title="Sales" module={MODULES.SALES}>
      <CommingSoon />
    </Layout>
  );
}
