import Layout from "../../components/Layout";
import { MODULES } from "../../Enums/ModuleEnums";
import { ACTIONS } from "../../Enums/ActionsEnums";
import { UseSessionUser } from "../../Context/Session";
import { useState, useEffect } from "react";
import { Create, Get } from "../../Services/Api";
import { object, string, number, date } from "yup";
import Swal from "sweetalert2";

export default function AddEmployee() {
  const title = "Add Employee";
  const session = UseSessionUser();
  const [employee, setEmployee] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    position: "",
    salary: 0,
    startDate: "",
    role: "",
    userType: "employee",
  });
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    if (session.CanUserAccesTo) {
      if (!session.CanUserAccesTo(MODULES.EMPLOYEES, ACTIONS.CREATE)) {
        return (window.location.href = "/");
      }
    }
  }, [session]);

  useEffect(() => {
    Get("/GetRoles").then((data) => {
      setRoles(data.data);
    });
  }, []);

  const schemaEmployee = object().shape({
    name: string()
      .required("The name field is required.")
      .typeError("Incorrect value in the name field."),
    lastName: string()
      .required("The last name field is required.")
      .typeError("Incorrect value in the last name field."),
    email: string()
      .email()
      .required("The email field is required.")
      .typeError("Incorrect value in the email field."),
    phoneNumber: number()
      .required("The phone number field is required.")
      .typeError("Incorrect value in the phone number field."),
    position: string()
      .required("The job field is required.")
      .typeError("Incorrect value in the job field."),
    salary: number()
      .required("The salary field is required.")
      .typeError("Incorrect value in the salary field."),
    startDate: date()
      .required("The hire date field is required.")
      .typeError("Incorrect value in the hire date field."),
    role: string().required("The role is required"),
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

      await Create("/addEmployee", updatedObject);
      Swal.fire("Success", "Employee successfully added", "success").then(
        () => {
          window.location = "/Employees";
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
    <Layout title={title} module={MODULES.EMPLOYEES}>
      <div className="container-fluid">
        <div className="row clearfix d-flex justify-content-center">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <form className="card" noValidate autoSave="false" id="formData">
              <div className="body row">
                <div className="form-group mb-3 col-6">
                  <b>Name</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="name"
                    id="name"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Last name</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="lastName"
                    id="lastName"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Email</b>
                  <input
                    type="email"
                    className="form-control"
                    aria-label=""
                    name="email"
                    id="email"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Phone number</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-label=""
                    name="phoneNumber"
                    id="phoneNumber"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Job</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="position"
                    id="position"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>
                <div className="form-group mb-3 col-6">
                  <b>Salary</b>
                  <input
                    type="text"
                    className="form-control"
                    aria-label=""
                    name="salary"
                    id="salary"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>

                <div className="form-group mb-3 col-12">
                  <b>Role</b>
                  <select
                    name="roles"
                    className="form-control"
                    id="roles"
                    defaultValue="none"
                    onChange={(e) => {
                      setEmployee({ ...employee, role: e.target.value });
                    }}
                  >
                    <option value="none" disabled>
                      Select a role
                    </option>
                    {roles.map((role) => (
                      <option key={role._id}>{role.roleName}</option>
                    ))}
                  </select>
                  <small>Required</small>
                </div>

                <div className="form-group mb-3 col-12">
                  <b>Hire date</b>
                  <input
                    type="date"
                    className="form-control"
                    aria-label=""
                    name="startDate"
                    id="startDate"
                    required
                    onChange={HandleInputChange}
                  />
                  <small>Required</small>
                </div>

                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={() => HandleSubmit()}
                  >
                    Add
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
