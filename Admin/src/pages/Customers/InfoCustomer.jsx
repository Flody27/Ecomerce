import Layout from "../../components/Layout";

export default function InfoCustomer() {
  const title = "Info Cliente";
  const customerId = window.location.pathname.split("/")[2];
  return <Layout title={title}></Layout>;
}
