import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { Get, Remove } from "../../Services/Api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Customers() {
  const title = "Clientes";
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    Get("/getUsers").then((data) => {
      setCustomers(data.data.filter((x) => x.userType == "customer"));
    });
  }, []);

  const columns = [
    "Nombre",
    "Apellidos",
    "Teléfono",
    "Correo Eletrónico",
    {
      name: "Acciones",
      options: {
        filter: false,
        print: false,
        download: false,
      },
    },
  ];

  function deleteCustomer(id) {
    Swal.fire({
      title: "Esta seguro de esta acción?",
      text: "Se va a perder esta información para siempre",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Remove("/deleteUser", id).then(() => {
          Swal.fire({
            title: "Eliminado",
            text: "Se eliminó con éxito",
            icon: "success",
            timer: 1500,
          }).then(() => window.location.replace("/Clientes"));
        });
      }
    });
  }

  const Options = (id) => {
    return (
      <>
        <a
          href={`/EditarCliente/${id}`}
          className="btn btn-primary btn-sm mx-1"
        >
          <i className="fa fa-edit"></i>
        </a>
        <button
          type="button"
          onClick={() => {
            deleteCustomer(id);
          }}
          className="btn btn-danger btn-sm mx-1"
        >
          <i className="fa fa-trash-o"></i>
        </button>
        <a href={`/Cliente/${id}`} className="btn btn-success btn-sm mx-1">
          <i className="fa fa-eye"></i>
        </a>
      </>
    );
  };

  return (
    <Layout title={title}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">{title}</a>
        <div className="ml-auto">
          <a
            href="/AgregarCliente"
            className="btn btn-primary mx-1"
            type="button"
          >
            Agregar
          </a>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12">
            <div className="table-responsive">
              <Table
                title={"Clientes"}
                data={customers.map((customer) => [
                  customer.name,
                  customer.lastName,
                  customer.phoneNumber,
                  customer.email,
                  Options(customer._id),
                ])}
                columns={columns}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
