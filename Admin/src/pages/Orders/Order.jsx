import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";


export default function Order() {
  return (
    <Layout title="Order" module={MODULES.ORDERS}>
      <CommingSoon />
    </Layout>
  );
}
