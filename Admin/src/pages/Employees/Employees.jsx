import Layout from "../../components/Layout";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import Table from "../../components/Table";
import { Get, Remove } from "../../Services/Api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Employees() {
  const title = "Employees";
  const [employees, setEmployees] = useState([]);
  const session = UseSessionUser();
  const [actions, setActions] = useState({
    add: false,
    edit: false,
    details: false,
    delete: false,
  });

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.EMPLOYEES, ACTIONS.ACCESS)) {
        return (window.location.href = "/");
      }

      setActions({
        add: session.CanUserAccesTo(MODULES.EMPLOYEES, ACTIONS.CREATE),
        edit: session.CanUserAccesTo(MODULES.EMPLOYEES, ACTIONS.EDIT),
        details: session.CanUserAccesTo(MODULES.EMPLOYEES, ACTIONS.DETAILS),
        delete: session.CanUserAccesTo(MODULES.EMPLOYEES, ACTIONS.DELETE),
      });
    }
  }, [session]);

  useEffect(() => {
    Get("/getUsers").then((data) => {
      setEmployees(data.data.filter((x) => x.userType == "employee"));
    });
  }, []);

  const columns = [
    "Name",
    "Last Name",
    "Email",
    "Job",
    {
      name: "Options",
      options: {
        filter: false,
        print: false,
        download: false,
      },
    },
  ];

  function deleteEmployee(id) {
    if (actions.delete) {
      return;
    }

    Swal.fire({
      title: "Are you sure about this action?",
      text: "This information wil be delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Remove("/deleteUser", id).then(() => {
          Swal.fire({
            title: "Deleted",
            text: "Deleted successfully",
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
            href={`/EditEmployee/${id}`}
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
              deleteEmployee(id);
            }}
            className="btn btn-danger btn-sm mx-1"
          >
            <i className="fa fa-trash-o"></i>
          </button>
        ) : (
          ""
        )}
        {actions.details ? (
          <a href={`/Employee/${id}`} className="btn btn-success btn-sm mx-1">
            <i className="fa fa-eye"></i>
          </a>
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <Layout title={title} module={MODULES.EMPLOYEES}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">{title}</a>
        <div className="ml-auto">
          {actions.add ? (
            <a
              href="/AddEmployee"
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
                data={employees.map((employee) => [
                  employee.name,
                  employee.lastName,
                  employee.email,
                  employee.position,
                  Options(employee._id),
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
