import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";

export default function ProductPreview() {
  const title = "Producto";
  return (
    <Layout title={title} module={MODULES.PRODUCTS}>
      <CommingSoon />
    </Layout>
  );
}
