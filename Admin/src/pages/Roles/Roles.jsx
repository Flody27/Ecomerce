/* eslint-disable no-undef */
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import { Get, Remove } from "../../Services/Api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Roles() {
  const title = "Roles";
  const session = UseSessionUser();
  const [roles, setRoles] = useState([]);
  const [resourcesDetail, setResourcesDetail] = useState([]);
  const [actions, setActions] = useState({
    add: false,
    edit: false,
    details: false,
    delete: false,
  });

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.ROLES, ACTIONS.ACCESS)) {
        return (window.location.href = "/");
      }

      setActions({
        add: session.CanUserAccesTo(MODULES.ROLES, ACTIONS.CREATE),
        edit: session.CanUserAccesTo(MODULES.ROLES, ACTIONS.EDIT),
        details: session.CanUserAccesTo(MODULES.ROLES, ACTIONS.DETAILS),
        delete: session.CanUserAccesTo(MODULES.ROLES, ACTIONS.DELETE),
      });
    }
  }, [session]);

  useEffect(() => {
    Get("/getRoles").then((data) => {
      setRoles(data.data);
    });
  }, []);

  const columnsRol = [
    "Role",
    "Details",
    {
      name: "Options",
      options: {
        filter: false,
        print: false,
        download: false,
      },
    },
  ];

  function deleteRole(id) {
    if (!actions.delete) {
      return;
    }

    Swal.fire({
      title: "Are you sure about this action?",
      text: "This information wil be deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Remove("/deleteRole", id).then(() => {
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

  const OptionsRoles = (id) => {
    return (
      <>
        {actions.delete ? (
          <button
            type="button"
            onClick={() => {
              deleteRole(id);
            }}
            className="btn btn-danger btn-sm mx-1"
          >
            <i className="fa fa-trash-o"></i>
          </button>
        ) : (
          ""
        )}
        {actions.edit ? (
          <a href={`/EditRole/${id}`} className="btn btn-primary btn-sm mx-1">
            <i className="fa fa-edit"></i>
          </a>
        ) : (
          ""
        )}
      </>
    );
  };

  function Details(id, resources) {
    return actions.details ? (
      <button
        key={id}
        onClick={() => {
          OpenModal(resources);
        }}
        className="btn btn-info"
      >
        See details
      </button>
    ) : (
      ""
    );
  }

  function OpenModal(role) {
    $("#modalRole").modal("show");
    setResourcesDetail(role);
  }

  return (
    <Layout title={title} module={MODULES.ROLES}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">{title}</a>
        <div className="ml-auto">
          <a href="/AddRole" className="btn btn-primary mx-1" type="button">
            Add Role
          </a>
        </div>
      </nav>
      {/* Role Table */}
      <div className="container-fluid">
        <div className="row-clearfix">
          <div className="col-lg-12 col-md-12">
            <div className="table-responsive">
              <Table
                title={"Roles"}
                data={roles.map((role) => [
                  role.roleName,
                  Details(role._id, role.resources),
                  OptionsRoles(role._id),
                ])}
                columns={columnsRol}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Details Modal */}
      <div
        className="modal fade"
        id="modalRole"
        tabIndex="-1"
        aria-labelledby="modalRole"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Details</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti-close" style={{ color: "black" }}></i>
              </button>
            </div>
            <div className="modal-body row">
              {resourcesDetail.map((resource, index) => (
                <div className="col-6" key={index}>
                  <div className="card generic-card resource-card">
                    <b>{resource.resource}</b>
                    {resource.actions.map((action, index) => (
                      <p key={index}>
                        <i className="fa fa-check"></i> {action}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
