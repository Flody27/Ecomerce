import Layout from "../../components/Layout";
import CommingSoon from "../../components/CommingSoon";
import { MODULES } from "../../Enums/ModuleEnums";


// Mostrar lista de los usuarios a los que se les asigno x rol 
export default function Role() {
  return (
    <Layout title="Role" module={MODULES.ROLES}>
      <CommingSoon />
    </Layout>
  );
}
