import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { Get, GetById, Update } from "../../Services/Api";
import Swal from "sweetalert2";

export default function EditRole() {
  const title = "Editar Rol";
  const roleId = window.location.pathname.split("/")[2];
  const [role, setRole] = useState({
    roleName: "",
    resources: [],
  });
  const [resource, setResource] = useState({
    resource: "Selecione un recurso",
    actions: [],
  });

  const actions = ["access", "details", "edit", "create", "delete"];
  const [resourcesList, setResourcesList] = useState([]);

  useEffect(() => {
    Get("/getResources").then((data) => {
      setResourcesList(data.data);
    });
    GetById("/getRole", roleId).then((data) => {
      setRole(data.data);
    });
  }, []);

  const HandleInputChange = (event) => {
    setRole({ ...role, [event.target.name]: event.target.value });
  };

  const handleCheckbox = (event) => {
    const { value, checked } = event.target;

    if (!checked) {
      return setResource({
        ...resource,
        actions: resource.actions.filter((data) => value !== data),
      });
    }

    setResource({
      ...resource,
      actions: resource.actions.concat(value),
    });
  };

  const GrantResource = () => {
    if (
      resource.actions == 0 ||
      resource.resource.trim() == "Selecione un recurso"
    ) {
      CleanResourceForm();
      return Swal.fire(
        "error",
        "Los campos acciones y recursos no pueden estar vacios",
        "error"
      );
    }

    if (role.resources.find((role) => role.resource == resource.resource)) {
      CleanResourceForm();
      return Swal.fire("error", "No se puede repetir recurso", "error");
    }

    setRole({ ...role, resources: role.resources.concat(resource) });
    CleanResourceForm();
  };

  function CleanResourceForm() {
    setResource({ resource: "Selecione un recurso", actions: [] });
    actions.forEach((action) => {
      document.getElementById(action).checked = false;
    });
  }

  const RevokResource = (index) => {
    setRole({
      ...role,
      resources: role.resources.filter((_, i) => i !== index),
    });
  };

  function HandleSubmit(e) {
    e.preventDefault();

    if (role.roleName.trim == "" || role.resources.length == 0) {
      return Swal.fire(
        "error",
        "Nombre de rol o recursos no asignados",
        "error"
      );
    }

    Update(`/editRole/${roleId}`, role)
      .then(() => {
        Swal.fire("Éxito", "Rol actualizado exitosamente", "success").then(
          () => {
            window.location = "/Roles";
          }
        );
      })
      .catch((error) => {
        Swal.fire("Error", error, "error");
        console.log(error);
      });
  }

  return (
    <Layout title={title}>
      <div className="container-fluid">
        <div className="row clearfix d-flex justify-content-center">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <form
              className="card"
              noValidate
              autoSave="false"
              id="formData"
              onSubmit={HandleSubmit}
            >
              <div className="body row">
                <div className="form-group mb-3 col-12">
                  <b>Rol</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="roleName"
                    id="rolName"
                    value={role.roleName}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="mb-3 col-12">
                  <hr />
                  <b>Asignar acceso a un recurso</b>
                </div>
                <div className="form-group mb-3 col-12">
                  <p>Lista de recursos</p>
                  <select
                    className="custom-select"
                    id="resource"
                    name="resource"
                    required
                    value={resource.resource}
                    onChange={(e) => {
                      setResource({ ...resource, resource: e.target.value });
                    }}
                  >
                    <option value="Selecione un recurso" disabled>
                      Selecione un recurso
                    </option>
                    {resourcesList.map((res) => (
                      <option key={res._id} value={res.resource}>
                        {res.resource}
                      </option>
                    ))}
                  </select>
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-12">
                  {actions.map((action, index) => {
                    return (
                      <div key={index} className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={action}
                          name={action}
                          value={action}
                          onChange={handleCheckbox}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          {action}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="col-12 mb-3">
                  <button
                    onClick={GrantResource}
                    type="button"
                    className="btn btn-secondary"
                  >
                    Asignar recurso
                  </button>
                  <hr />
                </div>
                {role.resources == 0 ? (
                  <div className="col-12 mb-3 text-center">
                    <b>Sin recurso asignados</b>
                  </div>
                ) : (
                  role.resources.map((resource, index) => (
                    <div className="col-4" key={index}>
                      <div className="card generic-card resource-card">
                        <button
                          className="btn-delete-generic"
                          type="button"
                          onClick={() => {
                            RevokResource(index);
                          }}
                        >
                          <i className="ti-close"></i>
                        </button>
                        <b>{resource.resource}</b>
                        {resource.actions.map((action, index) => (
                          <p key={index}>
                            <i className="fa fa-check"></i> {action}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))
                )}
                <div className="col-12">
                  <hr />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 my-2">
                    Actulizar Rol
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
