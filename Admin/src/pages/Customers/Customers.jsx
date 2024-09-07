import Layout from "../../components/Layout";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import Table from "../../components/Table";
import { Get, Remove } from "../../Services/Api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Customers() {
  const title = "Customers";
  const [customers, setCustomers] = useState([]);
  const session = UseSessionUser();
  const [actions, setActions] = useState({
    add: false,
    edit: false,
    details: false,
    delete: false,
  });

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.CUSTOMERS, ACTIONS.ACCESS)) {
        return (window.location.href = "/");
      }

      setActions({
        add: session.CanUserAccesTo(MODULES.CUSTOMERS, ACTIONS.CREATE),
        edit: session.CanUserAccesTo(MODULES.CUSTOMERS, ACTIONS.EDIT),
        details: session.CanUserAccesTo(MODULES.CUSTOMERS, ACTIONS.DETAILS),
        delete: session.CanUserAccesTo(MODULES.CUSTOMERS, ACTIONS.DELETE),
      });
    }
  }, [session]);

  useEffect(() => {
    Get("/getCustomers").then((data) => {
      setCustomers(data.data);
    });
  }, []);

  const columns = [
    "Name",
    "Lastname",
    "Phone number",
    "Email",
    {
      name: "Options  ",
      options: {
        filter: false,
        print: false,
        download: false,
      },
    },
  ];

  function deleteCustomer(id) {
    if (!actions.delete) {
      return;
    }

    Swal.fire({
      title: "Are you sure about this action?",
      text: "This information will be deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Remove("/deleteCustomer", id).then(() => {
          Swal.fire({
            title: "Deleted",
            text: "Deleted sucessfully",
            icon: "success",
            timer: 1500,
          }).then(() => window.location.reload());
        });
      }
    });
  }

  const Options = (id) => {
    return (
      <>
        {actions.edit ? (
          <a
            href={`/EditCustomer/${id}`}
            className="btn btn-primary btn-sm mx-1"
          >
            <i className="fa fa-edit"></i>
          </a>
        ) : (
          ""
        )}
        {actions.delete ? (
          <button
            type="button"
            onClick={() => {
              deleteCustomer(id);
            }}
            className="btn btn-danger btn-sm mx-1"
          >
            <i className="fa fa-trash-o"></i>
          </button>
        ) : (
          ""
        )}
        {actions.details ? (
          <a href={`/Customer/${id}`} className="btn btn-success btn-sm mx-1">
            <i className="fa fa-eye"></i>
          </a>
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <Layout title={title} module={MODULES.CUSTOMERS}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">{title}</a>
        <div className="ml-auto">
          {actions.add ? (
            <a
              href="/AddCustomer"
              className="btn btn-primary mx-1"
              type="button"
            >
              Add
            </a>
          ) : (
            ""
          )}
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12">
            <div className="table-responsive">
              <Table
                title={title}
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
