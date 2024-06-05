import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { GetById, Update } from "../../Services/Api";
import { object, string, number, date } from "yup";
import Swal from "sweetalert2";

export default function EditEmployee() {
  const title = "Editar Empleado";
  const employeeId = window.location.pathname.split("/")[2];
  const [employee, setEmployee] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    position: "",
    salary: 0,
    startDate: "",
    userType: "employee",
  });

  useEffect(() => {
    GetById("/getUser", employeeId).then((data) => {
      setEmployee(data.data);
    });
  }, []);

  const schemaEmployee = object().shape({
    name: string()
      .required("El campo nombre es obligatorio")
      .typeError("Valor incorrecto en el campo nombre"),
    lastName: string()
      .required("El campo apellido es obligatorio")
      .typeError("Valor incorrecto en el campo apellido"),
    email: string()
      .email()
      .required("El campo correo es obligatorio")
      .typeError("Valor incorrecto en el campo correo"),
    phoneNumber: number()
      .required("El campo numero telefonico es obligatorio")
      .typeError("Valor incorrecto en el campo numero telefonico"),
    position: string()
      .required("El campo puesto es obligatorio")
      .typeError("Valor incorrecto en el campo puesto"),
    salary: number()
      .required("El campo salario es obligatorio")
      .typeError("Valor incorrecto en el campo salario"),
    startDate: date()
      .required("El campo fecha de incio es obligatorio")
      .typeError("Valor incorrecto en el campo fecha de inicio"),
  });

  const HandleInputChange = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  async function HandleSubmit() {
    try {
      await schemaEmployee.validate(employee, { abortEarly: false });

      const updatedObject = {
        ...employee,
        startDate: new Date(employee.startDate).toISOString(),
      };

      await Update(`/EditUser/${employeeId}`, updatedObject);
      Swal.fire("Éxito", "Empleado editado exitosamente", "success").then(
        () => {
          window.location = "/Empleados";
        }
      );
    } catch (error) {
      if (error.name === "ValidationError") {
        let message = "";
        error.inner.forEach((err) => {
          message += `<p>${err.message}<p/>`;
        });
        Swal.fire("Oops", message, "error");
      } else {
        Swal.fire("Error", error.message, "error");
      }
    }
  }

  return (
    <Layout title={title}>
      <div className="container-fluid">
        <div className="row clearfix d-flex justify-content-center">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <form className="card" noValidate autoSave="false" id="formData">
              <div className="body row">
                <div className="form-group mb-3 col-6">
                  <b>Nombre</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="name"
                    id="name"
                    value={employee.name}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Apellidos</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="lastName"
                    id="lastName"
                    value={employee.lastName}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Correo</b>
                  <input
                    type="email"
                    className="form-control"
                    aria-label=""
                    name="email"
                    id="email"
                    value={employee.email}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Numero telefonico</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label=""
                    name="phoneNumber"
                    id="phoneNumber"
                    value={employee.phoneNumber}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Puesto</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="position"
                    id="position"
                    value={employee.position}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Salario</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="salary"
                    id="salary"
                    value={employee.salary}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Obligatorio</small>
                </div>
                <div className="form-group mb-3 col-12">
                  <b>Fecha de incio</b>
                  <input
                    type="date"
                    className="form-control"
                    aria-label=""
                    name="startDate"
                    id="startDate"
                    value={employee.startDate.substring(0, 10)}
                    required
                    onChange={HandleInputChange}
                  />
                  <small>
                    Obligatorio (fecha en la que inicio o va a iniciar a
                    trabajar el empleado)
                  </small>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={() => HandleSubmit()}
                  >
                    Agregar
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
