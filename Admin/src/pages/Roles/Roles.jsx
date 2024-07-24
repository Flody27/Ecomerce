/* eslint-disable no-undef */
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { MODULES } from "../../Enums/ModuleEnums";
import { Get, Remove, Create } from "../../Services/Api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Roles() {
  const title = "Roles";
  const [roles, setRoles] = useState([]);
  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState({ resource: "" });
  const [resourcesDetail, setResourcesDetail] = useState([]);

  useEffect(() => {
    Get("/getRoles").then((data) => {
      setRoles(data.data);
    });
    Get("/getResources").then((data) => {
      setResources(data.data);
    });
  }, []);

  const columnsResource = [
    "Resource",
    {
      name: "Delete",
      options: {
        filter: false,
        print: false,
        download: false,
      },
    },
  ];

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

  function deleteResource(id) {
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
        Remove("/deleteResource", id).then(() => {
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

  const OptionsResource = (id) => {
    return (
      <>
        <button
          type="button"
          onClick={() => {
            deleteResource(id);
          }}
          className="btn btn-danger btn-sm mx-1"
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </>
    );
  };

  function deleteRole(id) {
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
        <button
          type="button"
          onClick={() => {
            deleteRole(id);
          }}
          className="btn btn-danger btn-sm mx-1"
        >
          <i className="fa fa-trash-o"></i>
        </button>
        <a href={`/EditRole/${id}`} className="btn btn-primary btn-sm mx-1">
          <i className="fa fa-edit"></i>
        </a>
      </>
    );
  };

  function AddResource() {
    if (resource.resource == "") {
      return Swal.fire("Upss", "The resource field is required", "error");
    }

    Create("/addResource", resource).then(() => {
      Swal.fire("Saved", "Recsource saved successfully", "success").then(() => {
        window.location.reload();
      });
    });
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
          <button
            className="btn btn-primary mx-1"
            type="button"
            data-toggle="modal"
            data-target="#modalResource"
          >
            Add resource
          </button>
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
                  <button
                    key={role._id}
                    onClick={() => {
                      OpenModal(role.resources);
                    }}
                    className="btn btn-info"
                  >
                    See details
                  </button>,
                  OptionsRoles(role._id),
                ])}
                columns={columnsRol}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Resource Table */}
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12">
            <div className="table-responsive">
              <Table
                title={"Resources"}
                data={resources.map((res) => [
                  res.resource,
                  OptionsResource(res._id),
                ])}
                columns={columnsResource}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Modal Resource */}
      <div
        className="modal fade"
        id="modalResource"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Resource</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  resource.resource = "";
                }}
              >
                <i className="ti-close" style={{ color: "black" }}></i>
              </button>
            </div>
            <div className="modal-body row">
              <div className="form-group mb-3 col-12">
                <b>Resource</b>
                <input
                  type="text"
                  className="form-control"
                  aria-label=""
                  name="resource"
                  id="resource"
                  value={resource.resource}
                  required
                  onChange={(e) => {
                    setResource({ ...resource, resource: e.target.value });
                  }}
                />
                <small>Required</small>
                <p className="p-1">
                  <i className="ti-info"></i>A resource refers to a module or
                  pages that a user has access to, such as: Products, Customers,
                  etc.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => {
                  resource.resource = "";
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={AddResource}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

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
