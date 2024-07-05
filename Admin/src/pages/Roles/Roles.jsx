/* eslint-disable no-undef */
import Layout from "../../components/Layout";
import Table from "../../components/Table";
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
    "Recurso",
    {
      name: "Eliminar",
      options: {
        filter: false,
        print: false,
        download: false,
      },
    },
  ];

  const columnsRol = [
    "Rol",
    "Detalles",
    {
      name: "Opciones",
      options: {
        filter: false,
        print: false,
        download: false,
      },
    },
  ];

  function deleteResource(id) {
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
        Remove("/deleteResource", id).then(() => {
          Swal.fire({
            title: "Eliminado",
            text: "Se eliminó con éxito",
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
        Remove("/deleteRole", id).then(() => {
          Swal.fire({
            title: "Eliminado",
            text: "Se eliminó con éxito",
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
        <a href={`/EditarRol/${id}`} className="btn btn-primary btn-sm mx-1">
          <i className="fa fa-edit"></i>
        </a>
      </>
    );
  };

  function AddResource() {
    if (resource.resource == "") {
      return Swal.fire("Upss", "El campo recurso es obligatorio", "error");
    }

    Create("/addResource", resource).then(() => {
      Swal.fire("Guardado", "Recurso registrado exitosamente", "success").then(
        () => {
          window.location.reload();
        }
      );
    });
  }

  function OpenModal(role) {
    $("#modalRole").modal("show");
    setResourcesDetail(role);
  }
  return (
    <Layout title={title}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">{title}</a>
        <div className="ml-auto">
          <a href="/AgregarRol" className="btn btn-primary mx-1" type="button">
            Agregar Rol
          </a>
          <button
            className="btn btn-primary mx-1"
            type="button"
            data-toggle="modal"
            data-target="#modalResource"
          >
            Agregar recurso
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
                    Ver detalles
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
                title={"Recursos"}
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
              <h5 className="modal-title">Direccion</h5>
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
                <b>Recurso</b>
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
                <small>Obligatorio</small>
                <p className="p-1">
                  <i className="ti-info"></i>
                  Un recurso se refiere a un modulo o paginas al que un usuario
                  tiene acceso, ej: Productos, Clientes, etc.
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
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={AddResource}
              >
                Guardar
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
              <h5 className="modal-title">Detalles</h5>
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
